export const MAX_MEMBERS = 10;
export const MESSAGE_MAX = 1000;

type ServiceGroup = { label?: string; options: string[] };

export const SERVICE_GROUPS: ServiceGroup[] = [
  { options: ["Health Insurance", "Life Insurance"] },
  {
    label: "Motor Insurance",
    options: [
      "Motor Insurance (not sure which type)",
      "Two-Wheeler Insurance",
      "Four-Wheeler Insurance",
      "Private Car Insurance",
      "Taxi Insurance",
      "Commercial Vehicle Insurance",
    ],
  },
  {
    options: [
      "Fire Insurance",
      "Worker Insurance",
      "Transit Insurance",
      "Marine Insurance",
      "Investment Plans",
      "Other",
    ],
  },
];

export const SERVICE_OPTIONS: string[] = SERVICE_GROUPS.flatMap(
  (group) => group.options
);

/** Which dropdown option each service card pre-selects */
export const SERVICE_TO_OPTION: Record<string, string> = {
  health: "Health Insurance",
  life: "Life Insurance",
  motor: "Motor Insurance (not sure which type)",
  fire: "Fire Insurance",
  worker: "Worker Insurance",
  transit: "Transit Insurance",
  marine: "Marine Insurance",
  investment: "Investment Plans",
  other: "Other",
};

// "Rahul Joshi – 35 yrs; Priya Joshi – 32 yrs"
export function formatMembers(
  members: { name: string; age: number | string }[]
): string {
  return members.map((m) => `${m.name} – ${m.age} yrs`).join("; ");
}