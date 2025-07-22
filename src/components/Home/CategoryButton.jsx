// import React from "react";

// const CategoryButton = () => {
//   return (
//     <div className=" w-[95%] mx-auto mt-3 flex justify-center gap-4 flex-wrap relative mb-8">
//       <button className="min-w-[287px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Brand Strategy & Positioning
//       </button>
//       <button className="min-w-[197px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Brand Consulting
//       </button>
//       <button className="min-w-[179px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Branding Deck
//       </button>
//       <button className="min-w-[159px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Logo Design
//       </button>
//       <button className="min-w-[203px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Packaging Design
//       </button>
//       <button className="min-w-[220px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Merchandise Design
//       </button>
//       <button className="min-w-[220px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Compaign Branding
//       </button>
//       <button className="min-w-[247px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Merchandise Production
//       </button>
//       <button className="min-w-[180px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Print Collateral
//       </button>
//       <button className="min-w-[217px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Artist Collaboration
//       </button>
//       <button className="min-w-[197px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition">
//         Content Creation
//       </button>
//     </div>
//   );
// };

// export default CategoryButton;














































// import React, { useEffect } from "react";
// import { motion, useAnimationControls } from "framer-motion";

// const CategoryButton = () => {
//   // Animation controls allow us to manually trigger animations
//   const containerControls = useAnimationControls();
//   const buttonControls = useAnimationControls();
  
//   // Categories array for easier management
//   const categories = [
//     "Brand Strategy & Positioning",
//     "Brand Consulting",
//     "Branding Deck",
//     "Logo Design",
//     "Packaging Design",
//     "Merchandise Design",
//     "Compaign Branding",
//     "Merchandise Production",
//     "Print Collateral",
//     "Artist Collaboration",
//     "Content Creation"
//   ];

//   // Animation sequence that repeats
//   useEffect(() => {
//     const runAnimationSequence = async () => {
//       // Start by animating the container in
//       await containerControls.start("visible");
      
//       // Then animate the buttons in one by one
//       await buttonControls.start("visible");
      
//       // Wait for 15 seconds before starting exit animations
//       await new Promise(resolve => setTimeout(resolve, 15000));
      
//       // Animate buttons out
//       await buttonControls.start("exit");
      
//       // Then animate the container out
//       await containerControls.start("hidden");
      
//       // Wait for 5 seconds before repeating the whole sequence
//       await new Promise(resolve => setTimeout(resolve, 5000));
      
//       // Restart the sequence
//       runAnimationSequence();
//     };
    
//     runAnimationSequence();
    
//     // Cleanup on component unmount
//     return () => {
//       containerControls.stop();
//       buttonControls.stop();
//     };
//   }, [containerControls, buttonControls]);

//   // Container slide animation
//   const containerVariants = {
//     hidden: { 
//       x: -100,
//       opacity: 0,
//       transition: {
//         duration: 1.2,
//         ease: "easeIn"
//       }
//     },
//     visible: { 
//       x: 0,
//       opacity: 1,
//       transition: { 
//         duration: 1.2,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Button flip animation variants - horizontal flip
//   const buttonVariants = {
//     hidden: {
//       rotateY: 90,
//       opacity: 0,
//       transition: {
//         duration: 0.5
//       }
//     },
//     visible: (i) => ({
//       rotateY: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 10,
//         delay: i * 0.15, // Staggered entry
//         duration: 0.8
//       }
//     }),
//     exit: (i) => ({
//       rotateY: -90,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         delay: (categories.length - i - 1) * 0.1 // Reverse exit order
//       }
//     }),
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 5px 10px rgba(255, 102, 0, 0.3)",
//       transition: { duration: 0.3 }
//     },
//     tap: {
//       scale: 0.95,
//       transition: { duration: 0.1 }
//     }
//   };

//   return (
//     <motion.div 
//       className="w-[95%] mx-auto mt-3 flex justify-center gap-4 flex-wrap relative mb-8"
//       variants={containerVariants}
//       initial="hidden"
//       animate={containerControls}
//     >
//       {categories.map((category, index) => (
//         <motion.button 
//           key={index}
//           className="min-w-[150px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition"
//           style={{ 
//             originY: 0.5,
//             perspective: "1000px",
//             transformStyle: "preserve-3d",
//             minWidth: category.length * 5 + 80 + "px"
//           }}
//           variants={buttonVariants}
//           custom={index}
//           initial="hidden"
//           animate={buttonControls}
//           whileHover="hover"
//           whileTap="tap"
//         >
//           {category}
//         </motion.button>
//       ))}
//     </motion.div>
//   );
// };

// export default CategoryButton;












































// import React from "react";
// import { motion } from "framer-motion";

// const CategoryButton = () => {
//   // Categories array
//   const categories = [
//     "🧠 Brand Strategy & Positioning",
//     // " Brand Consulting",
//     "📊 Branding Deck",
//     "✒️ Logo Design",
//     "📦 Packaging Design",
//     // "👕 Merchandise Design",
//     "🚀 Compaign Branding & Direction",
//     "👕 Merchandise Production",
//     "🖨️ Print Collateral",
//     "🎨 Artist Collaboration",
//     "📸 Content Creation"
//   ];

//   // Simplified container animation - only appears once
//   const containerVariants = {
//     hidden: { 
//       x: -50,
//       opacity: 0,
//     },
//     visible: { 
//       x: 0,
//       opacity: 1,
//       transition: { 
//         duration: 0.8,
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     }
//   };

//   // Button animation - only appears once with staggered timing
//   const buttonVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 5px 10px rgba(255, 102, 0, 0.3)",
//       transition: { duration: 0.2 }
//     },
//     tap: {
//       scale: 0.95
//     }
//   };

//   return (
//     <motion.div 
//       className="w-[95%] mx-auto mt-3 flex justify-center gap-4 flex-wrap relative mb-8"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {categories.map((category, index) => (
//         <motion.button 
//           key={index}
//           className="min-w-[150px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition"
//           style={{ 
//             minWidth: category.length * 5 + 80 + "px"
//           }}
//           variants={buttonVariants}
//           whileHover="hover"
//           whileTap="tap"
//         >
//           {category}
//         </motion.button>
//       ))}
//     </motion.div>
//   );
// };

// export default CategoryButton;

























































































// import React, { useEffect } from "react";
// import { motion, useAnimationControls } from "framer-motion";

// const CategoryButton = () => {
//   // Animation controls allow us to manually trigger animations
//   const containerControls = useAnimationControls();
//   const buttonControls = useAnimationControls();
  
//   // Updated categories with emojis
//   const categories = [
//     "🧠 Brand Strategy & Positioning",
//     "📊 Branding Deck",
//     "✒️ Logo Design",
//     "📦 Packaging Design",
//     "🚀 Compaign Branding & Direction",
//     "👕 Merchandise Production",
//     "🖨️ Print Collateral",
//     "🎨 Artist Collaboration",
//     "📸 Content Creation"
//   ];

//   // Simplified animation sequence that doesn't disappear
//   useEffect(() => {
//     const runAnimationSequence = async () => {
//       // Start by animating the container in
//       await containerControls.start("visible");
      
//       // Then animate the buttons in one by one
//       await buttonControls.start("visible");
      
//       // No exit animations or timeouts
//     };
    
//     runAnimationSequence();
    
//     // Cleanup on component unmount
//     return () => {
//       containerControls.stop();
//       buttonControls.stop();
//     };
//   }, [containerControls, buttonControls]);

//   // Container slide animation
//   const containerVariants = {
//     hidden: { 
//       x: -100,
//       opacity: 0,
//       transition: {
//         duration: 1.2,
//         ease: "easeIn"
//       }
//     },
//     visible: { 
//       x: 0,
//       opacity: 1,
//       transition: { 
//         duration: 1.2,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Button flip animation variants - horizontal flip
//   const buttonVariants = {
//     hidden: {
//       rotateY: 90,
//       opacity: 0,
//       transition: {
//         duration: 0.5
//       }
//     },
//     visible: (i) => ({
//       rotateY: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 10,
//         delay: i * 0.15, // Staggered entry
//         duration: 0.8
//       }
//     }),
//     // Exit animation removed
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 5px 10px rgba(255, 102, 0, 0.3)",
//       transition: { duration: 0.3 }
//     },
//     tap: {
//       scale: 0.95,
//       transition: { duration: 0.1 }
//     }
//   };

//   return (
//     <motion.div 
//       className="w-[95%] mx-auto mt-3 flex justify-center gap-4 flex-wrap relative mb-8"
//       variants={containerVariants}
//       initial="hidden"
//       animate={containerControls}
//     >
//       {categories.map((category, index) => (
//         <motion.button 
//           key={index}
//           className="min-w-[150px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition"
//           style={{ 
//             originY: 0.5,
//             perspective: "1000px",
//             transformStyle: "preserve-3d",
//             minWidth: category.length * 5 + 80 + "px"
//           }}
//           variants={buttonVariants}
//           custom={index}
//           initial="hidden"
//           animate={buttonControls}
//           whileHover="hover"
//           whileTap="tap"
//         >
//           {category}
//         </motion.button>
//       ))}
//     </motion.div>
//   );
// };

// export default CategoryButton;




























































































// import React, { useEffect } from "react";
// import { motion, useAnimationControls } from "framer-motion";

// const CategoryButton = () => {
//   // Animation controls allow us to manually trigger animations
//   const containerControls = useAnimationControls();
//   const buttonControls = useAnimationControls();
  
//   // Updated categories with emojis
//   const categories = [
//     "🧠 Brand Strategy & Positioning",
//     "📊 Branding Deck",
//     "✒️ Logo Design",
//     "📦 Packaging Design",
//     "🚀 Compaign Branding & Direction",
//     "👕 Merchandise Production",
//     "🖨️ Print Collateral",
//     "🎨 Artist Collaboration",
//     "📸 Content Creation"
//   ];

//   // Animation sequence that repeats after a longer time
//   useEffect(() => {
//     const runAnimationSequence = async () => {
//       // Start by animating the container in
//       await containerControls.start("visible");
      
//       // Then animate the buttons in one by one
//       await buttonControls.start("visible");
      
//       // Wait for a longer time before repeating the flip animation
//       // await new Promise(resolve => setTimeout(resolve, 45000)); // 45 seconds
      
//       // Reset buttons to prepare for flip animation
//       // await buttonControls.start("reset");
      
//       // Animate them back in with the flip effect
//       // await buttonControls.start("visible");
      
//       // Recursively call to keep repeating
//       // runAnimationSequence();
//     };
    
//     runAnimationSequence();
    
//     // Cleanup on component unmount
//     return () => {
//       containerControls.stop();
//       buttonControls.stop();
//     };
//   }, [containerControls, buttonControls]);

//   // Container slide animation
//   const containerVariants = {
//     hidden: { 
//       x: -100,
//       opacity: 0,
//       transition: {
//         duration: 1.2,
//         ease: "easeIn"
//       }
//     },
//     visible: { 
//       x: 0,
//       opacity: 1,
//       transition: { 
//         duration: 1.2,
//         ease: "easeOut"
//       }
//     }
//   };

//   // Button flip animation variants with reset state
//   const buttonVariants = {
//     hidden: {
//       rotateY: 90,
//       opacity: 0,
//       transition: {
//         duration: 0.5
//       }
//     },
//     // New reset state to prepare for re-animation
//     reset: (i) => ({
//       rotateY: 90,  // Prepare for flip
//       opacity: 0.5, // Partially visible during reset
//       transition: {
//         duration: 0.3,
//         delay: i * 0.1 // Staggered reset
//       }
//     }),
//     visible: (i) => ({
//       rotateY: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 10,
//         delay: i * 0.15, // Staggered entry
//         duration: 0.8
//       }
//     }),
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 5px 10px rgba(255, 102, 0, 0.3)",
//       transition: { duration: 0.3 }
//     },
//     tap: {
//       scale: 0.95,
//       transition: { duration: 0.1 }
//     }
//   };

//   return (
//     <motion.div 
//       className="w-[95%] mx-auto mt-3 flex justify-center gap-4 flex-wrap relative mb-8"
//       variants={containerVariants}
//       initial="hidden"
//       animate={containerControls}
//     >
//       {categories.map((category, index) => (
//         <motion.button 
//           key={index}
//           className="min-w-[150px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition"
//           style={{ 
//             originY: 0.5,
//             perspective: "1000px",
//             transformStyle: "preserve-3d",
//             minWidth: category.length * 5 + 80 + "px"
//           }}
//           variants={buttonVariants}
//           custom={index}
//           initial="hidden"
//           animate={buttonControls}
//           whileHover="hover"
//           whileTap="tap"
//         >
//           {category}
//         </motion.button>
//       ))}
//     </motion.div>
//   );
// };

// export default CategoryButton;


































import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const CategoryButton = () => {
  // Animation controls for triggering animations manually
  const containerControls = useAnimationControls();
  const buttonControls = useAnimationControls();
  
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

  // Set up Intersection Observer to detect when component enters viewport
  useEffect(() => {
    // Initial animation on first render
    runAnimationSequence();
    
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        
        if (!entry.isIntersecting) {
          // Component has scrolled out of view
          wasOutOfView.current = true;
        } 
        else if (entry.isIntersecting && wasOutOfView.current) {
          // Component has returned to view after being out of view
          wasOutOfView.current = false;
          
          // Reset and restart animations
          containerControls.start("hidden")
            .then(() => {
              buttonControls.start("hidden")
                .then(() => {
                  // Small delay before restarting animations
                  setTimeout(() => {
                    runAnimationSequence();
                  }, 100);
                });
            });
        }
      },
      {
        threshold: 0.25, // Trigger when 25% of element is visible
        rootMargin: "-100px 0px" // Slightly adjust trigger point
      }
    );
    
    // Start observing our component
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    // Cleanup
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
        <motion.button 
          key={index}
          className="min-w-[150px] max-sm:flex-grow bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-orange-600 transition"
          style={{ 
            originY: 0.5,
            perspective: "1000px",
            transformStyle: "preserve-3d",
            minWidth: category.length * 5 + 80 + "px"
          }}
          variants={buttonVariants}
          custom={index}
          initial="hidden"
          animate={buttonControls}
          whileHover="hover"
          whileTap="tap"
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryButton;
