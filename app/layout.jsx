import "./globals.css";
import Script from "next/script";

const SITE_URL = "https://ai-powered-note-manager.vercel.app";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: "AI Notes Manager",

  description:
    "Organize and manage your notes with AI-powered efficiency.",

  keywords: [
    "notes app",
    "AI notes",
    "Next.js app",
    "productivity",
    "notebooks",
    "AI-powered notebook manager for students",
    "best notes app for productivity and organization",
    "Next.js AI app to manage personal and work notebooks",
    "collaborative notebook tool with AI search",
    "digital notebook manager with smart features",
  ],

  authors: [
    {
      name: "Abhay Maurya",
      url: "https://abhaymaurya.vercel.app",
    },
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "AI Notes Manager",
    description:
      "Organize and manage your notes with AI-powered efficiency.",
    url: SITE_URL,
    siteName: "AI Notes Manager",
    images: [
      {
        url: `${SITE_URL}/preview.png`,
        width: 1200,
        height: 630,
        alt: "AI Notes Manager preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Notes Manager",
    description: "AI-powered notes app built with Next.js",
    images: [`${SITE_URL}/preview.png`],
    creator: "@yourtwitterhandle",
  },

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    google: " googlebb8dcfd303bf62ea.html",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        <main>{children}</main>
      </body>
    </html>
  );
}