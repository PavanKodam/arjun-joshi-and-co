import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EnquiryButton from "@/components/forms/EnquiryButton";
import { SERVICE_TO_OPTION } from "@/lib/enquiry";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  /** Hide the summary on compact cards used inside smaller grids. */
  compact?: boolean;
};

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/15 sm:p-6">
      <span
        className={`grid h-12 w-12 place-items-center rounded-2xl text-ink transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${service.tint}`}
      >
        <Icon size={24} />
      </span>

      <h3 className="mt-4 font-display text-lg leading-snug text-ink sm:text-xl">
        <Link
          href={`/services/${service.id}`}
          className="transition hover:text-bronze"
        >
          {service.name}
        </Link>
      </h3>

      {!compact && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/80">
          {service.summary}
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
        <Link
          href={`/services/${service.id}`}
          className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
        >
          Learn More
          <ArrowRight size={14} />
        </Link>
        <EnquiryButton
          service={SERVICE_TO_OPTION[service.id]}
          className="inline-flex min-h-10 items-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold/40"
        >
          Enquire
        </EnquiryButton>
      </div>
    </article>
  );
}
