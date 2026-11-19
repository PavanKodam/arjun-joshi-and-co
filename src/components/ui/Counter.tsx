"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CounterProps = {
  to: number;
  suffix?: string;
  /** Seconds after page load before the first count may start */
  startAfter?: number;
  /** Count again every time it scrolls back into view */
  repeat?: boolean;
};

export default function Counter({
  to,
  suffix = "",
  startAfter = 0,
  repeat = false,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: !repeat, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!inView) {
      // Reset to 0 when it leaves the screen, ready to count again
      if (repeat) el.textContent = `0${suffix}`;
      return;
    }

    if (reduce) {
      el.textContent = `${to}${suffix}`;
      return;
    }

    // Wait for the loading screen to finish before counting
    const wait = Math.max(0, startAfter - performance.now() / 1000);

    const controls = animate(0, to, {
      duration: 1.8,
      delay: wait,
      ease: "easeOut",
      onUpdate: (value) => {
        el.textContent = `${Math.round(value)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, reduce, startAfter, repeat]);

  return <span ref={ref}>0{suffix}</span>;
}