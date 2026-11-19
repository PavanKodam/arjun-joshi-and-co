import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import EnquiryButton from "@/components/forms/EnquiryButton";
import { InstagramIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import {
  DEPARTMENTS,
  SITE,
  directionsHref,
  formatPhone,
  mapEmbedSrc,
  phoneHref,
  whatsappHref,
} from "@/lib/site";

const ROW_ICON =
  "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sand text-ink";

// The highlighted gold tag around a number or email
const VALUE_TAG =
  "inline-block w-fit max-w-full break-all rounded-xl bg-gold/25 px-4 py-1.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold hover:shadow-md hover:shadow-gold/30";

type ContactRow = {
  id: string;
  label: string;
  description: string;
  href: string;
  value: string;
};

const PHONE_ROWS: ContactRow[] = DEPARTMENTS.map((dept) => ({
  id: dept.id,
  label: dept.label,
  description: dept.description,
  href: phoneHref(dept.phone),
  value: formatPhone(dept.phone),
}));

const EMAIL_ROWS: ContactRow[] = DEPARTMENTS.map((dept) => ({
  id: dept.id,
  label: dept.label,
  description: dept.description,
  href: `mailto:${dept.email}`,
  value: dept.email,
}));

function ContactRows({ rows }: { rows: ContactRow[] }) {
  return (
    <ul className="mt-2 divide-y divide-ink/10">
      {rows.map((row, index) => (
        <li key={row.id}>
          <Reveal y={14} delay={index * 0.08}>
            <div className="flex flex-col gap-1.5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <p className="font-medium text-ink">{row.label}</p>
                <p className="text-xs text-charcoal/75">{row.description}</p>
              </div>
              <a href={row.href} className={VALUE_TAG}>
                {row.value}
              </a>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream py-14 sm:py-16 lg:py-20"
    >
      <div className="site-container">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Visit Us or Get in Touch
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/80">
            Call, message or drop by our Bhiwandi office. We are happy to
            answer your questions and help you explore suitable options.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal x={-30} y={0}>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className={ROW_ICON}>
                  <Phone size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-lg text-ink">Call us</p>
                  <ContactRows rows={PHONE_ROWS} />
                </div>
              </li>

              <li className="flex gap-4">
                <span className={ROW_ICON}>
                  <Mail size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-lg text-ink">Email us</p>
                  <ContactRows rows={EMAIL_ROWS} />
                </div>
              </li>

              <li className="flex gap-4">
                <span className={ROW_ICON}>
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-display text-lg text-ink">Office address</p>
                  <address className="mt-1 not-italic leading-relaxed text-charcoal">
                    {SITE.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </li>

              <li className="flex gap-4">
                <span className={ROW_ICON}>
                  <Clock size={20} />
                </span>
                <div>
                  <p className="font-display text-lg text-ink">Office timings</p>
                  <dl className="mt-1 space-y-0.5 text-charcoal">
                    {SITE.hours.map((slot) => (
                      <div key={slot.days} className="flex flex-wrap gap-x-2">
                        <dt className="font-medium">{slot.days}:</dt>
                        <dd>{slot.time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-1 text-xs text-charcoal/75">
                    Timings may differ during holidays.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className={ROW_ICON}>
                  <InstagramIcon size={20} />
                </span>
                <div>
                  <p className="font-display text-lg text-ink">Instagram</p>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-charcoal underline decoration-gold decoration-2 underline-offset-4 transition hover:text-ink"
                  >
                    {SITE.instagramHandle}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <EnquiryButton className="shine inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-ink shadow-md shadow-gold/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/50">
                <Send size={18} />
                Send an Enquiry
              </EnquiryButton>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/30 px-6 py-3 font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/30 px-6 py-3 font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal x={30} y={0} delay={0.1}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-full w-full rounded-4xl border-2 border-gold/60"
              />
              <div className="relative overflow-hidden rounded-4xl bg-sand shadow-lg ring-1 ring-ink/10">
                <iframe
                  title="Arjun Joshi & Co. office location on Google Maps"
                  src={mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block h-80 w-full border-0 sm:h-96 lg:h-[28rem]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}