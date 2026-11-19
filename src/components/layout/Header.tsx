"use client";

import Image from "next/image";
import { useEffect, useState,type MouseEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { useEnquiry } from "@/components/forms/EnquiryProvider";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));
  const { openEnquiry } = useEnquiry();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // The founder section belongs to "About Us"
            setActive(entry.target.id === "founder" ? "about" : entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    [...NAV_ITEMS.map((item) => item.id), "founder"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  // Scroll to a section from the mobile menu (more reliable on phones than a plain link)
  const goToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMenuOpen(false);
    window.setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }, 200);
  };
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-gold/30 bg-cream/90 shadow-md shadow-ink/5 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`site-container flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-2 sm:gap-4"
          aria-label="Arjun Joshi & Co. home"
        >
          <Image
            src="/logo/logo-mark-gold.png"
            alt=""
            width={786}
            height={450}
            priority
            className={` w-auto transition-all duration-300 ${
              scrolled
                ? "h-9 sm:h-12 xl:h-14"
                : "h-10 sm:h-14 xl:h-18"
            }`}
          />
          <span className="leading-tight">
            <span className="block whitespace-nowrap font-display text-[1.15rem] font-semibold tracking-tight text-ink min-[360px]:text-[1.4rem] sm:text-2xl xl:text-3xl">
              Arjun Joshi &amp; Co.
            </span>
            <span className="hidden text-xs text-charcoal sm:block xl:text-sm">
              Insurance &amp; Investment Management
            </span>
          </span>
        </a>

        {/* Full menu only on wide screens, so the big logo never feels crowded */}
        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative py-1 text-sm transition-colors hover:text-ink ${
                active === item.id
                  ? "font-medium text-ink"
                  : "text-charcoal/80"
              }`}
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-gold"
                />
              )}
            </a>
          ))}
          <button
            type="button"
            onClick={() => openEnquiry()}
            className="shine rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/40"
          >
            Get a Quote
          </button>
        </nav>

        <button
          type="button"
          className="text-ink xl:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="overflow-hidden xl:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Mobile"
          >
            <ul className="site-container flex flex-col gap-1 pb-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(event) => goToSection(event, item.id)}
                    className={`block rounded-lg px-3 py-3 text-base ${
                      active === item.id
                        ? "bg-sand font-medium text-ink"
                        : "text-charcoal"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openEnquiry();
                  }}
                  className="shine block w-full rounded-full bg-gold px-5 py-3 text-center font-semibold text-ink"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}