export type FamilyMember = { name: string; age: string };

/** What the form holds while the visitor is typing */
export type EnquiryInput = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  members: FamilyMember[];
  message: string;
  consent: boolean;
  /** Hidden spam-trap field: real visitors leave it empty */
  website: string;
};

/** The cleaned, checked version we actually send */
export type EnquiryData = {
  name: string;
  phone: string; // 10 digits, without +91
  email: string;
  city: string;
  service: string;
  members: { name: string; age: number }[];
  message: string;
};

export type FieldName =
  | "name"
  | "phone"
  | "email"
  | "city"
  | "service"
  | "members"
  | "message"
  | "consent";

export type FieldErrors = Partial<Record<FieldName, string>>;