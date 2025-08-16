import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import frontImage1 from '../../assets/gifs/Step1.gif'
import frontImage2 from '../../assets/gifs/Step2.gif'
import frontImage3 from '../../assets/gifs/Step 3.png'

const B2CSection = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [flippedCard, setFlippedCard] = useState(null);
  
  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Card data with both front and back content
  const cards = [
    {
      step: 1,
      // frontImage: 'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/shirt.png',
      frontImage: frontImage1,
      backImage: 'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/shirt.png',
      title: "Choose Your Product",
      description: "Curated, high-quality merch — apparel, packaging, gifts & more.",
      backTitle: "Premium Selection",
      backDescription: "Browse our extensive catalog of premium customizable products"
    },
    {
      step: 2,
      // frontImage: 'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/form.png',
      frontImage: frontImage2,
      backImage: 'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/form.png',
      title: "Get an Instant Quote in PDF",
      description: "No waiting. No delays. Transparent, competitive pricing in seconds.",
      backTitle: "Transparent Pricing",
      backDescription: "See exactly what you'll pay with our instant quote generator"
    },
    {
      step: 3,
      // frontImage: 'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/image-3.png',
      frontImage: frontImage3,
      backImage: 'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/image-3.png',
      title: "Place Your Order",
      description: "No minimum order quantities. Order 1 or 10,000 — we scale with you.",
      backTitle: "Easy Ordering",
      backDescription: "From single items to bulk orders, we've made the process seamless"
    }
  ];
  
  // Card entry animations
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        delay: 0.3 + (i * 0.15),
        duration: 0.8
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };
  
  // Card flip animations
  const cardInnerVariants = {
    front: {
      rotateY: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.6
      }
    },
    back: {
      rotateY: 180,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.6
      }
    }
  };

  // Background elements
  const liquidBackground = {
    initial: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  
  const liquidBubble = {
    initial: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 0.1,
      transition: {
        duration: 1.5,
        delay: i * 0.2
      }
    })
  };

  // Text animations
  const headingVariants = {
    initial: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  // NEW: "Click to learn more" animation variants
  const learnMoreVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }
    },
    hover: {
      scale: 1.1,
      opacity: 1,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  // NEW: Arrow animation variants
  const arrowVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, 5, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };
  
  // Toggle card flip function
  const toggleCardFlip = (index) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  return (
    <motion.div 
      className="bg-white px-4 md:px-20 text-center relative overflow-hidden min-h-[800px] py-10"
      ref={containerRef}
      variants={liquidBackground}
      initial="initial"
      animate={controls}
    >
      {/* Background bubbles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          variants={liquidBubble}
          custom={i}
          className="absolute rounded-full bg-gradient-to-r from-orange-100 to-orange-50 opacity-10 pointer-events-none"
          style={{
            width: 100 + Math.random() * 200,
            height: 100 + Math.random() * 200,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            zIndex: 0
          }}
        />
      ))}
      
      <motion.h2 
        className="text-2xl md:text-5xl font-bold text-gray-900 sm:my-16 my-12 relative z-10"
        variants={headingVariants}
      >
        {/* For Quick Orders & Customization (B2C) */}
        Direct Custom Orders via Platform
      </motion.h2>
      
      <motion.p 
        className="text-base md:text-xl text-black max-w-xl mx-auto relative z-10 mb-8"
        variants={headingVariants}
        custom={1}
      >
        {/* Explore our collections, personalize them with your logo, and order in
        minutes — no back-and-forth required. */}
        No back-and-forth with suppliers required. Explore our collections, personalize them with your logo, and order in minutes.
      </motion.p>
      
      {/* Shop Button */}
      <motion.div className="sm:mb-16 mb-12 relative z-10">
        <motion.button
          onClick={() => navigate("/upgrade")}
          className="relative bg-orange-500 text-white py-4 px-12 rounded-md font-semibold text-sm overflow-hidden group"
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 10px 20px -5px rgba(249, 115, 22, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
            Shop Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.button>
      </motion.div>

      <div className="flex items-start flex-wrap justify-center gap-8 relative z-10">
        {cards.map((card, index) => (
          <motion.div 
            key={index} 
            className="perspective-1000 w-[300px] min-w-[300px] flex-grow relative cursor-pointer"
            style={{ perspective: "1000px", height: "520px" }}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            onClick={() => toggleCardFlip(index)}
          >
            <motion.div
              className="w-full h-full relative flip-card-inner"
              variants={cardInnerVariants}
              initial="front"
              animate={flippedCard === index ? "back" : "front"}
              style={{ 
                transformStyle: "preserve-3d",
                position: "relative",
                width: "100%",
                height: "100%"
              }}
            >
              {/* FRONT SIDE */}
              <div 
                className="absolute w-full h-full flex flex-col items-center backface-hidden rounded-xl shadow-md bg-white"
                style={{ 
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden"
                }}
              >
                {/* Front content */}
                <div className="relative flex flex-col items-center w-full h-[240px] w-[240px] mb-6 shrink-0 overflow-hidden rounded-t-xl bg-white">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-300 opacity-10"
                  />
                  <img
                    src={card.frontImage}
                    alt={`Step ${index + 1}`}
                    className="object-cover h-[240px] w-[240px] "
                  />
                  
                  {/* Step number indicator */}
                  <div className="absolute bottom-[-20px] left-0 right-0">
                    <div className="relative flex justify-center">
                      <span 
                        className="flex items-center justify-center w-14 h-14 bg-orange-500 text-white text-2xl font-semibold rounded-full mb-4 mx-auto shadow-md"
                      >
                        {card.step}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 text-center mt-2">
                  <h2 className="text-xl font-bold text-gray-900 leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-base font-normal text-gray-700 mt-3">
                    {card.description}
                  </p>
                  
                  {/* ENHANCED: Animated "Click to learn more" button */}
                  <motion.div 
                    className="mt-6 flex items-center justify-center text-orange-500 text-sm font-medium bg-orange-50 py-2 px-4 rounded-md mx-auto w-fit"
                    variants={learnMoreVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Click to learn more
                    <motion.div
                      className="ml-1"
                      variants={arrowVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              {/* BACK SIDE */}
              <div 
                className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden rounded-xl shadow-md bg-gradient-to-br from-orange-50 to-white p-6"
                style={{ 
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                {/* Back content */}
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold mb-6">
                  {card.step}
                </div>
                
                <h2 className="text-2xl font-bold text-orange-500 mb-4">
                  {card.backTitle}
                </h2>
                
                <p className="text-base text-gray-700 text-center mb-6">
                  {card.backDescription}
                </p>
                
                <div className="w-12 h-1 bg-orange-300 rounded-full mb-6"></div>
                
                <motion.button
                  className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Learn More */}
                  Back to front
                </motion.button>
                
                {/* <button 
                  className="mt-4 text-sm text-gray-500 hover:text-orange-500 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlippedCard(null);
                  }}
                >
                  Back to front
                </button> */}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default B2CSection;
