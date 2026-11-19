"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEnquiry } from "@/components/forms/EnquiryProvider";
import { NAV_LINKS, isActivePath } from "@/lib/nav";
import { SITE, formatPhone, phoneHref, whatsappHref } from "@/lib/site";

const MOBILE_ACTION =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));
  const { openEnquiry } = useEnquiry();

  // Lock the page behind the open mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Inner pages get a solid header immediately; the homepage opens over cream
  const solid = scrolled || menuOpen || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-gold/30 bg-cream/95 shadow-sm shadow-ink/5 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`site-container flex items-center justify-between gap-3 transition-all duration-300 ${
          scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
        }`}
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-4"
          aria-label="Arjun Joshi & Co. home"
        >
          <Image
            src="/logo/logo-mark-gold.png"
            alt=""
            width={786}
            height={450}
            priority
            className={`w-auto shrink-0 transition-all duration-300 ${
              scrolled ? "h-9 sm:h-12 xl:h-14" : "h-10 sm:h-14 xl:h-18"
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
        </Link>

        {/* Full navigation only on wide screens, like the original header */}
        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8" aria-label="Main">
          {NAV_LINKS.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                  active
                    ? "font-semibold text-ink"
                    : "text-charcoal/80 hover:bg-white/70 hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => openEnquiry()}
            className="shine hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold/40 xl:inline-flex"
          >
            Get a Quote
          </button>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-ink transition hover:bg-sand xl:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-gold/20 bg-cream xl:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <nav
              className="site-container max-h-[calc(100dvh-5.5rem)] overflow-y-auto pb-6 pt-4 sm:max-h-[calc(100dvh-7rem)]"
              aria-label="Mobile"
            >
              <ul className="space-y-1">
                {NAV_LINKS.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base transition ${
                          active
                            ? "bg-sand font-semibold text-ink"
                            : "text-charcoal hover:bg-white/70"
                        }`}
                      >
                        {item.label}
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-gold" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={phoneHref(SITE.phones[0])}
                  className={`${MOBILE_ACTION} border border-ink/20 text-ink hover:border-ink hover:bg-white`}
                >
                  <Phone size={16} />
                  {formatPhone(SITE.phones[0])}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${MOBILE_ACTION} border border-ink/20 text-ink hover:border-ink hover:bg-white`}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openEnquiry();
                }}
                className={`${MOBILE_ACTION} mt-2 w-full bg-gold text-ink shadow-sm shadow-gold/30 hover:shadow-md`}
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-charcoal/70">
                {SITE.addressLines.join(" ")}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
