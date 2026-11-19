import { Eye, ShieldCheck, Smile, UserRound } from "lucide-react";
import PhotoFrame from "@/components/ui/PhotoFrame";
import Reveal from "@/components/ui/Reveal";

const VALUES = [
  { icon: ShieldCheck, label: "Trust" },
  { icon: Eye, label: "Transparency" },
  { icon: Smile, label: "Customer Satisfaction" },
];

const FACTS = [
  { label: "Experience", value: "20+ Years in the Insurance Industry" },
  { label: "Education", value: "Bachelor of Commerce (B.Com)" },
  { label: "Location", value: "Bhiwandi, Maharashtra" },
  { label: "Company", value: "Arjun Joshi & Co." },
];

export default function Founder() {
  return (
    <section id="founder" className="overflow-hidden bg-sand/60 py-14 sm:py-20 lg:py-28">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-14">
        <Reveal x={-40} y={0} className="order-2 lg:order-1">
          <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Meet Our Founder – Arjun Joshi
          </h2>
          <p className="mt-2 font-medium text-charcoal/80">
            Founder &amp; Owner | Arjun Joshi &amp; Co.
          </p>

          <div className="mt-6 space-y-4 leading-relaxed text-charcoal/80">
            <p>
              With over <strong>20 years of experience in the insurance
                industry</strong>, Mr. Arjun Joshi is a well-recognised and
              trusted insurance advisor in Bhiwandi.
            </p>
            <p>
              A B.Com graduate with extensive industry knowledge, he has
              dedicated his professional journey to helping individuals,
              families, and businesses make informed insurance decisions.
            </p>
            <p>
              His approach is built on three core values:{" "}
              <strong>Trust, Transparency, and Customer Satisfaction.</strong>{" "}
              He believes that insurance is not just about purchasing a
              policy; it’s about understanding the right protection for every
              individual’s needs.
            </p>
            <p>
              Through Arjun Joshi &amp; Co., he aims to make insurance simple,
              accessible, and affordable by guiding clients towards suitable
              insurance solutions with complete transparency and personalised
              assistance.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {VALUES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                <Icon size={16} />
                {label}
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-ink/15 pt-6 sm:grid-cols-2">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm text-charcoal/75">{fact.label}</dt>
                <dd className="font-medium text-charcoal">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal x={40} y={0} delay={0.1} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-[15rem] sm:max-w-xs lg:max-w-md">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full rounded-4xl bg-mist/50"
            />
            <PhotoFrame
              src="/images/founder.webp"
              alt="Arjun Joshi, Founder and Owner of Arjun Joshi & Co."
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="relative aspect-4/5 rounded-4xl shadow-lg"
              imageClassName="object-cover object-top"
              fallback={<UserRound size={80} />}
            />
            <div className="absolute bottom-2 left-2 rounded-lg bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur sm:bottom-3 sm:left-3 sm:px-4 sm:py-2">
              <p className="font-display text-sm leading-tight text-ink sm:text-base">
                Arjun Joshi
              </p>
              <p className="text-[0.7rem] leading-tight text-charcoal/80 sm:text-xs">
                Founder &amp; Owner
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}