import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Headset,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";
import YearsHighlight from "@/components/ui/YearsHighlight";

const HIGHLIGHTS = [
  { icon: Building2, text: "Local office in Bhiwandi" },
  { icon: ShieldCheck, text: "Insurance & investment guidance" },
  { icon: HeartHandshake, text: "Personal, one-to-one guidance" },
  { icon: Headset, text: "Support at every step" },
];

export default function AboutPreview() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
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
            About us
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl leading-tight text-ink sm:text-4xl">
            Two decades of guidance, right here in Bhiwandi.
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal/80">
            Arjun Joshi &amp; Co. is an insurance and investment management
            agency helping individuals, families and businesses understand
            their protection options and choose with confidence.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
            With <YearsHighlight /> of experience in the insurance industry, we
            help you compare options and choose protection that fits your
            family or business.
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-charcoal"
            >
              More About Us
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-ink/25 px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-cream"
            >
              See What We Offer
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
