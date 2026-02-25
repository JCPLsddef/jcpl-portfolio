export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  websiteUrl: string | null;
  logoUrl: string;
  metricsImageUrl?: string;
  caseStudySlug: string;
  situation: string;
  deliverables: string[];
  inProgress?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "elite-barbershop",
    title: "Elite Barbershop",
    industry: "PREMIUM BARBERSHOP",
    outcome: "90 new clients acquired in the first 90 days. Full acquisition system built from scratch.",
    metrics: [
      { label: "New clients", value: "90" },
      { label: "Timeframe", value: "90 days" },
    ],
    websiteUrl: "https://elitebyhadi.com/fr/",
    logoUrl:
      "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/ChatGPT_Image_6_janv._2026_17_33_55.png?v=1767738915",
    caseStudySlug: "elite-barbershop",
    inProgress: false,
    situation:
      "Elite Barbershop had the craft but zero online presence. No website, no discoverability, no way for new clients to find them. The goal was to build a full custom digital system that matched the premium quality of the service and turned online search into booked appointments.",
    deliverables: [
      "Custom conversion-engineered website",
      "Google Ads campaign with local intent targeting",
      "Professional brand positioning and copy",
      "GA4 tracking and event setup",
    ],
  },
  {
    id: "absolute-painting",
    title: "Absolute Painting",
    industry: "HOME SERVICES",
    outcome: "Full growth system live. Google Ads and conversion website deployed. Performance data compounding.",
    metrics: [],
    websiteUrl: "https://absolutepainting.vercel.app/quote",
    logoUrl:
      "https://static.wixstatic.com/media/62f926_58438d6814374c1b81421512d6762ad0~mv2.png",
    caseStudySlug: "absolute-painting",
    inProgress: true,
    situation:
      "Absolute Painting was generating work through word of mouth only. No structured funnel, no way to capture intent from homeowners actively searching for painters. A conversion website and quote funnel were built and launched last week. Performance data is currently being collected.",
    deliverables: [
      "Custom conversion website with quote funnel",
      "Google Ads campaign targeting homeowner search intent",
      "Landing pages per service and location",
      "GA4 + conversion tracking setup",
    ],
  },
  {
    id: "culture-barbershop",
    title: "Culture Barbershop",
    industry: "BARBERSHOP, MONTREAL",
    outcome: "Premium conversion website built. Online presence established in a competitive market.",
    metrics: [
      { label: "Deliverable", value: "Website" },
      { label: "Market", value: "Montreal" },
    ],
    websiteUrl: "https://culturemtl.ca",
    logoUrl:
  "https://static.wixstatic.com/media/62f926_26ca6fb6d443456c94fab653adce03cc~mv2.png",
    caseStudySlug: "culture-barbershop",
    inProgress: false,
    situation:
      "Culture Barbershop needed a digital presence that matched their identity and reputation in the Montreal market. The engagement focused on building a custom website with strong brand positioning. Paid acquisition to follow.",
    deliverables: [
      "Custom conversion-engineered website",
      "Brand positioning and copy",
      "Mobile-optimized booking flow",
      "Performance tracking setup",
    ],
  },
  {
    id: "triple-w-rentals",
    title: "Triple W Rentals",
    industry: "RV RENTAL, TEXAS",
    outcome:
  "$41,084.85 in revenue generated in month one. $900 in total ad spend.",
    metrics: [
  { label: "Revenue", value: "$41,084.85" },
      { label: "Ad spend", value: "$900" },
      { label: "ROAS", value: "33x" },
      { label: "Timeline", value: "30 days" },
    ],
    websiteUrl: null,
    logoUrl:
      "https://static.wixstatic.com/media/62f926_5c14016a71f74c77a7eedfa86309eadd~mv2.jpg",
    metricsImageUrl:
      "https://static.wixstatic.com/media/62f926_5c7a609ac5c143e48028810fda21af82~mv2.png",
    caseStudySlug: "triple-w-rentals",
    inProgress: false,
    situation:
      "Triple W Rentals had vehicles available but zero online acquisition. Revenue was entirely referral-dependent and unpredictable. The Texas RV rental market had strong search demand that was completely untapped. A full Google Ads funnel was built from scratch and deployed within weeks.",
    deliverables: [
      "Google Ads funnel with RV rental intent keywords",
      "Conversion landing pages optimized for bookings",
      "Automated booking qualification flow",
      "GA4 + Google Ads conversion tracking",
    ],
  },
  {
    id: "centre-dentaire-saint-elzear",
    title: "Centre Dentaire Saint-Élzéar",
    industry: "DENTAL CLINIC",
    outcome: "Custom conversion website built. Patient acquisition funnel live and running.",
    metrics: [
      { label: "Deliverable", value: "Website" },
      { label: "Funnel", value: "Ads to Booking Funnel" },
    ],
    websiteUrl: "https://as.centredentairese.com",
    logoUrl:
  "https://static.wixstatic.com/media/62f926_b2db4e8f4d74470fb8848ee6183aecde~mv2.png",
    caseStudySlug: "centre-dentaire-saint-elzear",
    inProgress: false,
    situation:
      "Centre Dentaire Saint-Élzéar needed a professional online presence that would attract new patients and convert search intent into booked appointments. The engagement focused on building a premium custom website with a patient acquisition funnel. Performance data to follow.",
    deliverables: [
      "Custom patient acquisition website",
      "Google Ads targeting high-intent dental queries",
      "Booking flow optimization",
      "Conversion tracking and performance setup",
    ],
  },
];
