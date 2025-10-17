 
import React from "react";
 import HowItWork from "@/components/diwali/HowItWork";
import DiwaliForm from "@/components/diwali/DiwaliForm";
import Examples from "@/components/diwali/Examples";
import DiwaliFaq from "@/components/diwali/DiwaliFaq";
export default function DiwaliPage() {
  
  return (
   <div className='bg-gradient-to-br from-orange-100 via-yellow-50 to-white '>
    <DiwaliForm/>
    <HowItWork/>
    <Examples/>
    <DiwaliFaq/>
    </div>
  );
}
