"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), reduce ? 500 : 1400);
    return () => clearTimeout(timer);
  }, [reduce]);

  useEffect(() => {
    if (!show) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          role="status"
          aria-label="Loading Arjun Joshi & Co."
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white px-6 text-center"
          exit={reduce ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative aspect-786/450 w-52 sm:w-64">
            {/* The "A" is written from left to right, like a pen stroke */}
            <motion.div
              className="absolute inset-0"
              initial={
                reduce
                  ? false
                  : {
                      clipPath:
                        "polygon(-50% 0%, -10% 0%, -50% 100%, -50% 100%)",
                    }
              }
              animate={{
                clipPath: "polygon(-50% 0%, 150% 0%, 110% 100%, -50% 100%)",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                src="/logo/logo-mark-a-gold.png"
                alt=""
                width={786}
                height={450}
                priority
                className="h-full w-full"
              />
            </motion.div>

            {/* Then the arrow draws across, left to right */}
            <motion.div
              className="absolute inset-0"
              initial={
                reduce ? false : { clipPath: "inset(0 100% 0 0)", y: 14 }
              }
              animate={{ clipPath: "inset(0 0% 0 0)", y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
            >
              <Image
                src="/logo/logo-mark-arrow-gold.png"
                alt=""
                width={786}
                height={450}
                priority
                className="h-full w-full"
              />
            </motion.div>
          </div>

          <motion.p
            className="mt-8 font-display text-3xl tracking-wide text-ink sm:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Arjun Joshi &amp; Co.
          </motion.p>

          <motion.p
            className="mt-2 text-sm text-charcoal/80 sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
          >
            Insurance &amp; Investment Management
          </motion.p>

          <div className="mt-10 h-0.5 w-48 overflow-hidden rounded bg-ink/10">
            <motion.div
              className="h-full origin-left bg-gold"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}