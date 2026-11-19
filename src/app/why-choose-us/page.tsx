import type { Metadata } from "next";
import {
  Handshake,
  LifeBuoy,
  Plus,
  Target,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaBanner from "@/components/layout/CtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Why Choose Us",
  description:
    "See why families and businesses in Bhiwandi choose Arjun Joshi & Co. for insurance: 20+ years of experience, personalised guidance and support when it matters.",
  path: "/why-choose-us",
});

const PROMISES = [
  {
    icon: Handshake,
    title: "Honest guidance",
    text: "We explain what a plan covers and what it does not, so you can make a decision without pressure.",
  },
  {
    icon: Target,
    title: "The right fit, not the hard sell",
    text: "We look at your situation first. If a product does not suit your need, we will tell you.",
  },
  {
    icon: LifeBuoy,
    title: "Support after the policy",
    text: "Renewals, questions and claim-time help stay with us. You are not left to figure it out alone.",
  },
];

const FAQS = [
  {
    question: "Is Arjun Joshi & Co. an insurance company?",
    answer:
      "No. We are an insurance agency. We help you understand and choose from policies offered by insurers. The policy, coverage terms and claim settlement are provided by the respective insurer.",
  },
  {
    question: "Do I have to buy a policy after enquiring?",
    answer:
      "Not at all. An enquiry only starts a conversation. Our team will explain the options, and you decide whether to proceed.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Our office is in Bhiwandi, Maharashtra. We regularly help families and businesses in Bhiwandi and nearby areas. For other locations, call us and we will let you know how we can help.",
  },
  {
    question: "Can you help with an existing policy or a claim?",
    answer:
      "Yes. We can help you understand the process and connect with the right team. The final decision on a claim always rests with the insurer.",
  },
  {
    question: "How do I get started?",
    answer:
      "Call us, message us on WhatsApp, or send the enquiry form on this website. Tell us what you want to protect and we will take it from there.",
  },
  {
    question: "Are returns on investment plans guaranteed?",
    answer:
      "No. Investment-linked returns depend on the plan and market conditions, and are not guaranteed. We will explain the risks before you decide.",
  },
];

export default function WhyChooseUsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Why choose us"
        title="Experience, honesty and support that stays with you"
        description="Insurance is a long-term relationship, not a one-time purchase. Here is how we work with families and businesses in Bhiwandi."
        crumbs={[{ label: "Why Choose Us" }]}
      />

      <WhyChooseUs />

      <section className="bg-cream py-14 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:text-sm">
              Our promise
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl leading-tight text-ink sm:text-4xl">
              What you can expect from us
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {PROMISES.map((promise) => {
              const Icon = promise.icon;
              return (
                <div
                  key={promise.title}
                  className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:p-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sand text-bronze">
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-ink">
                    {promise.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                    {promise.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:text-sm">
                Questions
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl leading-tight text-ink sm:text-4xl">
                Questions people ask us
              </h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-charcoal/80 sm:text-base">
                Still unsure about something? Call us — a short conversation is
                often easier than reading a policy document.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {FAQS.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl bg-cream px-5 py-4 ring-1 ring-ink/5 open:ring-gold/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-ink sm:text-base [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <Plus
                      size={18}
                      className="shrink-0 text-bronze transition-transform duration-200 group-open:rotate-45"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
