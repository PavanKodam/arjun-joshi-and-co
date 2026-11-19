import {
  Building2,
  CalendarDays,
  HeartHandshake,
  MessageSquareText,
} from "lucide-react";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import YearsHighlight from "@/components/ui/YearsHighlight";

const HIGHLIGHTS = [
  { icon: Building2, text: "Local office in Bhiwandi" },
  { icon: CalendarDays, text: "Office established in 2023" },
  { icon: HeartHandshake, text: "Customer-focused assistance" },
  { icon: MessageSquareText, text: "Convenient enquiry support" },
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal x={-30} y={0} className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-xl">
            <div
              aria-hidden
              className="absolute -left-3 -top-3 h-full w-full rounded-3xl bg-sage/50 sm:-left-4 sm:-top-4 sm:rounded-4xl"
            />
            <PhotoFrame
              src="/images/about-office.webp"
              imageClassName="object-cover object-center"
              alt="Consultation at the Arjun Joshi & Co. office"
              className="relative aspect-video w-full rounded-3xl shadow-lg sm:rounded-4xl"
              fallback={<Building2 size={64} />}
            />
          </div>
        </Reveal>

        <Reveal x={30} y={0} delay={0.1} className="order-1 lg:order-2">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:text-sm">
            <span aria-hidden className="h-px w-8 bg-bronze" />
            Who we are
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl leading-tight text-ink sm:text-4xl">
            Experience You Can Trust. Protection You Can Count On.
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal/80">
            Arjun Joshi &amp; Co. is an insurance and investment management
            agency in Bhiwandi. We help individuals, families and businesses
            understand their protection options and choose with confidence,
            with clear guidance at every step of the enquiry.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
            Our founder brings <YearsHighlight /> of experience in the
            insurance industry, along with local knowledge of Bhiwandi and
            practical, one-to-one guidance.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
            We are an insurance agency, not an insurer. Coverage, premiums,
            eligibility and claim settlement are subject to the respective
            insurer’s terms and conditions.
          </p>

          <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sand text-ink">
                  <Icon size={19} />
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
