"use client";

import type { ReactNode } from "react";
import { useEnquiry } from "@/components/forms/EnquiryProvider";

type EnquiryButtonProps = {
  children: ReactNode;
  className?: string;
  service?: string;
};

export default function EnquiryButton({
  children,
  className,
  service,
}: EnquiryButtonProps) {
  const { openEnquiry } = useEnquiry();

  return (
    <button type="button" onClick={() => openEnquiry(service)} className={className}>
      {children}
    </button>
  );
}