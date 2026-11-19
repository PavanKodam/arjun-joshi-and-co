import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  children,
}: PageHeroProps) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs];

  return (
    <section className="relative overflow-hidden bg-sand/70 pb-12 pt-24 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
      <div
        aria-hidden
        className="glow-gold pointer-events-none absolute -right-20 -top-10 h-80 w-80"
      />
      <div
        aria-hidden
        className="glow-sage pointer-events-none absolute -bottom-24 -left-16 h-72 w-72"
      />

      <div className="site-container relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-charcoal/70">
            {trail.map((crumb, index) => {
              const last = index === trail.length - 1;
              return (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <ChevronRight size={13} aria-hidden className="text-charcoal/40" />
                  )}
                  {crumb.href && !last ? (
                    <Link
                      href={crumb.href}
                      className="transition hover:text-ink hover:underline hover:decoration-gold hover:underline-offset-2"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current={last ? "page" : undefined} className={last ? "text-ink" : undefined}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-7 max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze sm:text-sm">
            <span aria-hidden className="h-px w-8 bg-bronze" />
            {eyebrow}
          </p>
          <h1 className="mt-3 text-balance font-display text-[2rem] leading-[1.1] text-ink sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-pretty text-sm leading-relaxed text-charcoal/80 sm:text-base">
              {description}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
