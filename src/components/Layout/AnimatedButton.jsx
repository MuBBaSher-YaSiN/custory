// components/AnimatedButton.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const buttonVariants = (hoverBg, hoverText) => ({
  initial: { y: -40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 50,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: hoverBg,
    color: hoverText,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.25)",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.98,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.15)",
  },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
});

export default function AnimatedButton({
  children,
  onClick,
  href,
  className = "",
  prefersReducedMotion = false,
  hoverBg = "transparent",   // ✅ configurable
  hoverText = "#ff6c10",     // ✅ configurable
}) {
  const [hovered, setHovered] = useState(false);

  const baseClasses =
    "bg-[#ff6c10] border border-white text-white px-6 py-3 rounded-md relative overflow-hidden group transition-colors duration-300";

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      variants={buttonVariants(hoverBg, hoverText)}
      initial="initial"
      animate={prefersReducedMotion ? "animate" : ["animate", "float"]}
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* shimmer/glitter overlay */}
      {!prefersReducedMotion && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          initial={{ x: "-100%" }}
          animate={hovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 1 }}
          style={{ pointerEvents: "none" }}
        />
      )}

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 no-underline flex items-center justify-center gap-2"
        >
          {children}
        </a>
      ) : (
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      )}
    </motion.button>
  );
}
