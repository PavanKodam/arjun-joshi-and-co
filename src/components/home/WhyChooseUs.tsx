"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ClipboardCheck,
  Headset,
  Layers,
  UserCheck,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import YearsHighlight from "@/components/ui/YearsHighlight";

const FEATURES = [
  {
    icon: Layers,
    title: "Multiple Insurance Solutions",
    text: "Health, life, motor, fire, worker, transit, marine and investment plans, all in one place.",
  },
  {
    icon: UserCheck,
    title: "Personalised Assistance",
    text: "We listen to your needs and guide you towards options that suit your situation.",
  },
  {
    icon: ClipboardCheck,
    title: "Simple Enquiry Process",
    text: "Share your requirement through a short form and our team will get in touch.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    text: "Call, WhatsApp or visit our Bhiwandi office for help with your questions.",
  },
];

type WhyChooseUsProps = {
  showLink?: boolean;
};

export default function WhyChooseUs({ showLink = false }: WhyChooseUsProps) {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-sage/30 blur-3xl"
        animate={reduce ? undefined : { y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="site-container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:text-sm">
            Why choose us
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl leading-tight text-ink sm:text-4xl">
            Why Choose Arjun Joshi &amp; Co.?
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-charcoal/80 sm:text-base">
            With <YearsHighlight /> of industry experience, honest guidance and
            a simple enquiry process, you can choose protection with confidence.
          </p>
        </Reveal>

        {/* Feature cards */}
        <ul className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.li
                key={feature.title}
                className="group rounded-2xl bg-cream p-4 ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/15 sm:rounded-3xl sm:p-5"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              >
                <div className="relative h-11 w-11 sm:h-13 sm:w-13">
                  <span
                    aria-hidden
                    className="ring-pulse absolute inset-0 rounded-xl bg-gold/40 sm:rounded-2xl"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                  <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-white text-bronze shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-13 sm:w-13 sm:rounded-2xl">
                    <Icon size={22} />
                  </span>
                </div>
                <h3 className="mt-3.5 font-display text-base leading-snug text-ink sm:mt-5 sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/80">
                  {feature.text}
                </p>
              </motion.li>
            );
          })}
        </ul>

        {showLink && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/why-choose-us"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/25 px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-cream"
            >
              Why Families Trust Us
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
