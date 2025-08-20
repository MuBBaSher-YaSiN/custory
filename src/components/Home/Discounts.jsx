import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import useDiscount from "../../hooks/useDiscount";
import { DiscountDialogModel } from "../common/DialogModal";

import logoo from "../../assets/singamporLogo.png";
import singaporeSwimming from "../../assets/singaporeSwimming.png";
import yewSeng from "../../assets/yewSeng.png";
import grarage from "../../assets/grarage.png";
import logo1 from "../../assets/additional-logo1.png";
import logo2 from "../../assets/additional-logo2.png";

const Discounts = () => {
  const { discounts, displayDiscountInfo } = useDiscount();
  const [modalOpen, setModalOpen] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = React.useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (sessionStorage.getItem("ModalOpened")) {
      setModalOpen(false);
    }
  }, []);

  // Start animation sequence and set interval for repeating
  useEffect(() => {
    controls.start("animate");

    // Reset animation every 20 seconds
    const interval = setInterval(() => {
      controls.start("exit").then(() => {
        setAnimationKey((prev) => prev + 1);
        setTimeout(() => {
          controls.start("animate");
        }, 500);
      });
    }, 20000);

    return () => clearInterval(interval);
  }, [controls]);

  const enabledDiscounts = discounts
    ?.filter((item) => {
      const { expired } = displayDiscountInfo(item);
      return item.isEnable && !expired;
    })
    .map((item) => {
      const { daysLeft } = displayDiscountInfo(item);
      return { ...item, daysLeft };
    });

  // Container animation variants
  const containerVariants = {
    initial: {
      opacity: 0.9,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0.5,
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Logo item falling animation variants
  const logoVariants = {
    initial: (i) => ({
      y: -300, // Start far above the viewport
      x: i % 2 === 0 ? -20 : 20, // Slight x offset based on position
      opacity: 0,
      rotate: Math.random() * 20 - 10, // Random initial rotation
      scale: 0.7,
    }),
    animate: (i) => ({
      y: 0,
      x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        y: {
          type: "spring",
          stiffness: 80 + i * 5,
          damping: 9 + i * 1,
          mass: 1 + i * 0.2, // Heavier items fall differently
          velocity: -100,
          duration: 1.3 + i * 0.1,
        },
        opacity: { duration: 0.4 },
        rotate: {
          type: "spring",
          stiffness: 50,
          damping: 8,
        },
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: 0.2,
        },
      },
    }),
    exit: (i) => ({
      y: 200, // Exit downward
      opacity: 0,
      rotate: Math.random() * 20 - 10,
      transition: {
        duration: 0.7,
        ease: "easeIn",
        delay: i * 0.04,
      },
    }),
    bounce: (i) => ({
      y: [0, -15, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 6 + i * 0.5,
        duration: 1.2,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      scale: 1.08,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const imageVariants = {
    initial: {
      rotateY: 45,
    },
    animate: {
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
    bounce: (i) => ({
      rotateY: [0, 10, -5, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 4 + i * 1,
        duration: 2,
        ease: "easeInOut",
      },
    }),
    hover: {
      rotate: 0,
      scale: 1.15,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  // Shadow animation that follows the logo
  const shadowVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 0.2,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
    bounce: {
      opacity: [0.2, 0.15, 0.2],
      scale: [1, 0.9, 1],
      transition: {
        repeat: Infinity,
        repeatDelay: 6,
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const logos = [
    {
      // name: "Layers",
      src: logoo,
    },
    {
      // name: "Quotient",
      src: singaporeSwimming,
    },
    {
      // name: "Circoles",
      src: yewSeng,
    },
    {
      // name: "Hourglass",
      src: grarage,
    },
    {
      // name: "Hourglass",
      src: logo1,
    },
    {
      // name: "Hourglass",
      src: logo2,
    },
  ];

  return (
    <>
      <motion.div
        key={animationKey}
        ref={containerRef}
        variants={containerVariants}
        initial="initial"
        animate={controls}
        className="flex flex-wrap justify-around items-center gap-8 text-white font-semibold text-sm sm:text-base lg:min-h-[114px] bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] w-[90%] rounded-xl px-6 mx-auto my-10"
        style={{
          boxShadow: "0 10px 30px rgba(255, 102, 0, 0.2)",
          perspective: "1000px",
          overflow: "hidden",
        }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2 relative"
            variants={logoVariants}
            custom={index}
            whileHover="hover"
            animate={["animate", "bounce"]}
          >
            {/* Shadow element that follows the logo */}
            <motion.div
              className="absolute bg-black rounded-full blur-sm"
              variants={shadowVariants}
              animate={["animate", "bounce"]}
              custom={index}
            />

            {/* Logo image with bounce effect */}
            <motion.div
              variants={imageVariants}
              animate={["animate", "bounce"]}
              whileHover="hover"
              custom={index}
              className="flex items-center justify-center"
              style={{
                filter: "drop-shadow(0px 3px 5px rgba(0,0,0,0.15))",
              }}
            >
              <img src={logo.src} className="w-48 sm:w-32" />
            </motion.div>

            <motion.span
              className="sm:text-2xl text-lg font-bold"
              animate={{
                y: [0, -5, 0],
                transition: {
                  repeat: Infinity,
                  repeatDelay: 6 + index * 0.5,
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.1,
                },
              }}
            >
              {logo.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Discounts;
