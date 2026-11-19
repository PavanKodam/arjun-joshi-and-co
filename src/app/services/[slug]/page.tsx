import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CtaBanner from "@/components/layout/CtaBanner";
import ServiceCard from "@/components/services/ServiceCard";
import EnquiryButton from "@/components/forms/EnquiryButton";
import { SERVICE_TO_OPTION } from "@/lib/enquiry";
import { SERVICES, getService } from "@/lib/services";
import { SITE, SITE_URL, phoneHref, whatsappHref, formatPhone } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return { title: "Service not found" };

  return pageMetadata({
    title: `${service.name} in Bhiwandi`,
    description: service.summary,
    path: `/services/${service.id}`,
  });
}

const STEPS = [
  "Share your requirement by phone, WhatsApp or the enquiry form.",
  "We explain the suitable options and what each one covers.",
  "You choose a plan; eligibility and acceptance stay with the insurer.",
  "We stay available for renewals, questions and claim-time guidance.",
];

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const Icon = service.icon;
  const related = SERVICES.filter((item) => item.id !== service.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.details,
    url: `${SITE_URL}/services/${service.id}`,
    areaServed: { "@type": "City", name: "Bhiwandi" },
    provider: {
      "@type": "InsuranceAgency",
      name: SITE.name,
      url: SITE_URL,
      telephone: `+91${SITE.phones[0]}`,
      email: SITE.email,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.summary}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(18rem,1fr)] lg:gap-8">
            <div className="space-y-5">
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:p-8">
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-ink ${service.tint}`}
                  >
                    <Icon size={27} />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl text-ink sm:text-3xl">
                      What this covers
                    </h2>
                    <p className="mt-2 leading-relaxed text-charcoal/80">
                      {service.details}
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 font-display text-lg text-ink">
                  Who it can help
                </h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 rounded-xl bg-cream px-3.5 py-3 text-sm text-charcoal"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-bronze"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-2xl bg-cream p-4 text-xs leading-relaxed text-charcoal/75 ring-1 ring-ink/5">
                  Coverage, premiums, eligibility and claim settlement are
                  subject to the respective insurer’s terms and conditions.
                  This page is general information, not a policy document or a
                  guarantee of acceptance.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:p-8">
                <h2 className="font-display text-2xl text-ink">
                  How we help you
                </h2>
                <ol className="mt-5 space-y-4">
                  {STEPS.map((step, index) => (
                    <li key={step} className="flex gap-3.5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/25 font-display text-sm font-semibold text-ink">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bronze transition hover:text-ink"
                >
                  Browse all services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl bg-ink p-5 text-cream shadow-lg sm:p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/20 text-gold">
                  <ShieldCheck size={22} />
                </span>
                <h2 className="mt-4 font-display text-2xl leading-tight text-cream">
                  Get help with {service.name.toLowerCase()}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  Tell us what you need. Our Bhiwandi team will explain the
                  options and next steps.
                </p>

                <EnquiryButton
                  service={SERVICE_TO_OPTION[service.id]}
                  className="shine mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30"
                >
                  Send an Enquiry
                  <ArrowRight size={16} />
                </EnquiryButton>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    href={phoneHref(SITE.phones[0])}
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-cream/25 px-3 py-2 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream hover:text-ink"
                  >
                    <Phone size={15} />
                    Call
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-cream/25 px-3 py-2 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream hover:text-ink"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>
                <p className="mt-3 text-center text-xs text-cream/60">
                  +91 {formatPhone(SITE.phones[0])}
                </p>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5">
                <h2 className="font-display text-lg text-ink">Visit our office</h2>
                <ul className="mt-3 space-y-3 text-sm text-charcoal/80">
                  <li className="flex gap-2.5">
                    <MapPin size={17} className="mt-0.5 shrink-0 text-bronze" />
                    <address className="not-italic leading-relaxed">
                      {SITE.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </li>
                  <li className="flex gap-2.5">
                    <Clock size={17} className="mt-0.5 shrink-0 text-bronze" />
                    <span>
                      {SITE.hours.map((slot) => (
                        <span key={slot.days} className="block">
                          {slot.days}: {slot.time}
                        </span>
                      ))}
                    </span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-bronze transition hover:text-ink"
                >
                  Contact details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="site-container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                Explore more
              </p>
              <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                Other services you may need
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-bronze"
            >
              View all services
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.id} service={item} compact />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
