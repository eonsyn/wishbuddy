"use client";
import React, { useEffect } from "react";

export default function SocialBar() {
  useEffect(() => {
    // Create the Adsterra script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//thickmaggot.com/86/66/29/86662970558cba1c1f19dc1fda43e2f9.js";
    script.async = true;

    // Insert it right before </body>
    const body = document.body;
    if (body && body.lastChild) {
      body.insertBefore(script, body.lastChild);
    } else {
      body.appendChild(script);
    }

    // Cleanup when unmounted (optional but clean)
    return () => {
      if (body.contains(script)) {
        body.removeChild(script);
      }
    };
  }, []);

  // No visible DOM — script loads externally
  return null;
}
