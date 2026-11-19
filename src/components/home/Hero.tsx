"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Counter from "@/components/ui/Counter";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { useEnquiry } from "@/components/forms/EnquiryProvider";

const HEADLINE = [
  { text: "Protect What Matters.", accent: false },
  { text: "Secure What Comes Next.", accent: true },
];

type Stat = { label: string } & (
  | { value: number; suffix?: string }
  | { text: string }
);

const STATS: Stat[] = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { text: "Multiple", label: "Insurance & Investment Solutions" },
  { text: "Personalized", label: "End-to-end policy and benefits support." },
];

// Start the hero animation after the loading screen has lifted
const START = 2.4;

export default function Hero() {
  const reduce = useReducedMotion();
  const { openEnquiry } = useEnquiry(); 
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-44"
    >
      {/* Slow-moving background shapes */}
      <motion.div
        aria-hidden
        className="glow-gold pointer-events-none absolute -left-28 top-16 h-96 w-96"
        animate={reduce ? undefined : { y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="glow-mist pointer-events-none absolute -right-24 bottom-0 h-96 w-96"
        animate={reduce ? undefined : { y: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="glow-sage pointer-events-none absolute left-1/3 top-1/2 h-72 w-72"
        animate={reduce ? undefined : { x: [0, 25, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="site-container relative grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
          <motion.p
            className="mb-4 flex items-center gap-3 text-sm font-medium text-bronze sm:text-base"
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: START - 0.2 }}
          >
            <span aria-hidden className="h-px w-10 bg-bronze" />
            Live Protected.
          </motion.p>

          <h1 className="font-display text-[1.75rem] leading-[1.15] text-ink sm:text-4xl lg:text-[2.6rem]">
            {HEADLINE.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-1.5">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: START + i * 0.15,
                    ease: "easeOut",
                  }}
                >
                  {line.accent ? (
                    <span className="relative block text-bronze">
                      {line.text}
                      {/* Golden light sweeping across the text */}
                      <span
                        aria-hidden
                        className="gold-shimmer pointer-events-none absolute inset-0"
                      >
                        {line.text}
                      </span>
                    </span>
                  ) : (
                    line.text
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-5 max-w-xl text-sm leading-relaxed text-charcoal sm:text-base"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: START + 0.4 }}
          >
            Your family’s health, your future, your vehicles and your valuable
            assets deserve the right protection. Let Arjun Joshi &amp; Co. help
            you explore insurance and investment solutions suited to your
            needs.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: START + 0.6 }}
          >
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="shine group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-md shadow-gold/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/50 sm:text-base"
            >
              Get a Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-cream sm:text-base"
            >
              Explore Our Services
            </a>
          </motion.div>

          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-ink/15 pt-6 sm:mt-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse self-start">
                <dt className="text-xs text-charcoal sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="font-display text-2xl text-ink sm:text-3xl">
                 {"value" in stat ? (
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    startAfter={START + 0.6}
                    repeat
                  />
                 ):<span className="text-2xl text-ink sm:text-3xl">{stat.text}</span>}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-xs text-charcoal/75">
            *Subject to insurer requirements, verification and approval.
          </p>
        </div>

        {/* Photo: first on mobile, on the right on desktop */}
        <motion.div
          className="relative order-first mb-6 lg:order-last lg:mb-0"
          initial={reduce ? false : { scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, delay: START + 0.2, ease: "easeOut" }}
        >
          {/* Gold outline that gently pulses */}
          <motion.div
            aria-hidden
            className="absolute -bottom-3 -right-3 h-full w-full rounded-4xl border-2 border-gold"
            animate={reduce ? undefined : { opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <PhotoFrame
            src="/images/hero-family.webp"
            alt="A happy family protected by the right insurance cover"
            priority
            imageClassName="object-cover object-[55%_center]"
            className="relative aspect-16/10 w-full rounded-4xl shadow-xl shadow-ink/10 sm:aspect-16/11"
            fallback={<ShieldCheck size={72} />}
          />

          {/* Golden light sweeping across the photo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl"
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-2/5 bg-linear-to-r from-transparent via-[#ffe9ad]/40 to-transparent"
              initial={{ x: "-150%" }}
              animate={reduce ? undefined : { x: ["-150%", "350%"] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-6 left-4 flex max-w-68 items-center gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-gold/30 sm:-left-6"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/30 text-bronze">
              <ShieldCheck size={20} />
            </span>
            <p className="font-display text-base leading-snug text-ink">
              Get Your Insurance Policy Within Minutes*
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}