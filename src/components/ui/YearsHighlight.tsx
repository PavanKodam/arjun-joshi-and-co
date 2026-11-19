"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";

const YEARS = 20;
/** Preloader takes ~1.4s to hide plus ~0.6s to slide away. */
const PRELOADER_END = 2.05;
const COUNT_DELAY = 0.4;

/**
 * The one figure we can stand behind: 20+ years in the insurance industry.
 * The number counts up the same way the old stat cards did, with a gold
 * marker highlight that draws itself underneath.
 */
export default function YearsHighlight() {
  const ref = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    // Reset while off screen so it can count again on the next visit
    if (!inView) {
      el.textContent = "0";
      return;
    }

    if (reduce) {
      el.textContent = String(YEARS);
      return;
    }

    // If the section is visible behind the page preloader on first load,
    // wait for the preloader to finish so the count is actually seen.
    const waitForPreloader = Math.max(
      0,
      PRELOADER_END - performance.now() / 1000,
    );

    el.textContent = "0";
    const controls = animate(0, YEARS, {
      duration: 1.8,
      delay: waitForPreloader + COUNT_DELAY,
      ease: "easeOut",
      onUpdate: (value) => {
        el.textContent = String(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [inView, reduce]);

  return (
    <>
      <span className="sr-only">20+ years</span>
      <span
        ref={ref}
        aria-hidden
        className="relative inline-block whitespace-nowrap align-baseline text-[1.18em] leading-none font-semibold text-ink"
      >
        <motion.span
          className="absolute inset-0 origin-left rounded-[3px] bg-gold/60"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        />
        <span className="relative">
          {/* The invisible “20” keeps the phrase width steady while counting */}
          <span className="inline-grid tabular-nums">
            <span className="invisible col-start-1 row-start-1">20</span>
            <span
              ref={numberRef}
              className="col-start-1 row-start-1 text-right"
            >
              20
            </span>
          </span>
          + years
        </span>
      </span>
    </>
  );
}
