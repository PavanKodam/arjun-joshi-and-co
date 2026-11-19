"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  LoaderCircle,
  Mail,
  MessageCircle,
  Phone,
  Plus,
  Trash2,
  TriangleAlert,
} from "lucide-react";
import type {
  EnquiryInput,
  FamilyMember,
  FieldErrors,
  FieldName,
} from "@/types/enquiry";
import {
  MAX_MEMBERS,
  MESSAGE_MAX,
  SERVICE_GROUPS,
  formatMembers,
} from "@/lib/enquiry";
import { validateEnquiry } from "@/lib/validations";
import { SITE, phoneHref } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

type EnquiryFormProps = {
  initialService?: string;
  onClose: () => void;
};

const DRAFT_KEY = "ajc-enquiry-draft";

const EMPTY: EnquiryInput = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: "",
  members: [],
  message: "",
  consent: false,
  website: "",
};

const FIELD_ORDER: FieldName[] = [
  "name",
  "phone",
  "email",
  "city",
  "service",
  "members",
  "message",
  "consent",
];

const FIELD_IDS: Record<FieldName, string> = {
  name: "enq-name",
  phone: "enq-phone",
  email: "enq-email",
  city: "enq-city",
  service: "enq-service",
  members: "enq-add-member",
  message: "enq-message",
  consent: "enq-consent",
};

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-charcoal/50 transition focus:outline-none focus:ring-4 ${
    hasError
      ? "border-red-600 focus:border-red-600 focus:ring-red-600/20"
      : "border-ink/20 focus:border-gold focus:ring-gold/30"
  }`;

/* ---------- Helpers ---------- */

// Restore what the visitor typed if they closed the pop-up by accident
function loadDraft(initialService: string): EnquiryInput {
  const base: EnquiryInput = { ...EMPTY, service: initialService };
  if (typeof window === "undefined") return base;

  try {
    const raw = window.sessionStorage.getItem(DRAFT_KEY);
    if (!raw) return base;
    const saved = JSON.parse(raw) as Partial<EnquiryInput>;
    return {
      ...base,
      name: saved.name ?? "",
      phone: saved.phone ?? "",
      email: saved.email ?? "",
      city: saved.city ?? "",
      service: initialService || saved.service || "",
      members: Array.isArray(saved.members)
        ? saved.members.map((m) => ({
            name: String(m?.name ?? ""),
            age: String(m?.age ?? ""),
          }))
        : [],
      message: saved.message ?? "",
    };
  } catch {
    return base;
  }
}

function makeClientId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function focusFirstError(errors: FieldErrors) {
  const first = FIELD_ORDER.find((field) => errors[field]);
  if (first) document.getElementById(FIELD_IDS[first])?.focus();
}

// Sends the enquiry. If the network drops, it tries once more automatically.
async function postEnquiry(payload: unknown): Promise<Response> {
  const attempt = async () => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    try {
      return await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }
  };

  try {
    return await attempt();
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return attempt();
  }
}

// Text used by the WhatsApp / email fallback buttons if sending fails
function buildFallbackText(values: EnquiryInput): string {
  const lines = [
    "Hello Arjun Joshi & Co., I would like to enquire about insurance.",
    `Name: ${values.name || "-"}`,
    `Phone: ${values.phone ? `+91 ${values.phone}` : "-"}`,
    `Email: ${values.email || "-"}`,
    `City / Area: ${values.city || "-"}`,
    `Interested in: ${values.service || "-"}`,
  ];
  if (values.members.length > 0) {
    lines.push(`Family members: ${formatMembers(values.members)}`);
  }
  if (values.message.trim()) lines.push(`Message: ${values.message.trim()}`);
  return lines.join("\n");
}

/* ---------- Small pieces ---------- */

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}{" "}
        {required ? (
          <span className="text-bronze">*</span>
        ) : (
          <span className="font-normal text-charcoal/75">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessView({
  reference,
  onClose,
}: {
  reference: string;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div role="status" className="flex flex-col items-center py-6 text-center">
      <svg viewBox="0 0 52 52" className="h-24 w-24" aria-hidden="true">
        <motion.circle
          cx="26"
          cy="26"
          r="23"
          fill="none"
          stroke="#c6a66b"
          strokeWidth="3"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
        <motion.path
          d="M15 27l8 8 15-17"
          fill="none"
          stroke="#3b2a1d"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        />
      </svg>

      <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
        Enquiry received
      </h2>
      <p className="mt-3 max-w-md leading-relaxed text-charcoal">
        Thank you for choosing Arjun Joshi &amp; Co. Your enquiry has been
        received successfully. Our team will contact you soon.
      </p>

      {reference && (
        <p className="mt-5 rounded-xl bg-white px-4 py-3 text-sm text-charcoal ring-1 ring-gold/40">
          Your reference number:{" "}
          <strong className="font-semibold text-ink">{reference}</strong>
        </p>
      )}

      <button
        type="button"
        onClick={onClose}
        className="shine mt-6 rounded-full bg-gold px-8 py-3 font-semibold text-ink transition hover:shadow-lg hover:shadow-gold/40"
      >
        Close
      </button>
    </div>
  );
}

/* ---------- The form ---------- */

export default function EnquiryForm({
  initialService = "",
  onClose,
}: EnquiryFormProps) {
  const [values, setValues] = useState<EnquiryInput>(() =>
    loadDraft(initialService)
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState("");

  const clientIdRef = useRef("");
  const sendingRef = useRef(false);

  // Keep a draft while typing (cleared after a successful send)
  useEffect(() => {
    if (status === "success") return;
    try {
      window.sessionStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email,
          city: values.city,
          service: values.service,
          members: values.members,
          message: values.message,
        })
      );
    } catch {
      /* storage not available: ignore */
    }
  }, [values, status]);

  const clearError = (field: FieldName) =>
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });

  const setField = <K extends keyof EnquiryInput>(
    key: K,
    value: EnquiryInput[K]
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    clearError(key as FieldName);
  };

  const handlePhone = (event: ChangeEvent<HTMLInputElement>) =>
    setField("phone", event.target.value.replace(/[^\d\s]/g, "").slice(0, 16));

  const addMember = () =>
    setValues((prev) =>
      prev.members.length >= MAX_MEMBERS
        ? prev
        : { ...prev, members: [...prev.members, { name: "", age: "" }] }
    );

  const updateMember = (index: number, patch: Partial<FamilyMember>) => {
    setValues((prev) => ({
      ...prev,
      members: prev.members.map((m, i) => (i === index ? { ...m, ...patch } : m)),
    }));
    clearError("members");
  };

  const removeMember = (index: number) => {
    setValues((prev) => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index),
    }));
    clearError("members");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sendingRef.current) return; // ignore double clicks

    const check = validateEnquiry(values);
    if (!check.ok) {
      setErrors(check.errors);
      focusFirstError(check.errors);
      return;
    }

    sendingRef.current = true;
    setStatus("sending");
    setErrors({});
    if (!clientIdRef.current) clientIdRef.current = makeClientId();

    try {
      const response = await postEnquiry({
        ...values,
        clientId: clientIdRef.current,
      });
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        reference?: string;
        errors?: FieldErrors;
      } | null;

      if (response.ok && data?.ok) {
        try {
          window.sessionStorage.removeItem(DRAFT_KEY);
        } catch {
          /* ignore */
        }
        setReference(data.reference ?? "");
        setStatus("success");
        return;
      }

      if (response.status === 422 && data?.errors) {
        setErrors(data.errors);
        setStatus("idle");
        focusFirstError(data.errors);
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      sendingRef.current = false;
    }
  };

  if (status === "success") {
    return <SuccessView reference={reference} onClose={onClose} />;
  }

  const sending = status === "sending";
  const fallbackText = buildFallbackText(values);

  return (
    <div>
      <h2 className="pr-10 font-display text-2xl leading-tight text-ink sm:text-3xl">
        Let’s Protect What Matters to You.
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
        Tell us about your requirements. Our team will contact you to discuss
        suitable insurance options.
      </p>

      <form noValidate onSubmit={handleSubmit} className="relative mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="enq-name" label="Full name" required error={errors.name}>
            <input
              id="enq-name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "enq-name-error" : undefined}
              className={inputClass(!!errors.name)}
            />
          </Field>

          <Field id="enq-phone" label="Mobile number" required error={errors.phone}>
            <div className="flex">
              <span
                aria-hidden="true"
                className="grid shrink-0 place-items-center rounded-l-xl border border-r-0 border-ink/20 bg-sand px-3 text-base font-medium text-ink"
              >
                +91
              </span>
              <input
                id="enq-phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="98765 43210"
                value={values.phone}
                onChange={handlePhone}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "enq-phone-error" : undefined}
                className={`${inputClass(!!errors.phone)} rounded-l-none`}
              />
            </div>
          </Field>

          <Field id="enq-email" label="Email address" required error={errors.email}>
            <input
              id="enq-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={(e) => setField("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "enq-email-error" : undefined}
              className={inputClass(!!errors.email)}
            />
          </Field>

          <Field id="enq-city" label="City / Area" required error={errors.city}>
            <input
              id="enq-city"
              type="text"
              autoComplete="address-level2"
              placeholder="e.g. Bhiwandi"
              value={values.city}
              onChange={(e) => setField("city", e.target.value)}
              aria-invalid={!!errors.city}
              aria-describedby={errors.city ? "enq-city-error" : undefined}
              className={inputClass(!!errors.city)}
            />
          </Field>
        </div>

        <Field
          id="enq-service"
          label="What would you like to protect?"
          required
          error={errors.service}
        >
          <select
            id="enq-service"
            value={values.service}
            onChange={(e) => setField("service", e.target.value)}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "enq-service-error" : undefined}
            className={inputClass(!!errors.service)}
          >
            <option value="">Select an option</option>
            {SERVICE_GROUPS.map((group) =>
              group.label ? (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              ) : (
                group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))
              )
            )}
          </select>
        </Field>

        {/* Family members: name + age */}
        <fieldset>
          <legend className="text-sm font-medium text-ink">
            Family members to cover{" "}
            <span className="font-normal text-charcoal/75">(optional)</span>
          </legend>
          <p className="mt-0.5 text-xs text-charcoal/75">
            Add each person’s name and age. Please do not share medical details
            here.
          </p>

          {values.members.length > 0 && (
            <ul className="mt-3 space-y-2">
              {values.members.map((member, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[1fr_5rem_auto] items-center gap-2"
                >
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Name"
                    aria-label={`Name of family member ${index + 1}`}
                    value={member.name}
                    onChange={(e) => updateMember(index, { name: e.target.value })}
                    className={inputClass(!!errors.members)}
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="Age"
                    maxLength={3}
                    aria-label={`Age of family member ${index + 1}`}
                    value={member.age}
                    onChange={(e) =>
                      updateMember(index, { age: e.target.value.replace(/\D/g, "") })
                    }
                    className={inputClass(!!errors.members)}
                  />
                  <button
                    type="button"
                    onClick={() => removeMember(index)}
                    aria-label={`Remove family member ${index + 1}`}
                    className="grid h-11 w-11 place-items-center rounded-full text-charcoal transition hover:bg-sand hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {errors.members && (
            <p role="alert" className="mt-1.5 text-sm text-red-700">
              {errors.members}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <button
              id="enq-add-member"
              type="button"
              onClick={addMember}
              disabled={values.members.length >= MAX_MEMBERS}
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-cream disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus size={16} />
              Add family member
            </button>
            {values.members.length > 0 && (
              <span className="text-sm text-charcoal">
                Total members: <strong>{values.members.length}</strong>
              </span>
            )}
          </div>
        </fieldset>

        <Field
          id="enq-message"
          label="Additional requirements / message"
          error={errors.message}
        >
          <textarea
            id="enq-message"
            rows={3}
            maxLength={MESSAGE_MAX}
            placeholder="Anything else you would like us to know?"
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            className={inputClass(!!errors.message)}
          />
          <p className="mt-1 text-right text-xs text-charcoal/75">
            {values.message.length}/{MESSAGE_MAX}
          </p>
        </Field>

        {/* Spam trap: invisible to people, bots fill it in */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        >
          <label>
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => setField("website", e.target.value)}
            />
          </label>
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal">
            <input
              id="enq-consent"
              type="checkbox"
              checked={values.consent}
              onChange={(e) => setField("consent", e.target.checked)}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "enq-consent-error" : undefined}
              className="mt-1 h-5 w-5 shrink-0 accent-gold"
            />
            <span>
              I agree to be contacted by Arjun Joshi &amp; Co. regarding my
              enquiry and understand that my information will be handled
              according to the 
              <span className="font-medium ml-1 text-gold/95 underline decoration-gold underline-offset-2">
                 privacy policy.
              </span>             
            </span>
          </label>
          {errors.consent && (
            <p id="enq-consent-error" role="alert" className="mt-1.5 text-sm text-red-700">
              {errors.consent}
            </p>
          )}
        </div>

        {status === "error" && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900"
          >
            <p className="flex items-start gap-2 font-medium">
              <TriangleAlert size={18} className="mt-0.5 shrink-0" />
              We could not send your enquiry just now.
            </p>
            <p className="mt-1 leading-relaxed">
              Your details are still here, so please try again. If it keeps
              failing, you can reach us another way:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(fallbackText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-ink ring-1 ring-ink/15 transition hover:bg-gold"
              >
                <MessageCircle size={16} />
                Send via WhatsApp
              </a>
              <a
                href={phoneHref(SITE.phones[0])}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-ink ring-1 ring-ink/15 transition hover:bg-gold"
              >
                <Phone size={16} />
                Call us
              </a>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent("Insurance enquiry")}&body=${encodeURIComponent(fallbackText)}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-ink ring-1 ring-ink/15 transition hover:bg-gold"
              >
                <Mail size={16} />
                Email us
              </a>
            </div>
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={sending}
            className="shine flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-base font-semibold text-ink shadow-md shadow-gold/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/50 disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0"
          >
            {sending ? (
              <>
                <LoaderCircle size={20} className="animate-spin" />
                Sending your enquiry…
              </>
            ) : status === "error" ? (
              "Try Again"
            ) : (
              "Submit My Enquiry"
            )}
          </button>
          <p className="mt-3 text-center text-xs text-charcoal/75">
            Please do not share medical documents here. We will ask for anything
            else when we call you.
          </p>
        </div>
      </form>
    </div>
  );
}