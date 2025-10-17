import React from "react";
import Link from "next/link";
import Image from "next/image";
import LightDeepak from "@/components/diwali/LightDeepak";

export const revalidate = 60; // Revalidate every 60s
export const dynamic = "force-dynamic"; // Prevent build-time fetch failures

// 🪔 Pre-generate static paths safely
export async function generateStaticParams() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      process.env.VERCEL_URL ||
      "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/ai/diwali`, {
      next: { revalidate: 60 },
    });

    // If the fetch fails or returns non-JSON, just skip
    if (!res.ok) return [];
    const data = await res.json();

    if (!data.success || !data.data) return [];

    return data.data.map((wish) => ({ id: wish._id }));
  } catch (error) {
    console.error("❌ generateStaticParams error:", error);
    return [];
  }
}

// 🪔 Dynamic Metadata
// 🪔 Dynamic Metadata for each Diwali wish
export async function generateMetadata({ params }) {
  try {
    const { id } = params;
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      process.env.VERCEL_URL ||
      "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/ai/diwali?id=${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return { title: "Diwali Wish Not Found" };

    const data = await res.json();
    if (!data.success || !data.data)
      return { title: "Diwali Wish Not Found" };

    const wish = data.data;

    return {
      title: `Diwali Wish for ${wish.name} | WishBuddy`,
      description: `${wish.wisher} sends a heartfelt Diwali greeting to ${wish.name}. Create and share personalized Diwali wishes online with WishBuddy.`,
      keywords: "Diwali wishes, personalized Diwali messages, send Diwali greetings, festival of lights, WishBuddy, create Diwali wishes online, festive greetings, Diwali messages for friends, Diwali messages for family",
      author: "WishBuddy Team",
      openGraph: {
        title: `WishBuddy - Diwali Wish for ${wish.name}`,
        description: `${wish.wisher} sends warm Diwali greetings to ${wish.name}. Create your personalized wishes online.`,
        url: `${baseUrl}/diwali/${wish._id}`,
        siteName: "WishBuddy",
        images: [
          {
            url: `/diwali/${wish.type}.png`,
            width: 1200,
            height: 630,
            alt: `Diwali wish image for ${wish.name}`,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `WishBuddy - Diwali Wish for ${wish.name}`,
        description: `${wish.wisher} sends warm Diwali greetings to ${wish.name}.`,
        images: [`/diwali/${wish.type}.png`],
        creator: "@WishBuddy",
      },
    };
  } catch (error) {
    console.error("❌ generateMetadata error:", error);
    return { title: "Diwali Wish Not Found" };
  }
}


// 🪔 Page Component
export default async function Page({ params }) {
  const { id } = params;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  let data;
  try {
    const res = await fetch(`${baseUrl}/api/ai/diwali?id=${id}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch wish data");
    data = await res.json();
  } catch (error) {
    console.error("❌ Wish fetch failed:", error);
    data = { success: false };
  }

  if (!data.success || !data.data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
        <div className="bg-white/80 shadow-lg rounded-2xl p-8 w-full md:max-w-sm">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Wish not found 😢
          </h1>
          <p className="text-gray-600">
            {data.error || "The wish you’re looking for doesn’t exist."}
          </p>
          <Link
            href="/diwali"
            className="mt-4 inline-block px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            Create a new wish
          </Link>
        </div>
      </div>
    );
  }

  const wish = data.data;

  // Safely render bold sections (*text*)
  const formattedWishParts = wish.generatedWish
    .split(/(\*.*?\*)/g)
    .map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const text = part.slice(1, -1);
        return (
          <strong key={index} className="font-semibold text-orange-800">
            {text}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-6 py-10 bg-gradient-to-br from-orange-100 via-yellow-50 to-white">
      {/* Floating Interactive Flame */}
      <LightDeepak />

      {/* Wish Card */}
      <div className="relative w-full   md:max-w-[80%] md:bg-white/90 md:backdrop-blur-xl md:shadow-2xl rounded-3xl px-2 py-10 text-center md:border border-orange-200">
        {/* Title */}
        <h1 className="text-4xl capitalize font-extrabold text-orange-700 mb-6">
          {wish.name} ko Diwali Wish
        </h1>

        {/* Wish Image */}
        <div className="h-52 mb-3 rounded-2xl w-full overflow-hidden">
          <Image
            src={`/diwali/${wish.type}.png`}
            alt={`${wish.type} Diwali illustration`}
            width={800}
            height={400}
            className="object-cover w-full h-full scale-105"
            priority
          />
        </div>

        {/* Message */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-gray-800 font-medium leading-relaxed text-left shadow-inner">
          {formattedWishParts}
        </div>

        {/* Wisher Info */}
        <p className="text-gray-600 italic mb-6 text-lg text-end">
          By - {wish.wisher}
        </p>
      </div>

      {/* Button */}
      <div className="mt-3 flex justify-center">
        <Link
          href="/diwali"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse"
        >
          🪔 Create a wish for your's friend
        </Link>
      </div>
    </div>
  );
}
