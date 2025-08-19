import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import AnimatedButton from "../Layout/AnimatedButton";

const CategoryButton = () => {
  // Animation controls for triggering animations manually
  const containerControls = useAnimationControls();
  const buttonControls = useAnimationControls();
  const hasAnimatedOnce = useRef(false);

  
  // Refs for tracking component visibility
  const containerRef = useRef(null);
  const wasOutOfView = useRef(false);
  
  // Categories with emojis
  const categories = [
    "🧠 Brand Strategy & Positioning",
    "📊 Branding Deck",
    "✒️ Logo Design",
    "📦 Packaging Design",
    "🚀 Compaign Branding & Direction",
    "👕 Merchandise Production",
    "🖨️ Print Collateral",
    "🎨 Artist Collaboration",
    "📸 Content Creation"
  ];

  // Function to run the animation sequence
  const runAnimationSequence = async () => {
    await containerControls.start("visible");
    await buttonControls.start("visible");
  };
  
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !hasAnimatedOnce.current) {
        hasAnimatedOnce.current = true;
        runAnimationSequence();
      }
    },
    {
      threshold: 0.25,
      rootMargin: "-100px 0px"
    }
  );

  if (containerRef.current) {
    observer.observe(containerRef.current);
  }

  return () => {
    observer.disconnect();
    containerControls.stop();
    buttonControls.stop();
  };
}, []);


  // Animation variants
  const containerVariants = {
    hidden: { 
      x: -100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" }
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: {
      rotateY: 90,
      opacity: 0,
      transition: { duration: 0.3 }
    },
    visible: (i) => ({
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: i * 0.15,
        duration: 0.8
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(255, 102, 0, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className="w-[95%] mx-auto mt-3 flex justify-center gap-4 flex-wrap relative mb-8"
      variants={containerVariants}
      initial="hidden"
      animate={containerControls}
    >
      {categories.map((category, index) => (
       <AnimatedButton >
          {category}
       </AnimatedButton>
      ))}
    </motion.div>
  );
};

export default CategoryButton;
