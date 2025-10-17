"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Glitter from "./Glitter";

export default function LightDeepak() {
  const [isLit, setIsLit] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);

  const handleDragEnd = (_, info) => {
    const inLightingZone =
      info.point.y > window.innerHeight / 2 - 150 &&
      info.point.y < window.innerHeight / 2 + 150;

    if (inLightingZone) {
      setIsLit(true);
      setTimeout(() => setFadeOut(true), 2500);
    }
  };

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          ref={constraintsRef}
          className={`fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden transition-colors duration-1000 ${
            isLit
              ? "bg-gradient-to-br from-yellow-100 via-orange-200 to-white"
              : "bg-black"
          }`}
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {isLit && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,0,0.4)_0%,transparent_70%)] pointer-events-none"
            />
          )}

          <Glitter />

          <motion.h1
            className={`text-5xl text-center font-extrabold mb-3 ${
              isLit ? "text-orange-700" : "text-yellow-100"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Happy Diwali
          </motion.h1>

          <motion.p
            className={`text-lg mb-6 ${
              isLit ? "text-orange-800" : "text-yellow-300"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isLit
              ? "You’ve lit the lamp of joy!"
              : "Light up this Diya with your flame"}
          </motion.p>

          {/* Diya */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            animate={{ scale: isLit ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src="/diya.png"
              alt="Diya"
              width={150}
              height={150}
              className="z-10"
            />

            {isLit && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, y: 25 }}
                transition={{ duration: 0.6 }}
                className="absolute top-0"
              >
                <motion.div
                  className="relative w-8 h-16 flex items-center justify-center"
                  animate={{
                    scaleY: [1, 1.1, 0.9, 1],
                    y: [0, -2, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                >
                  <div
                    className="absolute w-6 h-14 rounded-t-[60%] rounded-b-[50%] blur-md"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 25%, #ffb300 0%, #ff8000 70%, transparent 100%)",
                    }}
                  />
                  <div
                    className="absolute w-3 h-8 rounded-t-[70%] rounded-b-[50%] blur-[1px]"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 15%, #fff7b0 0%, #ffb347 70%, transparent 100%)",
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {/* Draggable Flame */}
          {!isLit && (
            <motion.div
              drag
              dragConstraints={constraintsRef}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, info) => {
                setIsDragging(false);
                handleDragEnd(e, info);
              }}
              whileDrag={{ scale: 1.2 }}
              className="absolute bottom-32 right-10 cursor-pointer flex flex-col items-center z-20"
            >
              <div className="relative w-12 h-20 flex items-end justify-center">
                <motion.div
                  className="absolute bottom-0 w-8 h-16 rounded-t-[60%] rounded-b-[50%] blur-md"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 25%, #ffae42 0%, #ff6a00 70%, transparent 100%)",
                  }}
                  animate={{
                    scaleY: [1, 1.05, 0.95, 1],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-0 w-4 h-10 rounded-t-[70%] rounded-b-[50%] blur-[1px]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 15%, #fff3a0 0%, #ffb300 70%, transparent 100%)",
                  }}
                  animate={{
                    scaleY: [1, 1.1, 0.9, 1],
                    opacity: [0.9, 1, 0.8, 0.9],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <motion.p
                initial={{ opacity: 1 }}
                animate={{ opacity: isDragging ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="text-center text-yellow-300 mt-2 text-sm font-medium animate-pulse"
              >
                Drag this flame to light the Diya
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
