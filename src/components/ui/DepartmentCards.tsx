import { Mail, Phone } from "lucide-react";
import { DEPARTMENTS, formatPhone, phoneHref } from "@/lib/site";

type DepartmentCardsProps = { layout?: "grid" | "stack" };

export default function DepartmentCards({
  layout = "grid",
}: DepartmentCardsProps) {
  return (
    <ul
      className={
        layout === "grid"
          ? "grid gap-3 sm:grid-cols-2"
          : "space-y-3"
      }
    >
      {DEPARTMENTS.map((dept) => (
        <li
          key={dept.id}
          className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/5"
        >
          <p className="font-display text-base text-ink">{dept.label}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-charcoal/70">
            {dept.description}
          </p>
          <a
            href={phoneHref(dept.phone)}
            className="mt-3 flex items-center gap-2 text-sm font-medium text-ink transition hover:text-bronze"
          >
            <Phone size={15} className="shrink-0 text-bronze" />
            {formatPhone(dept.phone)}
          </a>
          <a
            href={`mailto:${dept.email}`}
            className="mt-1.5 flex items-center gap-2 break-all text-xs text-charcoal/80 transition hover:text-ink"
          >
            <Mail size={15} className="shrink-0 text-bronze" />
            {dept.email}
          </a>
        </li>
      ))}
    </ul>
  );
}
