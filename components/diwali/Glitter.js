"use client";
import React, { useEffect, useRef } from "react";
import Fireworks from "fireworks-js";

export default function Glitter() {
  const containerRef = useRef(null);
 
  useEffect(() => {
    if (!containerRef.current) return;

    const fireworks = new Fireworks(containerRef.current, {
      hue: { min: 0, max: 360 },
      delay: { min: 30, max: 50 },
      speed: 1,
      acceleration: 1.0,
      friction: 0.97,
      gravity: 1.0,
      particles: 100,
      trace: 3,
      explosion: 1,
      autoresize: true,
      brightness: { min: 50, max: 80, decay: { min: 0.015, max: 0.03 } },
      boundaries: { x: 50, y: 50, width: containerRef.current.clientWidth, height: containerRef.current.clientHeight },
      sound: { enable: true, files: ['https://fireworks.js.org/sounds/explosion0.mp3'], volume: { min: 2, max: 4 } },
    });

    fireworks.start();

    return () => fireworks.stop(); // clean up on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="animate-pulse"
      id="fireworks-container"
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
