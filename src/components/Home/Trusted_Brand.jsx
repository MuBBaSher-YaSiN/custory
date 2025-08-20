import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import TopLeft from "../../assets/12.svg";
import TopRight from "../../assets/1.svg";
import BottomRight from "../../assets/31.svg";
import BottomLeft from "../../assets/3.svg";
import reviewImage2 from "../../assets/review-image2.svg";
import yewSeng from "../../assets/yewSeng22.svg";
import singaporeSwimming2 from "../../assets/singaporeSwimming22.svg";

const Trusted_Brand = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // State now tracks both the page index and the direction of navigation.
  const [[page, direction], setPage] = useState([0, 0]);

  // Testimonial data from your file [[11]]
  const testimonials = [
    {
      quote:
        "Custory didn't just elevate our brand. They redefined how we communicate value in our industry.",
      description:
        "Samantha and the team approached our brand strategy with business-first thinking. From a website that speaks clearly to clients, to premium gifting and merchandise that our clients and team love - everything Custory delivered was intentional. They helped us stand out in a traditionally conservative industry.",
      author: "Tan Teck Poh Edmund",
      position: "Managing Director",
      image: reviewImage2,
      logo: yewSeng,
    },
    {
      quote:
        "Custory has been professional and comprehensive in their approach and strategy to our sales and marketing needs.",
      description:
        "Looking forward to continued close collaborations to achieve the results we are after!",
      author: "Min Yee Koh",
      position: "General Manager",
      image:
        "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/person.png",
      logo: singaporeSwimming2,
    },
  ];

  // Function to handle pagination and set the direction of movement.
  const paginate = (newDirection) => {
    const newIndex =
      (page + newDirection + testimonials.length) % testimonials.length;
    setPage([newIndex, newDirection]);
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants from your file [[11]]
  const objectVariants = {
    initial: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: [0.1, 0.2, 0.1],
      scale: [0.5, 1, 0.8],
      x: [0, i % 2 === 0 ? 30 : -30, 0],
      y: [0, i % 3 === 0 ? 20 : -20, 0],
      transition: {
        duration: i % 2 === 0 ? 20 : 17,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.6,
      },
    }),
  };

  const headingVariants = {
    initial: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const paragraphVariants = {
    initial: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        delay: 0.2,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    initial: {
      y: 100,
      opacity: 0,
      rotateX: 10,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.4,
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    initial: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const authorVariants = {
    initial: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
      },
    },
  };

  const photoVariants = {
    initial: { opacity: 0, scale: 0.7, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 1,
        delay: 0.7,
      },
    },
    float: {
      y: [0, -10, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const quoteMarkVariants = {
    initial: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0.7],
      scale: [0, 1.2, 1],
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  // **IMPROVEMENT**: The variants now only define the state (the "what"), not the transition (the "how").
  // This makes them cleaner and lets us define a single, consistent transition below.
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: "0%",
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const shapes = ["★", "●", "■", "▲", "◆", "✦"];

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-b from-[#FF6600] font-outfit via-[39%] via-[#FF711B] to-[#FFB669] sm:py-16 py-12 px-4 md:px-20 relative overflow-hidden h-auto flex items-center flex-col justify-center"
      initial="initial"
      animate={controls}
      style={{ perspective: "1200px" }}
    >
      {/* Background elements */}
      {[...Array(25)].map((_, i) => {
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        return (
          <motion.div
            key={i}
            className="absolute text-white opacity-10 pointer-events-none"
            style={{
              fontSize: `${30 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 0,
            }}
            variants={objectVariants}
            custom={i}
          >
            {randomShape}
          </motion.div>
        );
      })}

      {/* Heading content */}
      <div className="text-center text-white max-w-3xl mx-auto relative z-20">
        <motion.h2
          className="text-2xl md:text-5xl font-bold"
          variants={headingVariants}
        >
          We deliver and it shows.
        </motion.h2>
        <motion.p
          className="text-sm md:text-[20px] md:leading-[30px] sm:my-16 my-10 max-w-[460px] mx-auto"
          variants={paragraphVariants}
        >
          Trusted by leading brands, we hold ourselves accountable to every
          promise we make.
        </motion.p>
      </div>

      {/* Main container for slider and arrows */}
      <div className="relative w-full  max-w-[1200px] mx-auto">
        {/* Navigation arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full left-0 flex justify-between  z-50 pointer-events-none">
          <button
            onClick={() => paginate(-1)}
            className="w-8 h-8 sm:w-14 sm:h-14 mr-2  rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-auto transition-opacity hover:bg-white"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF6600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full ml-2 bg-white/90 flex items-center justify-center shadow-md pointer-events-auto transition-opacity hover:bg-white"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF6600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Slider container */}
        <motion.div
          className="w-full max-w-[823px] p-2 px-6 mx-auto relative z-20"
          variants={cardVariants}
        >
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mb-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > page ? 1 : -1])}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  page === i ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Testimonial slider with AnimatePresence */}
          <div className="relative min-h-[600px] sm:min-h-[420px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                // **THE FIX IS HERE**: We define a single, robust transition for the whole component.
                // The `x` property gets a stiff spring that settles quickly.
                // The `opacity` gets a simple, fast fade.
                // This ensures the animation is consistent every time.
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full px-4"
              >
                {/* DYNAMIC TESTIMONIAL CARD */}
                <div
                  className="bg-white rounded-[40px] px-4 sm:px-8 md:px-10 md:py-10 py-6 sm:py-4 shadow-lg relative overflow-hidden h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    variants={quoteMarkVariants}
                    className="absolute text-[80px] md:text-[150px] font-serif text-orange-100 -left-2 md:-left-5 top-0 leading-none z-0"
                  >
                    "
                  </motion.div>

                  <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                    <div className="flex-1 md:flex text-center md:text-left">
                      <div className="">
                      <motion.h3
                        variants={quoteVariants}
                        className="text-[#2f2828] font-bold text-base sm:text-lg md:text-[20px] mb-2"
                      >
                        "{testimonials[page].quote}"
                      </motion.h3>
                      <motion.p
                        variants={quoteVariants}
                        className="text-[#111204] text-[12px] mb-4"
                      >
                        "{testimonials[page].description}"
                      </motion.p>
                      <motion.div variants={authorVariants} className="mb-4 md:mb-0">
                        {/* <p className="text-[#ff6600] text-[20px] font-bold border-b-2 border-[#ff6600] inline-block">{testimonials[page].author}</p> */}
                        <p
                          className="text-base sm:text-[20px] leading font-outfit font-bold border-b-2 border-[#FFB669] inline-block 
             bg-gradient-to-b from-[#FFB669] via-[#FF711B] to-[#FFB669] 
             bg-clip-text text-transparent"
                        >
                          {testimonials[page].author}
                        </p>

                        <p className="text-sm md:text-base font-outfit text-[#111204]">
                          {testimonials[page].position}
                        </p>
                      </motion.div>
                       <motion.div
                        variants={logoVariants}
                        className=" hidden lg:justify-start  h-12 sm:h-[80px] md:h-[100px] lg:flex lg:items-start"
                      >
                        <img
                          src={testimonials[page].logo}
                          alt="Company Logo"
                          className="max-h-full  w-auto object-contain"
                        />
                      </motion.div>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-4" >
                      <motion.div
                        variants={logoVariants}
                        className="md:mx-0 lg:hidden mx-auto h-12 sm:h-[80px] md:h-[100px] flex items-center"
                      >
                        <img
                          src={testimonials[page].logo}
                          alt="Company Logo"
                          className="max-h-full mx-auto w-auto object-contain"
                        />
                      </motion.div>
                       <motion.div
                      className=" w-28 h-28 sm:w-32 sm:h-32 md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0"
                      variants={photoVariants}
                      animate={["visible", "float"]}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={testimonials[page].image}
                        alt={testimonials[page].author}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </motion.div>

                    </div>
</div>
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 to-transparent rounded-[40px] pointer-events-none"
                    animate={{
                      opacity: [0, 0.2, 0],
                      transition: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Trusted_Brand;
