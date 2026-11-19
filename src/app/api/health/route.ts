import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    ok: true,
    emailConfigured: Boolean(
      process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL
    ),
  });
}