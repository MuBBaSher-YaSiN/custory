import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import image1 from '../../assets/drive-download/1.png'
import image2 from '../../assets/drive-download/2.png'
import image3 from '../../assets/drive-download/3.png'
import image4 from '../../assets/drive-download/4.png'
import image5 from '../../assets/drive-download/5.gif'
import image6 from '../../assets/drive-download/6.png'
import image7 from '../../assets/drive-download/7.gif'
import image9 from '../../assets/drive-download/9.png'
import image10 from '../../assets/drive-download/10.png'
import image11 from '../../assets/drive-download/11.gif'

const Business_Compaigns = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });
  const [waveActive, setWaveActive] = useState(false);
  const [waveDirection, setWaveDirection] = useState("horizontal");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timersRef = useRef([]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Clean up timers properly
  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
  }, []);

  // Start wave animation sequence
  const startWaveSequence = useCallback(() => {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) return;

    clearAllTimers();

    const startNewWave = () => {
      // Choose a random wave direction for variety
      const directions = ["horizontal", "vertical", "diagonal", "center", "zigzag", "radial"];
      const newDirection = directions[Math.floor(Math.random() * directions.length)];

      setWaveDirection(newDirection);
      setWaveActive(true);

      // Reset wave after animation completes
      const timer1 = setTimeout(() => {
        setWaveActive(false);

        // Delay before starting next wave
        const timer2 = setTimeout(() => {
          startNewWave();
        }, 5000); // 5 second pause between wave animations

        timersRef.current.push(timer2);
      }, 3500); // Wave animation duration increased

      timersRef.current.push(timer1);
    };

    // Initial delay before first wave
    const initialTimer = setTimeout(() => {
      startNewWave();
    }, 2000);

    timersRef.current.push(initialTimer);
  }, [prefersReducedMotion, clearAllTimers]);

  // Initialize animations when component is in view
  useEffect(() => {
    if (isInView) {
      controls.start("animate");
      startWaveSequence();
    } else {
      controls.start("initial");
    }

    return () => {
      clearAllTimers();
    };
  }, [isInView, controls, startWaveSequence, clearAllTimers]);

  // Container animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  // Title and text animations
  const headingVariants = {
    initial: { y: -60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 60,
        duration: 1
      }
    }
  };

  const textVariants = {
    initial: { y: -30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
        delay: 0.3
      }
    }
  };

  // Button animation variants with floating effect
  const buttonVariants = {
    initial: { y: -40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 50,
        delay: 0.5,
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#fff",
      color: "#FF6600",
      boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.25)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0px 5px 10px rgba(255, 255, 255, 0.15)",
    },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Image falling and floating animation
  const imageVariants = {
    initial: (index) => ({
      y: -100,
      opacity: 0,
      rotate: index % 2 === 0 ? -5 : 5,
      filter: "brightness(0.8)"
    }),
    animate: (index) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      filter: "brightness(1)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
        duration: 0.8,
        delay: 0.6 + (index * 0.1)
      }
    }),
    float: (index) => ({
      y: [0, -7 + (index % 3), 0],
      rotate: [0, index % 2 === 0 ? 1 : -1, 0],
      transition: {
        duration: 4 + (index % 3),
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: index * 0.2
      }
    }),
    hover: {
      scale: 1.05,
      y: -12,
      boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.25)",
      rotate: 0,
      zIndex: 10,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  // Enhanced wave animation calculation
  const getWaveDelay = (index, direction) => {
    // Grid positions (assuming 3 rows x 4 columns)
    const col = index % 4;
    const row = Math.floor(index / 4);

    switch (direction) {
      case "horizontal":
        return col * 0.15; // Left to right
      case "vertical":
        return row * 0.2; // Top to bottom
      case "diagonal":
        return (col + row) * 0.1; // Diagonal wave
      case "center":
        // Distance from center for circular ripple
        const centerCol = 1.5;
        const centerRow = 1;
        const distance = Math.sqrt(Math.pow(col - centerCol, 2) + Math.pow(row - centerRow, 2));
        return distance * 0.15;
      case "zigzag":
        // Creates a zigzag pattern
        return (col * 0.15) + ((row % 2) * 0.2);
      case "radial":
        // Ripples out from a random point
        const randCol = Math.floor(Math.random() * 4);
        const randRow = Math.floor(Math.random() * 3);
        const dist = Math.sqrt(Math.pow(col - randCol, 2) + Math.pow(row - randRow, 2));
        return dist * 0.15;
      default:
        return 0;
    }
  };

  // Parallax background effect
  const parallaxVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 0.15,
      transition: { duration: 1 }
    }
  };

  const images = [
    
       {src:image1,
        lable:"🧠 Brand Strategy & Positioning",
       },
       {src:image2,
        lable:"📊 Branding Deck",
       },
       {src:image3,
        lable: "✒️ Logo Design",
       },
       {src:image4,
        lable:"📦 Packaging Design",
       },
       {src:image5,
        lable:"🚀 Compaign Branding & Direction",
       },
       {src:image6,
        lable:"🚀 Compaign Branding & Direction",
       },
       {src:image7,
        lable:"👕 Merchandise Production",
       },
       {src:image9,
        lable: "🖨️ Print Collateral",
       },
       {src:image10,
        lable:"🎨 Artist Collaboration",
       },
       {src:image11,
        lable:"📸 Content Creation",
       },
    
    

  ];


  return (
    <motion.div
      ref={containerRef}
      className="bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] text-white min-h-screen px-0.5 sm:pt-20 pt-12 relative overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate={controls}
    >
      {/* Parallax floating elements in background */}
      {!prefersReducedMotion && (
        [...Array(12)].map((_, i) => (
          <motion.div
            key={`parallax-${i}`}
            className="absolute rounded-full bg-white pointer-events-none"
            variants={parallaxVariants}
            initial="initial"
            animate="animate"
            style={{
              width: 10 + Math.random() * 50,
              height: 10 + Math.random() * 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              transition: {
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        ))
      )}

      <div className="max-w-full mx-auto text-center relative z-10">
        <motion.h1
          className="text-2xl md:text-5xl font-bold mb-4"
          variants={headingVariants}
        >
          {/* For Businesses & Campaigns (B2B) */}
          Collaborative Projects & Campaigns
        </motion.h1>

        <motion.p
          className="text-base md:text-xl sm:my-20 my-10"
          variants={textVariants}
        >
          {/* Merchandise that builds culture and creates connection. */}
          Branding, content, and merchandise that people connect with — and remember.

        </motion.p>

        <div className="mb-24">
          <motion.button
            className="bg-transparent border border-white text-white z-50 px-[20px] py-4 rounded-lg hover:bg-white hover:text-[#FF6600] transition relative overflow-hidden group"
            onClick={() => navigate('/contact')}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            animate={prefersReducedMotion ? "animate" : ["animate", "float"]}
            aria-label="Connect with Our Team"
          >
            {/* Animated shine effect */}
            {!prefersReducedMotion && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                  repeatDelay: 5
                }}
                style={{ pointerEvents: "none" }}
              />
            )}
            <span className="relative z-10">Connect with Our Team</span>
          </motion.button>
        </div>

        {/* Image grid with enhanced wave animations */}
        <div className="columns-2 md:columns-4 gap-[24px] space-y-[26px] relative">
          {images.map((items, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              variants={imageVariants}
              custom={index}
              initial="initial"
              animate={prefersReducedMotion ? "animate" : ["animate", "float"]}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* 3D card effect wrapper */}
              <motion.div
                className="w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Main image with advanced wave effect */}
                <motion.img
                  src={items.src}
                  alt={`Portfolio item ${index + 1}`}
                  className={`w-full rounded-lg ${index >= 3 ? "lg:relative lg:top-10 top-0" : ""
                    }`}
                  animate={waveActive && !prefersReducedMotion ? {
                    scale: [1, 1.04, 0.98, 1.02, 1],
                    y: [0, -8, 5, -3, 0],
                    x: [0, 4, -5, 2, 0],
                    rotate: [0, 1, -1, 0.5, 0],
                    filter: [
                      'brightness(1) contrast(1)',
                      'brightness(1.2) contrast(1.05)',
                      'brightness(0.95) contrast(1.1)',
                      'brightness(1.08) contrast(1.02)',
                      'brightness(1) contrast(1)'
                    ],
                    transition: {
                      duration: 3.5, // Longer duration for smoother wave
                      ease: "easeInOut",
                      delay: getWaveDelay(index, waveDirection)
                    }
                  } : {}}
                  loading="lazy"
                />

                {/* Wave overlay effect - animated glow */}
                {waveActive && !prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/30 to-transparent pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: [0, 0.4, 0],
                      scale: [0.8, 1.1, 1],
                      transition: {
                        duration: 2.5,
                        ease: "easeInOut",
                        delay: getWaveDelay(index, waveDirection)
                      }
                    }}
                  />
                )}

                {/* Enhanced decorative ripple with 3D effect */}
                {waveActive && !prefersReducedMotion && (
                  <motion.div
                    className="absolute -inset-1 rounded-lg pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
                      transformStyle: "preserve-3d",
                    }}
                    initial={{ opacity: 0, scale: 0.8, z: 0 }}
                    animate={{
                      opacity: [0, 0.7, 0],
                      scale: [0.8, 1.4, 1.8],
                      z: [0, 20, 0],
                      transition: {
                        duration: 3.5,
                        ease: "easeOut",
                        delay: getWaveDelay(index, waveDirection)
                      }
                    }}
                  />
                )}

                {/* Dynamic shadow under image */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-8 opacity-30"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px'
                  }}
                  animate={waveActive && !prefersReducedMotion ? {
                    y: [0, 5, -2, 3, 0],
                    opacity: [0.3, 0.5, 0.2, 0.4, 0.3],
                    transition: {
                      duration: 3.5,
                      delay: getWaveDelay(index, waveDirection)
                    }
                  } : {}}
                />
              </motion.div>

              {/* Zoom interaction effect on hover */}
              <AnimatePresence className="">
              
                       <motion.div
                      className="absolute inset-0  flex items-end justify-center border-3 p-4"
                    
                    >
                     
                        <span className="text-white bg-gradient-to-t from-black/60 to-black/10 rounded-lg px-4 ">{items.lable}</span>
                     
                    </motion.div>
                


              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Accessibility control for animations */}
        {/* {!prefersReducedMotion && (
          <motion.button 
            className="mt-8 text-sm text-white/70 hover:text-white focus:text-white focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            onClick={() => setPrefersReducedMotion(true)}
            aria-label="Disable animations for accessibility"
          >
            Disable animations
          </motion.button>
        )} */}
      </div>
    </motion.div>
  );
};

export default Business_Compaigns;
