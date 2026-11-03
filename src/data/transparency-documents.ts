export type TransparencyDocumentCategory =
  | "Legal Registration"
  | "Tax Exemption Certificates"
  | "Organizational Documents"
  | "Annual Reports"
  | "Audit Reports"
  | "Financial Statements";

export type TransparencyDocument = {
  id: string;
  title: string;
  category: TransparencyDocumentCategory;
  description: string;
  fileUrl: string;
  fileName: string;
  fileType: "PDF";
  displayOrder: number;
};

const sectionEightFileName = "SPICE + Part B_Section 8 License_AC1058993 (1).pdf";
const ngoDarpanFileName = "NGO darpan.pdf";
const registrationRecordFileName = "88305929031681_signed_unlocked.pdf";

export const transparencyDocuments = [
  {
    id: "section-8-license",
    title: "Section 8 Licence",
    category: "Legal Registration" as const,
    description:
      "Official Section 8 licence issued to Izra Smile Foundation by the Registrar of Companies, Central Registration Centre, Manesar.",
    fileUrl: `/documents/transparency/${encodeURIComponent(sectionEightFileName)}`,
    fileName: sectionEightFileName,
    fileType: "PDF" as const,
    displayOrder: 1,
  },
  {
    id: "ngo-darpan",
    title: "NGO Darpan",
    category: "Organizational Documents" as const,
    description: "Official NGO Darpan registration document available for public review.",
    fileUrl: `/documents/transparency/${encodeURIComponent(ngoDarpanFileName)}`,
    fileName: ngoDarpanFileName,
    fileType: "PDF" as const,
    displayOrder: 2,
  },
  {
    id: "registration-record",
    title: "Registration Record",
    category: "Legal Registration" as const,
    description: "Supporting registration document confirming the foundation's official status.",
    fileUrl: `/documents/transparency/${encodeURIComponent(registrationRecordFileName)}`,
    fileName: registrationRecordFileName,
    fileType: "PDF" as const,
    displayOrder: 3,
  },
].sort((first, second) => first.displayOrder - second.displayOrder) satisfies TransparencyDocument[];
