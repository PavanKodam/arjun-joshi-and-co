import { MessageCircle, Phone, Send } from "lucide-react";
import EnquiryButton from "@/components/forms/EnquiryButton";
import { SITE, phoneHref, whatsappHref } from "@/lib/site";

const ITEM =
  "flex min-h-14 items-center justify-center gap-2 border-r border-ink/10 px-2 text-xs font-semibold text-ink transition last:border-r-0 active:bg-sand";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/15 bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-3">
        <a href={phoneHref(SITE.phones[0])} className={ITEM}>
          <Phone size={17} />
          Call
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={ITEM}
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
        <EnquiryButton
          className={`${ITEM} bg-gold/90 hover:bg-gold`}
        >
          <Send size={17} />
          Enquire
        </EnquiryButton>
      </div>
    </div>
  );
}
