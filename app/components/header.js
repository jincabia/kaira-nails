"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExpanded(true);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ height: "100vh" }} // Start as full screen
      animate={{ height: isExpanded ? "100%" : "100vh" }} // Smoothly transition to full height
      transition={{ duration: 1.5, ease: "easeInOut" }} // Adjust timing
      className="overflow-hidden w-full flex items-center justify-center bg-[#FFE2F8]"
    >
      {/* Closing and Retracting Black Screen */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-black origin-bottom"
      />

      {/* Text Appears After Animation */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-3xl font-extrabold uppercase text-black relative py-2"
      >
        nailsx.kv
      </motion.h1>
     
    </motion.div>
  );
}
