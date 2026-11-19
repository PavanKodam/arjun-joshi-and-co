"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Modal from "@/components/ui/Modal";
import EnquiryForm from "@/components/forms/EnquiryForm";
type EnquiryContextValue = {
  /** Open the enquiry pop-up. Pass a dropdown option to pre-select it. */
  openEnquiry: (service?: string) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry(): EnquiryContextValue {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  }
  return context;
}

export default function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");
  const [formKey, setFormKey] = useState(0);

  const openEnquiry = useCallback((preselected = "") => {
    setService(preselected);
    setFormKey((key) => key + 1); // a fresh form each time it opens
    setOpen(true);
  }, []);
  const closeEnquiry = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openEnquiry }), [openEnquiry]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <Modal
        open={open}
        onClose={closeEnquiry}
        title="Insurance enquiry form"
        wide
      >
        <EnquiryForm
          key={formKey}
          initialService={service}
          onClose={closeEnquiry}
        />
      </Modal>
    </EnquiryContext.Provider>
  );
}