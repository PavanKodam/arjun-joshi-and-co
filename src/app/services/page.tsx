import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CtaBanner from "@/components/layout/CtaBanner";
import ServiceCard from "@/components/services/ServiceCard";
import { SERVICES } from "@/lib/services";
import { SITE, formatPhone, phoneHref, whatsappHref } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insurance & Investment Services",
  description:
    "Explore health, life, motor, fire, worker, transit and marine insurance plus investment plans from Arjun Joshi & Co. in Bhiwandi.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Insurance and investment solutions for every need"
        description="Explore the protection and planning options we can help you with. Every service links to a detailed page, and our team is happy to answer questions before you decide."
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <div className="site-container">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-xl text-ink sm:text-2xl">
                  Not sure which cover is right for you?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                  Tell us what you want to protect and we will help you
                  understand the options. There is no obligation to buy.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
                <a
                  href={phoneHref(SITE.phones[0])}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-charcoal"
                >
                  <Phone size={16} />
                  +91 {formatPhone(SITE.phones[0])}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-cream"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
