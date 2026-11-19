import type { Metadata } from "next";
import {
  BadgeCheck,
  Headset,
  ListChecks,
  MessageSquareText,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import About from "@/components/home/About";
import Founder from "@/components/home/Founder";
import CtaBanner from "@/components/layout/CtaBanner";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet Arjun Joshi & Co., an insurance and investment management agency in Bhiwandi with over 20 years of industry experience.",
  path: "/about",
});

const STEPS = [
  {
    icon: MessageSquareText,
    title: "Tell us what you need",
    text: "Call, WhatsApp or send a short enquiry with your requirement. No documents are needed at this stage.",
  },
  {
    icon: ListChecks,
    title: "We explain your options",
    text: "We walk you through the types of cover available in plain language, including what is and is not included.",
  },
  {
    icon: BadgeCheck,
    title: "Choose what fits",
    text: "You decide on a plan that suits your family or business. Eligibility and acceptance stay with the insurer.",
  },
  {
    icon: Headset,
    title: "Stay supported",
    text: "Our team remains a point of contact for renewals, questions and help when you need to make a claim.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Local guidance. Two decades of experience."
        description="Arjun Joshi & Co. is an insurance and investment management agency in Bhiwandi. We help individuals, families and businesses understand their protection options and choose with confidence."
        crumbs={[{ label: "About Us" }]}
      />

      <About />
      <Founder />

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="site-container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:text-sm">
              How we work
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl leading-tight text-ink sm:text-4xl">
              A simple, unhurried process
            </h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-charcoal/80 sm:text-base">
              Choosing insurance should not feel confusing. Here is what to
              expect when you get in touch with us.
            </p>
          </Reveal>

          <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative rounded-3xl bg-cream p-5 ring-1 ring-ink/5 sm:p-6"
                >
                  <span className="absolute right-5 top-5 font-display text-3xl text-gold/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-bronze shadow-sm">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-4 font-display text-lg leading-snug text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
