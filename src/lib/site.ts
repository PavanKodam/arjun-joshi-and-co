export const SITE = {
  name: "Arjun Joshi & Co.",
  subtitle: "Insurance & Investment Management",
  email: "arjunjoshiandco@gmail.com",
  phones: ["8805966666", "9371832495", "9168752711", "9226729295"],
  addressLines: [
    "Surya Excellency, Balaji Nagar, Narpoli,",
    "Bhiwandi, Maharashtra 421305, India",
  ],
  coordinates: { lat: 19.28258986260652, lng: 73.04914298324269 },
  instagram: "https://www.instagram.com/arjunjoshiandco/",
  instagramHandle: "@arjunjoshiandco",
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 7:30 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  // Configurable until the company confirms the WhatsApp number.
  // Set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local (digits only, with country code).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918805966666",
  whatsappMessage:
    "Hello Arjun Joshi & Co., I would like to enquire about your insurance services.",
};

export const phoneHref = (phone: string) => `tel:+91${phone}`;

// 8805966666 -> 88059 66666
export const formatPhone = (phone: string) =>
  `${phone.slice(0, 5)} ${phone.slice(5)}`;

export const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage
)}`;

const { lat, lng } = SITE.coordinates;

export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`;

/** The website's public address. Set NEXT_PUBLIC_SITE_URL on Vercel to the real domain. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

/** False on your laptop and on temporary addresses, so Google never lists test copies */
export const IS_LIVE_SITE = ![
  "localhost",
  ".vercel.app",
  ".netlify.app",
  ".pages.dev",
].some((part) => SITE_URL.includes(part));

export type Department = {
  id: string;
  label: string;
  description: string;
  phone: string;
  email: string;
};

/** Change this to the client's real domain once it is bought. */
export const EMAIL_DOMAIN = "arjunjoshiandco.com";

/**
 * false = every team shows the Gmail address (safe until the domain mailboxes exist)
 * true  = teams show enquiry@domain, claims@domain, renewals@domain, support@domain
 */
export const USE_DOMAIN_EMAILS = true;

const deptEmail = (prefix: string) =>
  USE_DOMAIN_EMAILS ? `${prefix}@${EMAIL_DOMAIN}` : SITE.email;

// EDIT THESE to match what the client decides.
export const DEPARTMENTS: Department[] = [
  {
    id: "enquiries",
    label: "Enquiries",
    description: "Questions about a new policy or plan",
    phone: "8805966666",
    email: deptEmail("enquiry"),
  },
  {
    id: "claims",
    label: "Claims",
    description: "Help with an existing claim",
    phone: "9371832495",
    email: deptEmail("claims"),
  },
  {
    id: "renewals",
    label: "Renewals",
    description: "Renewals, changes and documents",
    phone: "9168752711",
    email: deptEmail("renewals"),
  },
  {
    id: "support",
    label: "Support",
    description: "Anything else we can help with",
    phone: "9226729295",
    email: deptEmail("support"),
  },
];

/** Name shown in the copyright line at the very bottom of the website */
export const COPYRIGHT_HOLDER = "Arjun Joshi & Co.";

/** Developer credit shown at the very bottom. Add your numbers when ready, e.g. ["9999999999"] */
export const DEVELOPER = {
  name: "PK Technologies",
  phones: [ "9168752711", "8421468956" ] as string[],
};