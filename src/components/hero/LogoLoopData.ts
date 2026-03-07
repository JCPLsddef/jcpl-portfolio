// Centralized logo data for LogoLoop
export type LogoWithIndustry = {
  src: string;
  alt?: string;
  name: string;
  city: string;
  service: string;
  industryLabel: string;
};

export const caseStudyLogos: LogoWithIndustry[] = [
  {
    src: "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/ChatGPT_Image_6_janv._2026_17_33_55.png?v=1767738915",
    alt: "Elite Barbershop",
    name: "Elite Barbershop",
    city: "Montreal, QC",
    service: "Barbershop",
    industryLabel: "BARBERSHOP · MONTREAL",
  },
  {
    src: "https://static.wixstatic.com/media/62f926_58438d6814374c1b81421512d6762ad0~mv2.png",
    alt: "Absolute Painting",
    name: "Absolute Painting",
    city: "Dallas, TX",
    service: "Painting Contractor",
    industryLabel: "PAINTING · DFW",
  },
  {
    src: "https://static.wixstatic.com/media/62f926_26ca6fb6d443456c94fab653adce03cc~mv2.png",
    alt: "Culture Barbershop",
    name: "Culture Barbershop",
    city: "Montreal, QC",
    service: "Barbershop",
    industryLabel: "BARBERSHOP · MONTREAL",
  },
  {
    src: "https://static.wixstatic.com/media/62f926_5c14016a71f74c77a7eedfa86309eadd~mv2.jpg",
    alt: "Triple W Rentals",
    name: "Triple W Rentals",
    city: "Texas",
    service: "RV Rental",
    industryLabel: "RV RENTAL · TEXAS",
  },
  {
    src: "https://static.wixstatic.com/media/62f926_b2db4e8f4d74470fb8848ee6183aecde~mv2.png",
    alt: "Centre Dentaire Saint-Élzéar",
    name: "Centre Dentaire Saint-Élzéar",
    city: "Montreal, QC",
    service: "Dental Clinic",
    industryLabel: "DENTAL · QUEBEC",
  },
];
