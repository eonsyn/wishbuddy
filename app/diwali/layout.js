
import LightDeepak from "@/components/diwali/LightDeepak";
import Glitter from "@/components/diwali/Glitter";
import SocialBar from "@/components/ads/adsterra/SocialBar";
export const metadata = {
  title: "Diwali Wishes | Personalized Diwali Greetings - WishBuddy",
  description: "Create and send heartfelt, personalized Diwali wishes with WishBuddy. Celebrate the festival of lights by sending unique messages to friends, family, and loved ones online.",
  keywords: "Diwali wishes, personalized messages, send Diwali greetings, festival of lights, WishBuddy, create Diwali wishes online, festive greetings, Diwali messages for friends, Diwali messages for family",
  author: "WishBuddy Team",
  openGraph: {
    title: "WishBuddy - Personalized Diwali Wishes",
    description: "Celebrate Diwali with unique and heartfelt messages. Send personalized Diwali greetings to your loved ones online with WishBuddy.",
    url: "https://www.wishbuddy.com/diwali",
    siteName: "WishBuddy",
    images: [
      {
        url: "/diwali-og-image.png",
        width: 1200,
        height: 630,
        alt: "WishBuddy - Personalized Diwali Wishes",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WishBuddy - Personalized Diwali Wishes",
    description: "Send creative and heartfelt Diwali wishes to friends and family with WishBuddy.",
    images: ["/diwali-og-image.png"],
    creator: "@WishBuddy",
  },
};


export default function RootLayout({ children }) {
  return (
    <div className='bg-gradient-to-br from-orange-100 via-yellow-50 to-white w-screen min-h-screen pt-6'>
          
        {children} 
      </div>
  );
}
