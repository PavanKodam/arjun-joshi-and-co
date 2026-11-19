import {
  ArrowUpRight,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Send,
} from "lucide-react";
import EnquiryButton from "@/components/forms/EnquiryButton";
import DepartmentCards from "@/components/ui/DepartmentCards";
import { InstagramIcon } from "@/components/ui/icons";
import {
  SITE,
  directionsHref,
  mapEmbedSrc,
  whatsappHref,
} from "@/lib/site";

const ROW = "flex gap-3.5";

const ICON =
  "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sand text-ink";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div>
            <h2 className="text-balance font-display text-2xl leading-tight text-ink sm:text-3xl">
              Talk to the right team
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-charcoal/80 sm:text-base">
              Call, message or drop by our Bhiwandi office. Each team handles a
              different kind of question, so you reach someone who can help.
            </p>

            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <EnquiryButton className="shine inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-ink shadow-md shadow-gold/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/50">
                <Send size={17} />
                Send an Enquiry
              </EnquiryButton>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-semibold text-ink transition hover:border-ink hover:bg-white"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/25 px-6 py-3 font-semibold text-ink transition hover:border-ink hover:bg-white"
              >
                <Navigation size={17} />
                Directions
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
                Department contacts
              </h3>
              <div className="mt-3">
                <DepartmentCards />
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:p-6">
              <ul className="space-y-5">
                <li className={ROW}>
                  <span className={ICON}>
                    <MapPin size={19} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base text-ink">
                      Office address
                    </h3>
                    <address className="mt-1 text-sm not-italic leading-relaxed text-charcoal/80">
                      {SITE.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <a
                      href={directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-bronze hover:text-ink"
                    >
                      Get directions
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </li>

                <li className={ROW}>
                  <span className={ICON}>
                    <Clock size={19} />
                  </span>
                  <div>
                    <h3 className="font-display text-base text-ink">
                      Office timings
                    </h3>
                    <dl className="mt-1 space-y-0.5 text-sm text-charcoal/80">
                      {SITE.hours.map((slot) => (
                        <div key={slot.days}>
                          <dt className="inline font-medium text-charcoal">
                            {slot.days}:{" "}
                          </dt>
                          <dd className="inline">{slot.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-1 text-xs text-charcoal/60">
                      Timings may differ during holidays.
                    </p>
                  </div>
                </li>

                <li className={ROW}>
                  <span className={ICON}>
                    <InstagramIcon size={19} />
                  </span>
                  <div>
                    <h3 className="font-display text-base text-ink">
                      Instagram
                    </h3>
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-charcoal/80 underline decoration-gold decoration-2 underline-offset-4 transition hover:text-ink"
                    >
                      {SITE.instagramHandle}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-3xl bg-sand shadow-lg ring-1 ring-ink/10">
              <iframe
                title="Arjun Joshi & Co. office location on Google Maps"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[20rem] w-full border-0 sm:h-[26rem] lg:h-[34rem]"
              />
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-ink/5">
              <p className="font-display text-lg text-ink">
                Visiting the office?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-charcoal/75">
                We are at Surya Excellency, Balaji Nagar, Narpoli. Call ahead
                and we will keep the time free for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
