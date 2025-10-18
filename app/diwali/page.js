 
import React from "react";
 import HowItWork from "@/components/diwali/HowItWork";
import DiwaliForm from "@/components/diwali/DiwaliForm";
import Examples from "@/components/diwali/Examples";
import DiwaliFaq from "@/components/diwali/DiwaliFaq";
import SocialBar from "@/components/ads/adsterra/SocialBar";

export default function DiwaliPage() {
  
  return (
    <><div className=' pb-6 '>
    <DiwaliForm/>
    <HowItWork/>
    <Examples/>
    <DiwaliFaq/>
    </div>
    {/* <SocialBar/> */}
    </>
   
  );
}
