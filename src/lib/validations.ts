
import type { EnquiryData, FieldErrors } from "@/types/enquiry";
import {
  MAX_MEMBERS,
  MESSAGE_MAX,
  SERVICE_OPTIONS,
} from "@/lib/enquiry";

type ValidationResult =
  | { ok: true; data: EnquiryData }
  | { ok: false; errors: FieldErrors };

const NAME_RE = /^[\p{L}][\p{L}\p{M}\s.'’-]{1,79}$/u;
const CITY_RE = /^[\p{L}\p{N}][\p{L}\p{N}\p{M}\s,./&'’()-]{1,79}$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Single-line text: remove control characters, squash spaces
const clean = (value: unknown): string =>
  typeof value === "string"
    ? value.replace(/\p{Cc}/gu, " ").replace(/\s+/g, " ").trim()
    : "";

// Message: same, but keep line breaks
const cleanMultiline = (value: unknown): string =>
  typeof value === "string"
    ? value
        .replace(/[^\P{Cc}\n]/gu, " ")
        .replace(/[ \t]+/g, " ")
        .trim()
    : "";

/** "+91 98765 43210", "098765 43210" and "9876543210" all become 9876543210 */
export function normalizePhone(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 14 && digits.startsWith("0091")) digits = digits.slice(4);
  else if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return digits;
}

export function validateEnquiry(input: unknown): ValidationResult {
  const raw = (
    typeof input === "object" && input !== null ? input : {}
  ) as Record<string, unknown>;
  const errors: FieldErrors = {};

  const name = clean(raw.name);
  if (!name) errors.name = "Please enter your full name.";
  else if (!NAME_RE.test(name)) errors.name = "Please enter a valid name (letters only).";

  const phone = normalizePhone(typeof raw.phone === "string" ? raw.phone : "");
  if (!phone) errors.phone = "Please enter your mobile number.";
  else if (!/^[6-9]\d{9}$/.test(phone))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";

  const email = clean(raw.email).toLowerCase();
  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > 254 || !EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";

  const city = clean(raw.city);
  if (!city) errors.city = "Please enter your city or area.";
  else if (!CITY_RE.test(city)) errors.city = "Please enter a valid city or area.";

  const service = clean(raw.service);
  if (!service) errors.service = "Please choose what you would like to protect.";
  else if (!SERVICE_OPTIONS.includes(service))
    errors.service = "Please choose an option from the list.";

    const members: EnquiryData["members"] = [];
  const rawMembers = Array.isArray(raw.members) ? raw.members : [];
  if (rawMembers.length > MAX_MEMBERS) {
    errors.members = `You can add up to ${MAX_MEMBERS} family members.`;
  } else {
    for (const item of rawMembers) {
      const member = (
        typeof item === "object" && item !== null ? item : {}
      ) as Record<string, unknown>;
      const memberName = clean(member.name);
      const ageText = clean(
        typeof member.age === "number" ? String(member.age) : member.age
      );
      const age = /^\d{1,3}$/.test(ageText) ? Number(ageText) : NaN;

      if (!NAME_RE.test(memberName) || !Number.isInteger(age) || age > 100) {
        errors.members =
          "Please enter a name and a valid age (0 to 100) for each family member, or remove the empty row.";
        break;
      }
      members.push({ name: memberName, age });
    }
  }

  const message = cleanMultiline(raw.message);
  if (message.length > MESSAGE_MAX)
    errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;

  if (raw.consent !== true)
    errors.consent = "Please tick the box so we can contact you.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: { name, phone, email, city, service, members, message },
  };
}