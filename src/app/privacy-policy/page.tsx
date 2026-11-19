import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Arjun Joshi & Co. collects, uses and protects the personal information you share through this website and our insurance enquiry process.",
  path: "/privacy-policy",
});

const H2 = "font-display text-xl text-ink sm:text-2xl";
const P = "mt-3 text-sm leading-relaxed text-charcoal/80 sm:text-base";
const UL = "mt-3 space-y-2 pl-5 text-sm leading-relaxed text-charcoal/80 sm:text-base";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains what information we collect through this website, why we collect it, and the choices you have."
        crumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="site-container">
          <article className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-charcoal/60">
              Last updated: 19 November 2026
            </p>

            <h2 className={`mt-8 ${H2}`}>1. Who we are</h2>
            <p className={P}>
              {SITE.name} is an insurance and investment management agency
              based in Bhiwandi, Maharashtra, India. In this policy, “we”, “us”
              and “our” refer to {SITE.name}. You can reach us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-bronze underline decoration-gold underline-offset-4"
              >
                {SITE.email}
              </a>{" "}
              or on{" "}
              <a
                href={`tel:+91${SITE.phones[0]}`}
                className="font-medium text-bronze underline decoration-gold underline-offset-4"
              >
                +91 {SITE.phones[0]}
              </a>
              .
            </p>

            <h2 className={`mt-8 ${H2}`}>2. Information you share with us</h2>
            <p className={P}>
              When you send an enquiry through the website, call us or message
              us, you may share:
            </p>
            <ul className={`${UL} list-disc`}>
              <li>Your name, mobile number, email address and city or area.</li>
              <li>
                The type of insurance or investment plan you are interested in.
              </li>
              <li>
                Names and ages of family members you want to cover. Please do
                not send medical records or sensitive health details through the
                website form.
              </li>
              <li>Any other message or requirement you choose to share.</li>
            </ul>
            <p className={P}>
              The enquiry form also saves a temporary draft in your browser’s
              session storage so that your details are not lost if the pop-up is
              closed by mistake. That draft is cleared after a successful
              submission or when the browser session ends.
            </p>

            <h2 className={`mt-8 ${H2}`}>3. How we use your information</h2>
            <p className={P}>We use the information you share to:</p>
            <ul className={`${UL} list-disc`}>
              <li>Respond to your enquiry and understand what you need.</li>
              <li>
                Explain suitable insurance or investment options and, where
                necessary, share relevant details with insurers or their
                authorised representatives so that a quotation or policy can be
                processed.
              </li>
              <li>
                Help with renewals, policy servicing, claims and related
                support you ask for.
              </li>
              <li>
                Maintain business records and meet legal or regulatory
                obligations.
              </li>
            </ul>
            <p className={P}>
              We do not sell your personal information. We only share what is
              necessary for the purpose you have asked us to help with, or where
              the law requires it.
            </p>

            <h2 className={`mt-8 ${H2}`}>4. Email and hosting providers</h2>
            <p className={P}>
              The website uses service providers for hosting and for delivering
              enquiry emails. These providers process data on our behalf and are
              expected to protect it. Enquiry emails are sent to our team so
              that we can respond to you.
            </p>

            <h2 className={`mt-8 ${H2}`}>5. Cookies and analytics</h2>
            <p className={P}>
              This website does not use advertising or analytics cookies. We do
              not use cookies to track you across other websites. Our hosting
              provider may keep standard technical logs, such as IP address and
              request time, for security and reliability.
            </p>

            <h2 className={`mt-8 ${H2}`}>6. How long we keep information</h2>
            <p className={P}>
              We keep enquiry and client information for as long as needed to
              respond to you, service a policy you have taken, and meet legal or
              business record requirements. When it is no longer needed, we
              take reasonable steps to delete or anonymise it.
            </p>

            <h2 className={`mt-8 ${H2}`}>7. Your choices</h2>
            <p className={P}>
              You can ask us to access, correct or delete the personal
              information we hold about you, or withdraw consent for future
              contact. Email us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-bronze underline decoration-gold underline-offset-4"
              >
                {SITE.email}
              </a>{" "}
              with your request. We may need to verify your identity before
              acting. Some information may need to be retained where the law
              requires it.
            </p>

            <h2 className={`mt-8 ${H2}`}>8. Security</h2>
            <p className={P}>
              We use reasonable technical and organisational measures to protect
              the information you share. No method of transmission over the
              internet is completely secure, so please avoid sending sensitive
              documents or medical details through the website form.
            </p>

            <h2 className={`mt-8 ${H2}`}>9. Changes to this policy</h2>
            <p className={P}>
              We may update this policy when our processes change. The latest
              version will always be available on this page, with the updated
              date shown above.
            </p>

            <div className="mt-10 rounded-2xl bg-cream p-5 ring-1 ring-ink/5">
              <p className="text-sm leading-relaxed text-charcoal/80">
                Questions about this policy?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-bronze underline decoration-gold underline-offset-4"
                >
                  Contact us
                </Link>{" "}
                and we will be happy to help.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
