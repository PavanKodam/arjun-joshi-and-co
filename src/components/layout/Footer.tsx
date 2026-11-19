import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import EnquiryButton from "@/components/forms/EnquiryButton";
import { InstagramIcon } from "@/components/ui/icons";
import { NAV_LINKS } from "@/lib/nav";
import { SERVICES } from "@/lib/services";
import {
  COPYRIGHT_HOLDER,
  DEVELOPER,
  SITE,
  formatPhone,
  phoneHref,
  whatsappHref,
} from "@/lib/site";

const SERVICE_LINKS = SERVICES.slice(0, 6);

const LINK =
  "text-sm text-charcoal/85 transition hover:text-ink hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4";

const HEADING = "font-display text-lg text-ink";

export default function Footer() {
  return (
    <footer className="border-t border-gold/40 bg-sand">
      <div className="site-container py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/logo-mark-gold.png"
                alt=""
                width={786}
                height={450}
                className="h-11 w-auto"
              />
              <span className="leading-tight">
                <span className="block font-display text-xl font-semibold text-ink">
                  {SITE.name}
                </span>
                <span className="text-sm text-charcoal/80">
                  {SITE.subtitle}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/80">
              Personal insurance guidance for families and businesses in
              Bhiwandi, with over two decades of experience.
            </p>
            <p className="mt-4 font-display text-lg text-bronze">
              Protect Today. Secure Tomorrow.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arjun Joshi & Co. on Instagram"
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink ring-1 ring-ink/10 transition hover:bg-gold hover:ring-gold"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Arjun Joshi & Co. on WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink ring-1 ring-ink/10 transition hover:bg-gold hover:ring-gold"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className={HEADING}>Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className={LINK}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={LINK}>
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={HEADING}>Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className={LINK}>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-bronze transition hover:text-ink"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={HEADING}>Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-charcoal/85">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-bronze" />
                <address className="not-italic leading-relaxed">
                  {SITE.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-bronze" />
                <a href={phoneHref(SITE.phones[0])} className="hover:text-ink">
                  +91 {formatPhone(SITE.phones[0])}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-bronze" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all hover:text-ink"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={17} className="mt-0.5 shrink-0 text-bronze" />
                <span className="leading-relaxed">
                  {SITE.hours.map((slot) => (
                    <span key={slot.days} className="block">
                      {slot.days}: {slot.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
            <EnquiryButton className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold/40">
              <Send size={15} />
              Send an enquiry
            </EnquiryButton>
          </div>
        </div>

        <p className="mt-10 border-t border-ink/10 pt-6 text-xs leading-relaxed text-charcoal/75">
          {SITE.name} is an insurance agency and does not underwrite insurance
          policies. Coverage, premiums, eligibility and claim settlement are
          subject to the respective insurer’s terms and conditions. Information
          on this website is for general guidance only.
        </p>
      </div>

      <div className="border-t border-ink/10">
        <div className="site-container flex flex-col items-center gap-1.5 py-4 text-center text-xs text-charcoal/80 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {COPYRIGHT_HOLDER}. All rights
            reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>Developed by {DEVELOPER.name}</span>
            {DEVELOPER.phones.length > 0 && (
              <span className="flex flex-wrap justify-center gap-x-2">
                {DEVELOPER.phones.map((phone) => (
                  <a
                    key={phone}
                    href={phoneHref(phone)}
                    className="transition hover:text-ink"
                  >
                    +91 {formatPhone(phone)}
                  </a>
                ))}
              </span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
