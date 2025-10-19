// app/layout.js
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Script from "next/script";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "WishBuddy - Create Personalized Wishes for Birthdays, Festivals & More",
  description:
    "WishBuddy lets you create and share unique, personalized wishes for birthdays, Diwali, anniversaries, festivals, and special occasions. Celebrate every moment with heartfelt messages and greetings online.",
  keywords:
    "WishBuddy, personalized messages, birthday wishes, Diwali wishes, festival greetings, anniversary wishes, send greetings online, create personalized wishes, special occasion messages",
  author: "WishBuddy Team",
  openGraph: {
    title: "WishBuddy - Personalized Wishes for Every Occasion",
    description:
      "Create and share unique wishes for birthdays, festivals, anniversaries, and more with WishBuddy. Make every celebration extra special online!",
    url: "https://wishbuddy.netlify.app",
    siteName: "WishBuddy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WishBuddy - Personalized Wishes for Every Occasion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WishBuddy - Personalized Wishes for Every Occasion",
    description:
      "Send creative and heartfelt wishes for birthdays, festivals, anniversaries, and more with WishBuddy.",
    images: ["/og-image.png"],
    creator: "@WishBuddy",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-2404358914933411"
        />
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="a519RGXXnU8_HDFGvb_9NLkro6BAy_BnCXPq8fhFTkY"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VQX3DX6BVX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VQX3DX6BVX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Google SWG Basic Subscriptions (Reader Revenue Manager) */}
        <Script
          async
          type="application/javascript"
          src="https://news.google.com/swg/js/v1/swg-basic.js"
        />
        <Script id="swg-init" strategy="afterInteractive">
          {`
            (self.SWG_BASIC = self.SWG_BASIC || []).push(basicSubscriptions => {
              basicSubscriptions.init({
                type: "NewsArticle",
                isPartOfType: ["Product"],
                isPartOfProductId: "CAowzvvBDA:openaccess",
                clientOptions: { theme: "light", lang: "en" },
              });
            });
          `}
        </Script>
      </head>

      <body>
        {/* Middle-top toaster */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
          }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
