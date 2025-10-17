"use client";
import React, { useEffect } from "react";

export default function SocialBar() {
  useEffect(() => {
    // Dynamically inject Adsterra script after component mounts
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//thickmaggot.com/86/66/29/86662970558cba1c1f19dc1fda43e2f9.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Social bar doesn't render any visible DOM by itself
}
