import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import { SERVICES } from "@/lib/services";

export default function ServicesPreview() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="bg-cream py-14 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:text-sm">
              <span aria-hidden className="h-px w-8 bg-bronze" />
              What we do
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl leading-tight text-ink sm:text-4xl">
              Insurance and investment solutions for every need
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-charcoal/80">
              From your family’s health cover to protection for your business,
              explore the options we can help you understand.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-white sm:inline-flex"
          >
            All Services
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-7 flex justify-center sm:hidden">
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/25 px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-white"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
