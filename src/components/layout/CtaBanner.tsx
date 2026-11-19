import { ArrowRight, Phone } from "lucide-react";
import EnquiryButton from "@/components/forms/EnquiryButton";
import { SITE, phoneHref } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="bg-cream py-12 sm:py-16">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-9 sm:px-10 sm:py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-sage/10 blur-2xl"
          />

          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Get started
              </p>
              <h2 className="mt-3 max-w-xl text-balance font-display text-2xl leading-tight text-cream sm:text-3xl lg:text-4xl">
                Ready to protect what matters?
              </h2>
              <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-cream/75 sm:text-base">
                Share your requirement and our Bhiwandi team will help you
                understand the options available — no pressure, no jargon.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <EnquiryButton className="shine inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30">
                Get a Free Quote
                <ArrowRight size={17} />
              </EnquiryButton>
              <a
                href={phoneHref(SITE.phones[0])}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3 font-semibold text-cream transition hover:border-cream hover:bg-cream hover:text-ink"
              >
                <Phone size={17} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
