"use client";
import React, { useEffect, useRef } from "react";

export default function MediumRectangle() {
  const adRef = useRef(null);

  useEffect(() => {
    // Create and append the first <script> block
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key': '937e37c898cccaba92478ae90b47d122',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    `;

    // Create and append the second <script> (external file)
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//thickmaggot.com/937e37c898cccaba92478ae90b47d122/invoke.js";
    script2.async = true;

    // Inject into the ad container
    if (adRef.current) {
      adRef.current.appendChild(script1);
      adRef.current.appendChild(script2);
    }

    // Cleanup on unmount
    return () => {
      if (adRef.current) adRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="flex justify-center my-4">
      {/* This div will hold the ad */}
      <div ref={adRef} id="ad-container" style={{ width: 300, height: 250 }} />
    </div>
  );
}
