import type { Metadata } from "next";

let domain = "https://www.umerkhalid.co";

export const metadata: Metadata = {
  title: {
    default: `Umer Khalid`,
    template: `%s | Umer Khalid`,
  },
  description: "Experienced product designer with 6+ years in the industry, specializing in clean, modern, and functional UI/UX using Figma. Currently working at GammaLabs, delivering aesthetic and practical design solutions.",
  keywords: [
    "Product Designer",
    "UI UX Expert",
    "Figma Designer",
    "Modern Design",
    "Functional UI",
    "User Experience",
    "Clean UI",
    "Design Systems",
    "GammaLabs",
    "6 Years Design Experience"
  ],
  verification: {
    google: "uuRnnDX1kj_DPibGNM5EewxjuzHfUZrg6zH2IZzELSE",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: {
      default: "Umer Khalid",
      template: `%s | Umer Khalid`,
    },
    description: "Experienced product designer with 6+ years in the industry, specializing in clean, modern, and functional UI/UX using Figma. Currently working at GammaLabs.",
    url: `${domain}`,
    siteName: "Umer Khalid",
    images: [
      {
        url: `${domain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Umer Khalid - Product Designer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umer Khalid",
    description: "6+ years of product design expertise using Figma. Currently at GammaLabs crafting clean, modern and functional interfaces.",
    images: `${domain}/og-image.png`,
  },
  alternates: {
    canonical: `${domain}`,
  },
};
