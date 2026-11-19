import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms for using the Arjun Joshi & Co. website and for insurance enquiries made through it.",
  path: "/terms",
});

const H2 = "font-display text-xl text-ink sm:text-2xl";
const P = "mt-3 text-sm leading-relaxed text-charcoal/80 sm:text-base";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms before using this website. By continuing to use it, you agree to the terms below."
        crumbs={[{ label: "Terms & Conditions" }]}
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="site-container">
          <article className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-charcoal/60">
              Last updated: 19 November 2026
            </p>

            <h2 className={`mt-8 ${H2}`}>1. About this website</h2>
            <p className={P}>
              This website is operated by {SITE.name}, an insurance and
              investment management agency in Bhiwandi, Maharashtra. The
              content is provided for general information about our services and
              the types of insurance we can help with.
            </p>

            <h2 className={`mt-8 ${H2}`}>2. Not financial or legal advice</h2>
            <p className={P}>
              Nothing on this website is a recommendation to buy a particular
              policy, a guarantee of coverage, or professional financial, tax or
              legal advice. Every person’s circumstances are different. Please
              discuss your needs with our team and read the insurer’s policy
              documents before making a decision.
            </p>

            <h2 className={`mt-8 ${H2}`}>3. We are an agency, not an insurer</h2>
            <p className={P}>
              {SITE.name} helps clients understand and arrange insurance
              products offered by insurers. We do not underwrite policies.
              Coverage, premiums, eligibility, exclusions and claim settlement
              are decided by the respective insurer under its terms and
              conditions. Submitting an enquiry does not create a contract of
              insurance.
            </p>

            <h2 className={`mt-8 ${H2}`}>4. Enquiries and quotations</h2>
            <p className={P}>
              An enquiry through this website is a request for information. It
              is not a binding application. Any premium or quotation mentioned
              is indicative and subject to the insurer’s underwriting and
              verification. Policy issuance is complete only when the insurer
              accepts the proposal and issues the policy.
            </p>

            <h2 className={`mt-8 ${H2}`}>5. Accuracy of information</h2>
            <p className={P}>
              Please provide accurate and complete information in your enquiry.
              Incorrect or incomplete details can affect eligibility, premiums
              or claim settlement. If your details change, tell us or the
              insurer promptly.
            </p>

            <h2 className={`mt-8 ${H2}`}>6. Website availability and links</h2>
            <p className={P}>
              We try to keep this website accurate and available, but we do not
              promise that it will always be error-free or uninterrupted. Links
              to third-party websites, including maps and social media, are
              provided for convenience. We are not responsible for their
              content or privacy practices.
            </p>

            <h2 className={`mt-8 ${H2}`}>7. Intellectual property</h2>
            <p className={P}>
              The content, branding and design of this website belong to{" "}
              {SITE.name} or are used with permission. You may view and print
              pages for your own personal use. Please do not reproduce or use
              our content for commercial purposes without written permission.
            </p>

            <h2 className={`mt-8 ${H2}`}>8. Limitation of liability</h2>
            <p className={P}>
              To the extent permitted by law, {SITE.name} is not liable for any
              indirect or consequential loss arising from your use of this
              website or reliance on its general information. Nothing in these
              terms limits rights that you may have under applicable consumer
              law or that cannot be excluded by law.
            </p>

            <h2 className={`mt-8 ${H2}`}>9. Privacy</h2>
            <p className={P}>
              Our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-bronze underline decoration-gold underline-offset-4"
              >
                Privacy Policy
              </Link>{" "}
              explains how we handle the information you share.
            </p>

            <h2 className={`mt-8 ${H2}`}>10. Governing law</h2>
            <p className={P}>
              These terms are governed by the laws of India. Any dispute
              relating to this website is subject to the jurisdiction of the
              courts at Bhiwandi, Maharashtra.
            </p>

            <h2 className={`mt-8 ${H2}`}>11. Contact</h2>
            <p className={P}>
              For questions about these terms, email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-bronze underline decoration-gold underline-offset-4"
              >
                {SITE.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:+91${SITE.phones[0]}`}
                className="font-medium text-bronze underline decoration-gold underline-offset-4"
              >
                +91 {SITE.phones[0]}
              </a>
              .
            </p>

            <div className="mt-10 rounded-2xl bg-cream p-5 ring-1 ring-ink/5">
              <p className="text-sm leading-relaxed text-charcoal/80">
                Need help with something specific?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-bronze underline decoration-gold underline-offset-4"
                >
                  Talk to our team
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
