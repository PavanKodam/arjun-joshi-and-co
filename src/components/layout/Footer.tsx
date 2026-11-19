// import Image from "next/image";
// import { Mail, Phone } from "lucide-react";
// import { InstagramIcon } from "@/components/ui/icons";
// import { SITE, formatPhone, phoneHref } from "@/lib/site";

// const QUICK_LINKS = [
//   { href: "/#home", label: "Home" },
//   { href: "/#about", label: "About Us" },
//   { href: "/#services", label: "Services" },
//   { href: "/#why-us", label: "Why Choose Us" },
//   { href: "/#contact", label: "Contact Us" },
// ];

// const LEGAL_TEXT = ["Privacy Policy", "Terms & Conditions"];

// export default function Footer() {
//   return (
//     <footer className="border-t border-gold/40 bg-sand">
//       <div className="site-container py-12 sm:py-16">
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
//           <div>
//             <a href="/#home" className="flex items-center gap-3">
//               <Image
//                 src="/logo/logo-mark-gold.png"
//                 alt=""
//                 width={786}
//                 height={450}
//                 className="h-12 w-auto"
//               />
//               <span className="leading-tight">
//                 <span className="block font-display text-xl font-semibold text-ink">
//                   {SITE.name}
//                 </span>
//                 <span className="text-sm text-charcoal">{SITE.subtitle}</span>
//               </span>
//             </a>
//             <p className="mt-5 font-display text-lg text-bronze">
//               Protect Today. Secure Tomorrow.
//             </p>
//             <a
//               href={SITE.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Arjun Joshi & Co. on Instagram"
//               className="mt-5 inline-grid h-11 w-11 place-items-center rounded-full bg-white text-ink ring-1 ring-ink/10 transition hover:bg-gold hover:ring-gold"
//             >
//               <InstagramIcon size={20} />
//             </a>
//           </div>

//           <div>
//             <h3 className="font-display text-lg text-ink">Quick links</h3>
//             <ul className="mt-4 space-y-2.5 text-sm">
//               {QUICK_LINKS.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     className="text-charcoal transition hover:text-ink hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-display text-lg text-ink">Contact</h3>
//             <ul className="mt-4 space-y-3 text-sm text-charcoal">
//               <li className="flex items-center gap-2">
//                 <Phone size={16} className="shrink-0 text-bronze" />
//                 <a href={phoneHref(SITE.phones[0])} className="hover:text-ink">
//                   {formatPhone(SITE.phones[0])}
//                 </a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail size={16} className="shrink-0 text-bronze" />
//                 <a
//                   href={`mailto:${SITE.email}`}
//                   className="break-all hover:text-ink"
//                 >
//                   {SITE.email}
//                 </a>
//               </li>
//             </ul>
//             <ul className="mt-5 space-y-2.5 text-sm text-charcoal">
//               {LEGAL_TEXT.map((text) => (
//                 <li key={text}>{text}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="mt-10 border-t border-ink/10 pt-6">
//           <p className="text-xs leading-relaxed text-charcoal/80">
//             {SITE.name} is an insurance agency and does not underwrite
//             insurance policies. Coverage, premiums, eligibility and claim
//             settlement are subject to the respective insurer’s terms and
//             conditions.
//           </p>
//           <p className="mt-3 text-sm text-charcoal">
//             © {new Date().getFullYear()} {SITE.name} All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// // }
// import Image from "next/image";
// import DepartmentCards from "@/components/ui/DepartmentCards";
// import { InstagramIcon } from "@/components/ui/icons";
// import { SITE } from "@/lib/site";

// const QUICK_LINKS = [
//   { href: "/#home", label: "Home" },
//   { href: "/#about", label: "About Us" },
//   { href: "/#services", label: "Services" },
//   { href: "/#why-us", label: "Why Choose Us" },
//   { href: "/#contact", label: "Contact Us" },
// ];

// const LEGAL_TEXT = ["Privacy Policy", "Terms & Conditions"];

// export default function Footer() {
//   return (
//     <footer className="border-t border-gold/40 bg-sand">
//       <div className="site-container py-12 sm:py-16">
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
//           <div>
//             <a href="/#home" className="flex items-center gap-3">
//               <Image
//                 src="/logo/logo-mark-gold.png"
//                 alt=""
//                 width={786}
//                 height={450}
//                 className="h-12 w-auto"
//               />
//               <span className="leading-tight">
//                 <span className="block font-display text-xl font-semibold text-ink">
//                   {SITE.name}
//                 </span>
//                 <span className="text-sm text-charcoal">{SITE.subtitle}</span>
//               </span>
//             </a>
//             <p className="mt-5 font-display text-lg text-bronze">
//               Protect Today. Secure Tomorrow.
//             </p>
//             <a
//               href={SITE.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Arjun Joshi & Co. on Instagram"
//               className="mt-5 inline-grid h-11 w-11 place-items-center rounded-full bg-white text-ink ring-1 ring-ink/10 transition hover:bg-gold hover:ring-gold"
//             >
//               <InstagramIcon size={20} />
//             </a>
//           </div>

//           <div>
//             <h3 className="font-display text-lg text-ink">Quick links</h3>
//             <ul className="mt-4 space-y-2.5 text-sm">
//               {QUICK_LINKS.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     className="text-charcoal transition hover:text-ink hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-display text-lg text-ink">Information</h3>
//             <ul className="mt-4 space-y-2.5 text-sm text-charcoal">
//               {LEGAL_TEXT.map((text) => (
//                 <li key={text}>{text}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12">
//           <h3 className="font-display text-xl text-ink">Talk to the right team</h3>
//           <p className="mt-1 text-sm text-charcoal/80">
//             Call or email the team that fits what you need.
//           </p>
//           <div className="mt-5">
//             <DepartmentCards />
//           </div>
//         </div>

//         <div className="mt-10 border-t border-ink/10 pt-6">
//           <p className="text-xs leading-relaxed text-charcoal/80">
//             {SITE.name} is an insurance agency and does not underwrite
//             insurance policies. Coverage, premiums, eligibility and claim
//             settlement are subject to the respective insurer’s terms and
//             conditions.
//           </p>
//           <p className="mt-3 text-sm text-charcoal">
//             © {new Date().getFullYear()} {SITE.name} All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import type { ComponentType } from "react";
import Image from "next/image";
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
  COPYRIGHT_HOLDER,
  DEPARTMENTS,
  DEVELOPER,
  SITE,
  directionsHref,
  formatPhone,
  mapEmbedSrc,
  phoneHref,
  whatsappHref,
} from "@/lib/site";

const QUICK_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Choose Us" },
];

const LEGAL_TEXT = ["Privacy Policy", "Terms & Conditions"];

const ROW_ICON =
  "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-ink";

// The highlighted tag around a number or email
const VALUE_TAG =
  "inline-block w-fit max-w-full break-all rounded-xl bg-white px-4 py-1.5 text-sm font-semibold text-ink ring-1 ring-gold/40 transition hover:-translate-y-0.5 hover:bg-gold hover:ring-gold hover:shadow-md hover:shadow-gold/30";

const BUTTON =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition";

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

type ContactBlockProps = {
  icon: ComponentType<{ size?: number }>;
  title: string;
  rows: ContactRow[];
};

// One list (Call us / Email us): a heading, then one line per team
function ContactBlock({ icon: Icon, title, rows }: ContactBlockProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={ROW_ICON}>
          <Icon size={20} />
        </span>
        <h3 className="font-display text-xl text-ink">{title}</h3>
      </div>

      <ul className="mt-3 divide-y divide-ink/10">
        {rows.map((row, index) => (
          <li key={row.id}>
            <Reveal y={14} delay={index * 0.08}>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 py-3">
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
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-gold/40 bg-sand">
      <div className="site-container py-12 sm:py-16">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Visit Us or Get in Touch
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/80">
            Call, message or drop by our Bhiwandi office. We are happy to
            answer your questions and help you explore suitable options.
          </p>
        </Reveal>

        {/* Row 1: Call us (left) and Email us (right) */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <ContactBlock icon={Phone} title="Call us" rows={PHONE_ROWS} />
          <ContactBlock icon={Mail} title="Email us" rows={EMAIL_ROWS} />
        </div>

        {/* Row 2: address, timings, Instagram and buttons (left), map (right) */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <Reveal x={-30} y={0}>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className={ROW_ICON}>
                  <MapPin size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink">Office address</h3>
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
                  <h3 className="font-display text-lg text-ink">Office timings</h3>
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
                  <h3 className="font-display text-lg text-ink">Instagram</h3>
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

            <div className="mt-6 flex flex-wrap gap-3">
              <EnquiryButton
                className={`${BUTTON} shine bg-gold text-ink shadow-md shadow-gold/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/50`}
              >
                <Send size={16} />
                Send Enquiry
              </EnquiryButton>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BUTTON} border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream`}
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BUTTON} border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream`}
              >
                <Navigation size={16} />
                Directions
              </a>
            </div>
          </Reveal>

          <Reveal x={30} y={0} delay={0.1} className="h-full">
            <div className="relative h-full">
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-full w-full rounded-4xl border-2 border-gold/60"
              />
              <div className="relative h-full overflow-hidden rounded-4xl bg-cream shadow-lg ring-1 ring-ink/10">
                <iframe
                  title="Arjun Joshi & Co. office location on Google Maps"
                  src={mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block h-80 w-full border-0 sm:h-96 lg:h-full lg:min-h-[24rem]"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Slim brand row */}
        <div className="mt-12 flex flex-col gap-6 border-t border-ink/10 pt-8 md:flex-row md:items-center md:justify-between">
          <a href="/#home" className="flex items-center gap-3">
            <Image
              src="/logo/logo-mark-gold.png"
              alt=""
              width={786}
              height={450}
              className="h-11 w-auto"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-ink">
                {SITE.name}
              </span>
              <span className="text-sm text-bronze">
                Protect Today. Secure Tomorrow.
              </span>
            </span>
          </a>

          <div className="md:text-right">
            <nav
              aria-label="Footer"
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:justify-end"
            >
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-charcoal transition hover:text-ink hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <p className="mt-2 text-xs text-charcoal/80">
              {LEGAL_TEXT.join(" · ")}
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-charcoal/80">
          {SITE.name} is an insurance agency and does not underwrite insurance
          policies. Coverage, premiums, eligibility and claim settlement are
          subject to the respective insurer’s terms and conditions.
        </p>
      </div>

      {/* Very bottom strip */}
      <div className="border-t border-ink/10">
        <div className="site-container flex flex-col items-center gap-1 py-4 text-center text-xs text-charcoal sm:flex-row sm:justify-center sm:gap-3">
          <span>
            © All Copyright {new Date().getFullYear()} by {COPYRIGHT_HOLDER}
          </span>
          <span aria-hidden="true" className="hidden sm:inline">
            |
          </span>
          <span>Developed by {DEVELOPER.name}</span>

          {DEVELOPER.phones.length > 0 && (
            <>
              <span aria-hidden="true" className="hidden sm:inline">
                |
              </span>
              <span className="flex flex-wrap justify-center gap-x-3">
                {DEVELOPER.phones.map((phone: string) => (
                  <a
                    key={phone}
                    href={phoneHref(phone)}
                    className="transition hover:text-ink"
                  >
                   <>+91</> {formatPhone(phone)}
                  </a>
                ))}
              </span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}