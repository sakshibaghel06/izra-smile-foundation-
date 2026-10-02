import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Carrot,
  HandHeart,
  HandHelping,
  Heart,
  HeartHandshake,
  PawPrint,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SupportArea = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export type Initiative = {
  category: string;
  title: string;
  description: string;
  image: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Our Work", href: "#support" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "Get Involved", href: "#involved" },
  { label: "Contact", href: "#contact" },
];

export const supportAreas: SupportArea[] = [
  {
    title: "Children & Education",
    description:
      "Supporting access to learning, care, and the basic conditions children need to grow with confidence.",
    icon: BookOpen,
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.07 AM (1).jpeg",
  },
  {
    title: "Women & Single Mothers",
    description:
      "Offering practical, empathetic support to women and families navigating essential day-to-day challenges.",
    icon: Users,
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.06 AM.jpeg",
  },
  {
    title: "Women Empowerment",
    description:
      "Supporting women by promoting dignity, confidence, opportunities, and greater participation in community life.",
    icon: HeartHandshake,
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.09 AM.jpeg",
  },
  {
    title: "People with Disabilities",
    description:
      "Promoting inclusion, care, and practical support so that every individual can live with dignity.",
    icon: HandHelping,
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.08 AM.jpeg",
  },
  {
    title: "Healthcare & Cancer Support",
    description:
      "Standing with individuals and families as they navigate medical needs, care, and recovery.",
    icon: Stethoscope,
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.11 AM.jpeg",
  },
  {
    title: "Vulnerable Families",
    description:
      "Assisting families facing hardship with care rooted in empathy, responsibility, and social support.",
    icon: ShieldCheck,
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.04 AM.jpeg",
  },
  {
    title: "Slum Education",
    description:
      "Supporting children in underserved communities by creating access to education, learning opportunities, and a better foundation for their future.",
    icon: Carrot,
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.12 AM.jpeg",
  },
  {
    title: "Animal Welfare",
    description:
      "Extending compassion toward street animals by supporting their basic welfare and care.",
    icon: PawPrint,
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.11 AM (1).jpeg",
  },
];

export const values = [
  { title: "Compassion", description: "Caring for people with empathy and humanity.", icon: HeartHandshake },
  { title: "Dignity", description: "Recognizing the worth of every individual.", icon: Heart },
  { title: "Responsibility", description: "Acting with care and accountability in service of others.", icon: BriefcaseBusiness },
  { title: "Transparency", description: "Building trust through honest and thoughtful action.", icon: Building2 },
  { title: "Community Participation", description: "Creating change through collective action and shared responsibility.", icon: HandHeart },
];

export const initiatives: Initiative[] = [
  {
    category: "Community Support",
    title: "Essential Care & Daily Needs",
    description:
      "Thoughtful support for families and individuals facing hardship through practical assistance and compassionate action.",
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.04 AM.jpeg",
  },
  {
    category: "Education & Care",
    title: "Children & Learning Support",
    description:
      "Promoting a safe and supportive environment where children can access the care and opportunities they deserve.",
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.07 AM (1).jpeg",
  },
  {
    category: "Health & Welfare",
    title: "Healthcare & Recovery Support",
    description:
      "Walking alongside people facing illness, disability, or medical challenges with empathy and practical care.",
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.11 AM.jpeg",
  },
  {
    category: "Community Action",
    title: "Collective Social Participation",
    description:
      "Encouraging communities to come together and contribute toward dignity, welfare, and meaningful change.",
    image: "/images/WhatsApp Image 2026-10-01 at 9.37.32 AM.jpeg",
  },
];

export const galleryItems: GalleryItem[] = [
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.04 AM.jpeg", alt: "Women in the foundation community support gathering", title: "Community care" },
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.05 AM (1).jpeg", alt: "Women actively participating in foundation activities", title: "Women support" },
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.06 AM.jpeg", alt: "Women and families holding support material", title: "Family support" },
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.07 AM (1).jpeg", alt: "Children learning and gathering in a classroom", title: "Learning support" },
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.09 AM (1).jpeg", alt: "Group of children together in a community setting", title: "Youth care" },
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.12 AM.jpeg", alt: "Schoolbag distribution and support initiative", title: "Essential support" },
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.32 AM.jpeg", alt: "Women holding support items together in a community scene", title: "Collective action" },
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.06 AM (2).jpeg", alt: "Volunteers and children gathered for a social care event", title: "Community engagement" },
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.11 AM.jpeg", alt: "Women taking part in a social welfare program", title: "Health and dignity" },
  { src: "/images/WhatsApp Image 2026-10-01 at 9.37.09 AM.jpeg", alt: "Children gathered in a support and learning environment", title: "Care and learning" },
];

export const visionPillars = [
  "Children",
  "Women & single mothers",
  "Elderly people",
  "People with disabilities",
  "People facing serious illnesses",
  "Vulnerable communities",
  "Street animals",
  "Community participation",
];

export const contactDetails = {
  address: "RZQ-210, Ground Floor, Khasra No. 33/16,\nNihal Vihar, Lucky Garden, Nangloi,\nNew Delhi – 110041",
  phone: "7068670845",
  email: "izrasmilefoundation@gmail.com",
  instagramHandle: "@izrasmile_foundation",
  instagramUrl: "https://www.instagram.com/izrasmile_foundation/",
};
