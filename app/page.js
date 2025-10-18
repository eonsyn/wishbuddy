import AllCategories from "@/components/landingpage/AllCategories";
import { ChevronsDown } from "lucide-react";
import Faq from "@/components/landingpage/Faq";
import Image from "next/image";
import Link from "next/link";
import MediumRectangle from "@/components/ads/adsterra/MediumRectangle";
export const metadata = {
  title: "WishBuddy",
  description: "WishBuddy lets you create and share unique, personalized wishes for birthdays, Diwali, anniversaries, festivals, and special occasions. Celebrate every moment with heartfelt messages and greetings online.",
};

export default function Home() {


  return (
    <div className=" w-full bg-amber-100 relative overflow-hidden">
      {/* Grid Background */}
      
      <div
        className="absolute animate-pulse  inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to right, 
              rgba(0,0,0,0.05) 0px, 
              rgba(0,0,0,0.05) 2px, 
              transparent 1px, 
              transparent 60px
            ),
            repeating-linear-gradient(
              to bottom, 
              rgba(0,0,0,0.05) 0px, 
              rgba(0,0,0,0.05) 2px, 
              transparent 1px, 
              transparent 60px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div className="overflow-hidden h-screen absolute w-full flex items-center justify-center">

        <div className="absolute  blur-2xl bg-gradient-to-t from-amber-100 animate-pulse to-red-400 rounded-t-full  bottom-0 w-[80vw] h-[80vh] opacity-70 ">
        </div>

      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen w-full p-4 text-center  ">
        <h1 className="text-4xl font-extrabold text-black uppercase w-full md:w-1/2 tracking-wider">The Smartest, Funniest Way to Send a Wish.
        </h1>
        <Image
          src="/landingpage.png"
          alt="Illustration showing people exchanging fun personalized wishes, representing WishBuddy"
          width={800}        // recommended width
          height={500}       // recommended height
          className="w-full md:hidden rounded-2xl my-2 max-w-4xl mx-auto object-contain"
          priority           // optional: loads immediately for LCP
        />
        <p className="  text-lg text-gray-700 max-w-xl">
          Generate funny, dark, or wholesome wishes instantly
        </p>
        <div className="mt-4 flex text-sm font-semibold text-black  gap-1 ">
          <Link href='/diwali'>
          <span className="px-2 w-32 text-center rounded-full shadow py-1 bg-green-300 ">Diwali Wish</span>
          </Link>
        <Link
        href='https://dowryai.netlify.app'>
        <span className="px-2 py-1 rounded-full w-32 text-center shadow bg-yellow-200">Check Dowry</span>
        
        </Link>
          </div>
        <div className="flex flex-col items-center mt-12 animate-bounce text-gray-700">
          <ChevronsDown className="w-8 h-8 text-orange-500" />
          <span className="mt-2 text-sm font-medium">Scroll down</span>
        </div>
      </div>
      <AllCategories />
      <Faq/>
    </div>
  );
}
