import {
  Car,
  Flame,
  HardHat,
  HeartPulse,
  ShieldPlus,
  Ship,
  TrendingUp,
  Truck,
  Umbrella,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  name: string;
  icon: LucideIcon;
  tint: string; // Tailwind background class for the icon tile
  summary: string;
  details: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: "health",
    name: "Health Insurance",
    icon: HeartPulse,
    tint: "bg-sage/60",
    summary:
      "Help with choosing health cover for you and your family, explained in plain language.",
    details:
      "Medical costs can be unpredictable. We help you understand the health insurance options available so you can choose cover that suits your family’s needs.",
    points: [
      "Individuals and families",
      "Parents and senior family members",
      "Guidance on understanding a plan before you buy",
    ],
  },
  {
    id: "life",
    name: "Life Insurance",
    icon: Umbrella,
    tint: "bg-mist/60",
    summary:
      "Financial security for the people who depend on you, now and in the future.",
    details:
      "Life insurance is about making sure your loved ones are financially supported. We help you understand the types of plans available and what may suit your situation.",
    points: [
      "Protection for your family’s future",
      "Planning for long-term goals",
      "Help comparing suitable plan options",
    ],
  },
  {
    id: "motor",
    name: "Motor Insurance",
    icon: Car,
    tint: "bg-gold/35",
    summary:
      "Cover for your vehicle on the road, from everyday rides to business vehicles.",
    details:
      "Whether it is a bike, a family car or a vehicle used for business, we help you with motor insurance for the following vehicle types.",
    points: [
      "Two-wheeler insurance",
      "Four-wheeler insurance",
      "Private car insurance",
      "Taxi insurance",
      "Commercial vehicle insurance",
    ],
  },
  {
    id: "fire",
    name: "Fire Insurance",
    icon: Flame,
    tint: "bg-sand",
    summary:
      "Protection for homes, shops and offices against loss or damage from fire-related risks.",
    details:
      "Fire can cause serious loss to property and stock. We help homeowners and business owners understand fire insurance options for their premises.",
    points: [
      "Homes and residential buildings",
      "Shops, offices and godowns",
      "Stock, machinery and equipment",
    ],
  },
  {
    id: "worker",
    name: "Worker Insurance",
    icon: HardHat,
    tint: "bg-sage/60",
    summary:
      "Insurance options that help businesses look after the people who work for them.",
    details:
      "If your business depends on employees or site workers, we can help you explore insurance options designed for workforce protection.",
    points: [
      "Businesses with staff or site workers",
      "Factories, workshops and shops",
      "Guidance on suitable options",
    ],
  },
  {
    id: "transit",
    name: "Transit Insurance",
    icon: Truck,
    tint: "bg-mist/60",
    summary:
      "Cover for goods while they are being moved from one place to another.",
    details:
      "Goods can be damaged or lost while in transit. We help traders and transporters understand transit insurance for their consignments.",
    points: [
      "Goods moving by road, rail or air",
      "Traders and transporters",
      "Help understanding what is covered",
    ],
  },
  {
    id: "marine",
    name: "Marine Insurance",
    icon: Ship,
    tint: "bg-gold/35",
    summary:
      "Protection for cargo and shipments travelling by sea.",
    details:
      "For businesses that import, export or ship goods by sea, marine insurance can help protect cargo. We guide you through the options.",
    points: [
      "Cargo moving by sea",
      "Importers and exporters",
      "Traders shipping goods",
    ],
  },
  {
    id: "investment",
    name: "Investment Plans",
    icon: TrendingUp,
    tint: "bg-sand",
    summary:
      "Plans to help you save and plan for goals like education, retirement and family needs.",
    details:
      "We help you understand investment-linked and savings plans so you can plan for your goals. Returns are not guaranteed and depend on the plan and market conditions.",
    points: [
      "Saving for future goals",
      "Long-term financial planning",
      "Returns are not guaranteed",
    ],
  },
  {
    id: "other",
    name: "Other Insurance Services",
    icon: ShieldPlus,
    tint: "bg-sage/60",
    summary:
      "Looking for something else? Tell us what you want to protect and we will guide you.",
    details:
      "If your requirement is not listed, get in touch. We will understand what you need and help you explore suitable insurance options.",
    points: [
      "Tell us your requirement",
      "We guide you to suitable options",
    ],
  },
];
export const getService = (id: string) =>
  SERVICES.find((service) => service.id === id);
