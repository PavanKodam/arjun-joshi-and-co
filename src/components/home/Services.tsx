"use client";

import { useCallback, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { SERVICES, type Service } from "@/lib/services";
import { useEnquiry } from "@/components/forms/EnquiryProvider";
import { SERVICE_TO_OPTION } from "@/lib/enquiry";

export default function Services() {
  const reduce = useReducedMotion();
  const { openEnquiry } = useEnquiry();
  const trackRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Service | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // How far the row of cards has been scrolled (0 to 1)
  const { scrollXProgress } = useScroll({ container: trackRef });
  const barScale = useTransform(scrollXProgress, [0, 1], [0.12, 1]);
  useMotionValueEvent(scrollXProgress, "change", (value) => {
    setCanPrev(value > 0.02);
    setCanNext(value < 0.98);
  });

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 24 : 320;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const openService = (service: Service) => {
    setSelected(service);
    setOpen(true);
  };
  const closeModal = useCallback(() => setOpen(false), []);

  const SelectedIcon = selected?.icon;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-cream py-14 sm:py-20 lg:py-28"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
        animate={reduce ? undefined : { y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="site-container relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              Insurance and Investment Solutions for Every Need
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              Explore the protection and planning options we can help you with.
              Tap Enquire Now on any card and our team will get in touch.
            </p>
          </div>

          {/* Arrow buttons (desktop and tablet) */}
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous services"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/25 text-ink transition hover:bg-ink hover:text-cream disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next services"
              className="grid h-12 w-12 place-items-center rounded-full bg-gold text-ink transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* The horizontally scrolling row of cards */}
        <div
          ref={trackRef}
          className="no-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-8 pt-3 sm:-mx-6 sm:gap-6 sm:scroll-px-6 sm:px-6 lg:-mx-10 lg:scroll-px-10 lg:px-10"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                className="group flex w-[78%] shrink-0 snap-start flex-col rounded-3xl bg-white p-6 shadow-md shadow-ink/5 ring-1 ring-ink/5 transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/25 sm:w-72 lg:w-80"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index, 3) * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="relative h-14 w-14">
                  <span
                    aria-hidden
                    className="ring-pulse absolute inset-0 rounded-2xl bg-gold/40"
                    style={{ animationDelay: `${index * 0.4}s` }}
                  />
                  <span
                    className={`relative grid h-14 w-14 place-items-center rounded-2xl text-ink transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${service.tint}`}
                  >
                    <Icon size={26} />
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl text-ink">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/80">
                  {service.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => openService(service)}
                    className="rounded-full border border-ink/25 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
                  >
                    Learn More
                  </button>
                  <button
                    type="button"
                    onClick={() => openEnquiry(SERVICE_TO_OPTION[service.id])}
                    className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold/40"
                  >
                    Enquire Now
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Scroll progress + swipe hint */}
        <div className="flex items-center justify-between gap-6">
          <div className="h-1 w-full max-w-xs overflow-hidden rounded bg-ink/10">
            <motion.div
              style={{ scaleX: barScale }}
              className="h-full origin-left rounded bg-gold"
            />
          </div>
          <p className="flex items-center gap-2 text-xs text-charcoal/75 sm:hidden">
            Swipe to see more
            <motion.span
              animate={reduce ? undefined : { x: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </p>
        </div>
      </div>

      {/* "Learn More" pop-up */}
      <Modal
        open={open}
        onClose={closeModal}
        title={selected?.name ?? "Service details"}
      >
        {selected && SelectedIcon && (
          <div>
            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl text-ink ${selected.tint}`}
            >
              <SelectedIcon size={26} />
            </span>
            <h3 className="mt-4 pr-10 font-display text-2xl text-ink">
              {selected.name}
            </h3>
            <p className="mt-3 leading-relaxed text-charcoal/80">
              {selected.details}
            </p>

            <ul className="mt-5 space-y-2.5">
              {selected.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-bronze" />
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs leading-relaxed text-charcoal/75">
              Coverage, premiums, eligibility and claim settlement are subject
              to the respective insurer’s terms and conditions.
            </p>

            <a
              type="button"
              onClick={() => {
                closeModal();
                if (selected) openEnquiry(SERVICE_TO_OPTION[selected.id]);
              }}
              className="shine mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 font-semibold text-ink transition hover:shadow-lg hover:shadow-gold/40"
            >
              Enquire Now
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
}