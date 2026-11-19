import { Resend } from "resend";
import type { EnquiryData } from "@/types/enquiry";
import { formatMembers } from "@/lib/enquiry";
import { SITE } from "@/lib/site";

const SUBJECT = "New Customer Insurance Enquiry – Arjun Joshi & Co.";
const DEFAULT_FROM = "Arjun Joshi & Co. <onboarding@resend.dev>";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function tableRow(label: string, valueHtml: string): string {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #e8ddc8;width:34%;font-size:13px;color:#6b5a4a;vertical-align:top;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid #e8ddc8;font-size:15px;font-weight:600;color:#3b2a1d;vertical-align:top;">${valueHtml}</td>
    </tr>`;
}

function describeMembers(data: EnquiryData): string {
  if (data.members.length === 0) return "Not provided";
  const count = data.members.length;
  return `${count} member${count > 1 ? "s" : ""}: ${formatMembers(data.members)}`;
}

function buildCompanyEmail(
  data: EnquiryData,
  reference: string,
  submittedAt: string
) {
  const memberText = describeMembers(data);
  const messageHtml = data.message
    ? escapeHtml(data.message).replace(/\n/g, "<br>")
    : "Not provided";

  const rows = [
    tableRow("Full name", escapeHtml(data.name)),
    tableRow(
      "Phone",
      `<a href="tel:+91${data.phone}" style="color:#3b2a1d;">+91 ${data.phone}</a>`
    ),
    tableRow(
      "Email",
      `<a href="mailto:${escapeHtml(data.email)}" style="color:#3b2a1d;">${escapeHtml(data.email)}</a>`
    ),
    tableRow("City / Area", escapeHtml(data.city)),
    tableRow("Interested in", escapeHtml(data.service)),
    tableRow("Family members", escapeHtml(memberText)),
    tableRow("Message", messageHtml),
    tableRow("Reference no.", escapeHtml(reference)),
    tableRow("Submitted", `${escapeHtml(submittedAt)} (IST)`),
  ].join("");

  const replySubject = encodeURIComponent(`Your insurance enquiry – ${reference}`);

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:24px 12px;background:#f5f0e6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="background:#e8ddc8;padding:24px 28px;border-bottom:4px solid #c6a66b;">
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:bold;color:#3b2a1d;">Arjun Joshi &amp; Co.</div>
          <div style="font-size:13px;color:#4a3b2f;margin-top:2px;">Insurance &amp; Investment Management</div>
        </td>
      </tr>
      <tr>
        <td style="padding:28px;">
          <h1 style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#3b2a1d;">New customer enquiry</h1>
          <p style="margin:0 0 18px;font-size:14px;color:#4a3b2f;">A visitor submitted the enquiry form on your website. Please contact them soon.</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${rows}</table>
          <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:24px;">
            <tr>
              <td style="padding-right:10px;">
                <a href="tel:+91${data.phone}" style="display:inline-block;background:#c6a66b;color:#3b2a1d;text-decoration:none;font-weight:bold;font-size:14px;padding:12px 22px;border-radius:999px;">Call customer</a>
              </td>
              <td>
                <a href="mailto:${escapeHtml(data.email)}?subject=${replySubject}" style="display:inline-block;border:1px solid #3b2a1d;color:#3b2a1d;text-decoration:none;font-weight:bold;font-size:14px;padding:11px 22px;border-radius:999px;">Reply by email</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 28px;background:#f5f0e6;font-size:12px;color:#6b5a4a;">
          Sent automatically from the Arjun Joshi &amp; Co. website enquiry form.
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    "New customer enquiry",
    "",
    `Name: ${data.name}`,
    `Phone: +91 ${data.phone}`,
    `Email: ${data.email}`,
    `City / Area: ${data.city}`,
    `Interested in: ${data.service}`,
    `Family members: ${memberText}`,
    `Message: ${data.message || "Not provided"}`,
    `Reference no.: ${reference}`,
    `Submitted: ${submittedAt} (IST)`,
  ].join("\n");

  return { html, text };
}

function buildCustomerEmail(data: EnquiryData, reference: string) {
  const intro =
    "Thank you for contacting Arjun Joshi & Co. We have successfully received your insurance enquiry. Our team will get in touch with you soon.";

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:24px 12px;background:#f5f0e6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="background:#e8ddc8;padding:24px 28px;border-bottom:4px solid #c6a66b;">
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:bold;color:#3b2a1d;">Arjun Joshi &amp; Co.</div>
          <div style="font-size:13px;color:#4a3b2f;margin-top:2px;">Insurance &amp; Investment Management</div>
        </td>
      </tr>
      <tr>
        <td style="padding:28px;font-size:15px;line-height:1.6;color:#3b2a1d;">
          <p style="margin:0 0 14px;">Dear ${escapeHtml(data.name)},</p>
          <p style="margin:0 0 14px;">${intro}</p>
          <p style="margin:0 0 14px;">Your reference number: <strong>${escapeHtml(reference)}</strong></p>
          <p style="margin:0;font-size:13px;color:#6b5a4a;">Coverage, premiums and eligibility are subject to the respective insurer’s terms and conditions.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `Dear ${data.name},\n\n${intro}\n\nYour reference number: ${reference}`;
  return { html, text };
}

type SendResponse = {
  error: { name: string; message: string; statusCode?: number | null } | null;
};

// Try up to 3 times. Stop early only for problems that retrying cannot fix.
async function sendWithRetry(
  send: () => Promise<SendResponse>,
  attempts = 3
): Promise<{ ok: boolean; error?: string }> {
  let lastError = "";

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const { error } = await send();
      if (!error) return { ok: true };

      lastError = `${error.name}: ${error.message}`;
      const status = error.statusCode ?? 0;
      if (status >= 400 && status < 500 && status !== 429) break;
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
    }
    if (attempt < attempts) await sleep(500 * attempt);
  }

  return { ok: false, error: lastError };
}

function logLastResort(reference: string, data: EnquiryData) {
  // Last-resort copy so a lead can be recovered from the server logs
  console.error(`[enquiry] ${reference} LAST-RESORT COPY:`, JSON.stringify(data));
}

export type SendResult = { companySent: boolean; customerSent: boolean };

export async function sendEnquiryEmails(
  data: EnquiryData,
  reference: string,
  clientId: string
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipients = (process.env.ENQUIRY_TO_EMAIL ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!apiKey || recipients.length === 0) {
    console.error(
      "[enquiry] Email is not configured. Set RESEND_API_KEY and ENQUIRY_TO_EMAIL."
    );
    logLastResort(reference, data);
    return { companySent: false, customerSent: false };
  }

  const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;
  const resend = new Resend(apiKey);
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const company = buildCompanyEmail(data, reference, submittedAt);

  // The idempotency key means a repeat of the same submission is never emailed twice
  const companyResult = await sendWithRetry(() =>
    resend.emails.send(
      {
        from,
        to: recipients,
        replyTo: data.email,
        subject: `${SUBJECT} [${reference}]`,
        html: company.html,
        text: company.text,
      },
      { idempotencyKey: `enquiry-${clientId}` }
    )
  );

  if (!companyResult.ok) {
    console.error(`[enquiry] ${reference} company email FAILED:`, companyResult.error);
    logLastResort(reference, data);
    return { companySent: false, customerSent: false };
  }

  // Optional confirmation to the customer (needs a verified domain, so off for now)
  let customerSent = false;
  if (process.env.SEND_CUSTOMER_CONFIRMATION === "true") {
    const customer = buildCustomerEmail(data, reference);
    const customerResult = await sendWithRetry(() =>
      resend.emails.send(
        {
          from,
          to: [data.email],
          replyTo: SITE.email,
          subject: `We have received your enquiry – Arjun Joshi & Co. [${reference}]`,
          html: customer.html,
          text: customer.text,
        },
        { idempotencyKey: `enquiry-${clientId}-customer` }
      )
    );
    customerSent = customerResult.ok;
    if (!customerSent) {
      console.error(
        `[enquiry] ${reference} customer confirmation failed:`,
        customerResult.error
      );
    }
  }

  return { companySent: true, customerSent };
}