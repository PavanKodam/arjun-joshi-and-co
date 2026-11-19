import {
  BadgeCheck,
  Building2,
  CalendarDays,
  HeartHandshake,
  MessageSquareText,
  ShieldCheck,
  Users,
} from "lucide-react";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";

const HIGHLIGHTS = [
  { icon: BadgeCheck, text: "20+ years of industry experience" },
  { icon: CalendarDays, text: "Office established in 2023" },
  { icon: Users, text: "500+ trusted clients" },
  { icon: ShieldCheck, text: "350+ claims settled" },
  { icon: HeartHandshake, text: "Customer-focused assistance" },
  { icon: MessageSquareText, text: "Convenient insurance enquiry support" },
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-14 sm:py-20 lg:py-28">  
      <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal x={-40} y={0}>
            <div className="relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-full w-full rounded-4xl bg-sage/50"
            />
            <PhotoFrame
              src="/images/about-office.webp"
              imageClassName="object-cover object-[55%_center]"
              alt="Consultation at the Arjun Joshi & Co. office"
              className="relative aspect-16/10 rounded-4xl shadow-lg sm:aspect-5/3"
              fallback={<Building2 size={64} />}
            />
          </div>
        </Reveal>

        <Reveal x={40} y={0} delay={0.1}>
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Experience You Can Trust. Protection You Can Count On.
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal/80">
            Arjun Joshi &amp; Co. is an insurance and investment management
            agency in Bhiwandi. We help individuals, families and businesses
            understand their protection options and choose with confidence,
            with clear guidance at every step of the enquiry.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
            We are an insurance agency, not an insurer. Coverage, premiums,
            eligibility and claim settlement are subject to the respective
            insurer’s terms and conditions.
          </p>

            <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sand text-ink">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-medium text-charcoal">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}