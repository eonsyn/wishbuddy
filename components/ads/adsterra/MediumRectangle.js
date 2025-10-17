"use client";
import React, { useEffect, useRef } from "react";

export default function MediumRectangle() {
  const adSlotRef = useRef(null);

  useEffect(() => {
    // Clean existing content before injecting
    if (adSlotRef.current) adSlotRef.current.innerHTML = "";

    // Create and inject ad script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//thickmaggot.com/937e37c898cccaba92478ae90b47d122/invoke.js";
    script.async = true;

    // Adsterra requires global atOptions before loading script
    window.atOptions = {
      key: "937e37c898cccaba92478ae90b47d122",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    // Append script inside ad container
    if (adSlotRef.current) adSlotRef.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (adSlotRef.current) adSlotRef.current.innerHTML = "";
      delete window.atOptions;
    };
  }, []);

  return (
    <div className="flex justify-center my-6">
      <div
        className="relative bg-gray-100 border border-gray-300 rounded-lg p-2 shadow-sm text-center"
        style={{
          width: 320,
          overflow: "hidden",
        }}
      >
        <p className="text-[11px] text-gray-500 mb-1 font-medium tracking-wide uppercase">
          Advertisement
        </p>

        <div
          ref={adSlotRef}
          id="ad-slot"
          style={{
            width: 300,
            height: 250,
            margin: "0 auto",
            backgroundColor: "#f9f9f9",
            borderRadius: "4px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#777",
            fontSize: "0.85rem",
          }}
        >
          Loading ads...
        </div>
      </div>
    </div>
  );
}
