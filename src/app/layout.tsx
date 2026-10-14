import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://ssba-enterprise.vercel.app";

export const metadata: Metadata = {
  title: "SSBA Enterprise – Software & IT Solutions | Biratnagar, Nepal",
  description:
    "SSBA Enterprise is an IT company based in Biratnagar, Nepal, building web platforms, mobile apps, IoT solutions and prototypes through a focused team covering project management, design, development and QA.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "SSBA Enterprise – Software & IT Solutions",
    description:
      "Web platforms, mobile apps and IoT prototypes built by a focused four-person team in Biratnagar, Nepal.",
    url: SITE_URL,
    siteName: "SSBA Enterprise",
    images: [
      {
        url: "/assets/images/SSBA-Logo.png",
        width: 1200,
        height: 630,
        alt: "SSBA Enterprise – Software & IT Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSBA Enterprise – Software & IT Solutions",
    description:
      "Web platforms, mobile apps and IoT prototypes built by a focused four-person team in Biratnagar, Nepal.",
    images: ["/assets/images/SSBA-Logo.png"],
  },
  icons: {
    icon: "/assets/images/SSBA-Logo.png",
    apple: "/assets/images/SSBA-Logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
