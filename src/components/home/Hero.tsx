"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import PhotoFrame from "@/components/ui/PhotoFrame";
import YearsHighlight from "@/components/ui/YearsHighlight";
import { useEnquiry } from "@/components/forms/EnquiryProvider";

const HEADLINE = [
  { text: "Protect What Matters.", accent: false },
  { text: "Secure What Comes Next.", accent: true },
];

// Start the hero animation just as the loading screen lifts
const START = 1.8;

export default function Hero() {
  const reduce = useReducedMotion();
  const { openEnquiry } = useEnquiry();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pb-14 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
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

      <div className="site-container relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <motion.p
            className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:text-sm"
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: START - 0.2 }}
          >
            <span aria-hidden className="h-px w-9 bg-bronze" />
            Live Protected.
          </motion.p>

          <h1 className="text-balance font-display text-[1.7rem] leading-[1.08] text-ink min-[400px]:text-[1.95rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem]">
            {HEADLINE.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-1">
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
            className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-charcoal sm:text-base"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: START + 0.35 }}
          >
            Your family’s health, your future, your vehicles and your valuable
            assets deserve the right protection. Let Arjun Joshi &amp; Co. help
            you explore insurance and investment solutions suited to your needs.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: START + 0.55 }}
          >
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="shine group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-md shadow-gold/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/50 sm:text-base"
            >
              Get a Free Consultation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-cream sm:text-base"
            >
              Explore Our Services
            </Link>
          </motion.div>

          <motion.p
            className="mt-7 max-w-xl border-l-2 border-gold pl-4 text-sm leading-relaxed text-charcoal sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: START + 0.7 }}
          >
            With <YearsHighlight /> of experience in the insurance industry, we
            help families and businesses in Bhiwandi protect what matters most.
          </motion.p>

          <p className="mt-4 text-xs leading-relaxed text-charcoal/70">
            *Subject to insurer requirements, verification and approval.
          </p>
        </div>

        {/* Photo appears below the copy on phones, beside it on desktop */}
        <motion.div
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          initial={reduce ? false : { scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: START + 0.2, ease: "easeOut" }}
        >
          <div
            aria-hidden
            className="absolute -bottom-2.5 -right-2.5 h-full w-full rounded-3xl border-2 border-gold sm:-bottom-3 sm:-right-3 sm:rounded-4xl"
          />

          <PhotoFrame
            src="/images/hero-family.webp"
            alt="A happy family protected by the right insurance cover"
            priority
            imageClassName="object-cover object-center"
            className="relative aspect-video w-full rounded-3xl shadow-xl shadow-ink/10 sm:rounded-4xl"
            fallback={<ShieldCheck size={64} />}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden overflow-hidden rounded-3xl sm:block sm:rounded-4xl"
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-2/5 bg-linear-to-r from-transparent via-[#ffe9ad]/35 to-transparent"
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

          <div className="absolute bottom-3 left-3 flex max-w-[15rem] items-center gap-2.5 rounded-2xl bg-white/95 p-3 shadow-lg shadow-gold/25 backdrop-blur sm:bottom-4 sm:left-4 sm:gap-3 sm:p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/30 text-bronze sm:h-10 sm:w-10">
              <ShieldCheck size={19} />
            </span>
            <p className="font-display text-sm leading-snug text-ink sm:text-base">
              Get your policy within minutes*
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
