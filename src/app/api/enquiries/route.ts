import { NextResponse } from "next/server";
import { validateEnquiry } from "@/lib/validations";
import { sendEnquiryEmails } from "@/lib/email";
import { allowRequest } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const fail = (
  status: number,
  code: string,
  extra: Record<string, unknown> = {}
) => NextResponse.json({ ok: false, code, ...extra }, { status });

// AJC-<date in India>-<first 6 characters of the submission id>
function makeReference(clientId: string): string {
  const india = new Date(Date.now() + 5.5 * 60 * 60 * 1000);
  const yymmdd = india.toISOString().slice(2, 10).replace(/-/g, "");
  return `AJC-${yymmdd}-${clientId.replace(/-/g, "").slice(0, 6).toUpperCase()}`;
}

export async function POST(request: Request) {
  const declaredSize = Number(request.headers.get("content-length") ?? "0");
  if (declaredSize > 20_000) return fail(413, "too_large");

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allowRequest(ip)) return fail(429, "rate_limited");

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return fail(400, "bad_request");
  }
  const raw = (
    typeof body === "object" && body !== null ? body : {}
  ) as Record<string, unknown>;

  // Spam trap: bots fill the hidden field. Pretend it worked and send nothing.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return NextResponse.json({ ok: true, reference: "AJC-RECEIVED" });
  }

  const result = validateEnquiry(raw);
  if (!result.ok) return fail(422, "validation_failed", { errors: result.errors });

  const clientId =
    typeof raw.clientId === "string" && /^[A-Za-z0-9-]{8,64}$/.test(raw.clientId)
      ? raw.clientId
      : crypto.randomUUID();
  const reference = makeReference(clientId);

  const outcome = await sendEnquiryEmails(result.data, reference, clientId);
  if (!outcome.companySent) return fail(502, "email_failed", { reference });

  return NextResponse.json({ ok: true, reference });
}