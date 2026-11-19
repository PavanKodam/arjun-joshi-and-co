import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div
        aria-hidden
        className="glow-gold pointer-events-none absolute -right-20 top-20 h-80 w-80"
      />
      <div className="site-container relative">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-7xl text-gold/60 sm:text-8xl">404</p>
          <h1 className="mt-4 text-balance font-display text-3xl text-ink sm:text-4xl">
            We couldn’t find that page
          </h1>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-charcoal/80 sm:text-base">
            The link may be old or the page may have moved. You can go back
            home, explore our services, or contact the office and we will point
            you in the right direction.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold/40"
            >
              <Home size={17} />
              Go Home
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-semibold text-ink transition hover:border-ink hover:bg-white"
            >
              <Search size={17} />
              Browse Services
            </Link>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-bronze transition hover:text-ink"
          >
            <ArrowLeft size={14} />
            Contact the office instead
          </Link>
        </div>
      </div>
    </section>
  );
}
