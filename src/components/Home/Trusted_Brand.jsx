// import React from 'react'

// const Trusted_Brand = () => {
//   return (
//     <div className="bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] sm:py-16 py-12 px-4 md:px-20 relative overflow-hidden h-auto max-lg:flex items-center flex-col justify-center">
//       <div className="text-center text-white max-w-3xl mx-auto">
//         <h2 className="text-2xl md:text-5xl font-bold">
//           We deliver and it shows.
//         </h2>
//         <p className="text-sm md:text-[20px] md:leading-[30px] sm:my-16 my-10 max-w-[460px] mx-auto">
//           Trusted by leading brands, we hold ourselves accountable to every
//           promise we make.
//         </p>
//       </div>

//       <div className="flex bg-white max-w-[1000px] min-h-[485px] mx-auto rounded-[40px] px-12 md:px-16 shadow-lg z-0 max-lg:py-4">
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           <div className="flex-1 text-center md:text-left">
//             <img
//               src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/logoImage.png'}
//               alt="Logo"
//               className="md:mx-0 mx-auto mb-4 w-[169px] h-[117px] object-contain"
//             />
//             <h3 className="text-[#2f2828] font-bold text-lg md:text-[26px] mb-2">
//               Kornix Is The Best Digital Agency I Have Ever Seen! Highly
//               Recommended!
//             </h3>
//             <p className="md:text-lg text-base text-[#111204] my-5">
//               I recently hired <b>Ideapeel</b> for a custom web-development project and
//               couldn't be happier with the results. The team was able to bring
//               my unique ideas to life and create a website that truly stands
//               out.
//             </p>
//             <p className="text-[#ff6600] font-bold text-xl mb-6">Diana Lorenza</p>
//             <p className="text-base text-[#111204]">Director of <b>GYMSTORY</b></p>
//           </div>

//           <div className="md:w-[325px] w-32 md:h-[325px] h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
//             <img
//               src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/person.png'}
//               alt="Person"
//               className="w-full h-full object-fill rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Trusted_Brand





































// import React, { useRef, useEffect } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';

// const Trusted_Brand = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.3 });
//   const controls = useAnimation();
  
//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [isInView, controls]);

//   // Background bubbles animation
//   const bubbleVariants = {
//     initial: { opacity: 0, scale: 0.5 },
//     visible: (i) => ({
//       opacity: [0.1, 0.15, 0.1],
//       scale: [0.5, 1, 0.8],
//       x: [0, i % 2 === 0 ? 20 : -20, 0],
//       transition: {
//         duration: i % 2 === 0 ? 18 : 15,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut",
//         delay: i * 0.5
//       }
//     })
//   };

//   // Heading animations
//   const headingVariants = {
//     initial: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 12,
//         duration: 0.8
//       }
//     }
//   };
  
//   const paragraphVariants = {
//     initial: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 12,
//         delay: 0.2,
//         duration: 0.8
//       }
//     }
//   };

//   // Card animation with 3D effect
//   const cardVariants = {
//     initial: { y: 100, opacity: 0, rotateX: 10 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 15,
//         delay: 0.4,
//         duration: 1,
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   // Card content animations
//   const logoVariants = {
//     initial: { y: 20, opacity: 0, scale: 0.9 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.6
//       }
//     }
//   };
  
//   const quoteVariants = {
//     initial: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         delay: 0.3
//       }
//     }
//   };
  
//   const authorVariants = {
//     initial: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         delay: 0.6
//       }
//     }
//   };
  
//   // Photo animation with floating effect
//   const photoVariants = {
//     initial: { opacity: 0, scale: 0.7, rotate: -10 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 60,
//         damping: 12,
//         duration: 1,
//         delay: 0.7
//       }
//     },
//     float: {
//       y: [0, -10, 0],
//       rotate: [0, 2, 0],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut"
//       }
//     }
//   };

//   // Quote marks animation
//   const quoteMarkVariants = {
//     initial: { opacity: 0, scale: 0 },
//     visible: {
//       opacity: [0, 1, 0.7],
//       scale: [0, 1.2, 1],
//       transition: {
//         duration: 0.8,
//         delay: 0.4
//       }
//     }
//   };

//   return (
//     <motion.div 
//       ref={ref}
//       className="bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] sm:py-16 py-12 px-4 md:px-20 relative overflow-hidden h-auto max-lg:flex items-center flex-col justify-center"
//       initial="initial"
//       animate={controls}
//       style={{ perspective: "1200px" }}
//     >
//       {/* Animated background bubbles */}
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-white opacity-10 pointer-events-none"
//           style={{
//             width: 70 + Math.random() * 200,
//             height: 70 + Math.random() * 200,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             zIndex: 0
//           }}
//           variants={bubbleVariants}
//           custom={i}
//         />
//       ))}
      
//       <div className="text-center text-white max-w-3xl mx-auto relative z-10">
//         <motion.h2 
//           className="text-2xl md:text-5xl font-bold"
//           variants={headingVariants}
//         >
//           We deliver and it shows.
//         </motion.h2>
//         <motion.p 
//           className="text-sm md:text-[20px] md:leading-[30px] sm:my-16 my-10 max-w-[460px] mx-auto"
//           variants={paragraphVariants}
//         >
//           Trusted by leading brands, we hold ourselves accountable to every
//           promise we make.
//         </motion.p>
//       </div>

//       <motion.div 
//         className="flex bg-white max-w-[1000px] min-h-[485px] mx-auto rounded-[40px] px-12 md:px-16 shadow-lg z-10 max-lg:py-4 relative overflow-hidden"
//         variants={cardVariants}
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Quote mark decoration */}
//         <motion.div
//           variants={quoteMarkVariants}
//           className="absolute text-[150px] font-serif text-orange-100 -left-5 top-0 leading-none z-0"
//         >
//           "
//         </motion.div>
        
//         <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
//           <div className="flex-1 text-center md:text-left">
//             <motion.img
//               variants={logoVariants}
//               src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/logoImage.png'}
//               alt="Logo"
//               className="md:mx-0 mx-auto mb-4 w-[169px] h-[117px] object-contain"
//             />
//             <motion.h3 
//               variants={quoteVariants}
//               className="text-[#2f2828] font-bold text-lg md:text-[26px] mb-2"
//             >
//               Kornix Is The Best Digital Agency I Have Ever Seen! Highly
//               Recommended!
//             </motion.h3>
//             <motion.p 
//               variants={quoteVariants}
//               className="md:text-lg text-base text-[#111204] my-5"
//             >
//               I recently hired <b>Ideapeel</b> for a custom web-development project and
//               couldn't be happier with the results. The team was able to bring
//               my unique ideas to life and create a website that truly stands
//               out.
//             </motion.p>
//             <motion.div variants={authorVariants}>
//               <p className="text-[#ff6600] font-bold text-xl mb-6">Diana Lorenza</p>
//               <p className="text-base text-[#111204]">Director of <b>GYMSTORY</b></p>
//             </motion.div>
//           </div>

//           <motion.div 
//             className="md:w-[325px] w-32 md:h-[325px] h-32 rounded-full overflow-hidden border-4 border-white shadow-md"
//             variants={photoVariants}
//             animate={["visible", "float"]}
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <img
//               src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/person.png'}
//               alt="Person"
//               className="w-full h-full object-fill rounded-full"
//             />
//           </motion.div>
//         </div>
        
//         {/* Animated gradient overlay */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 to-transparent rounded-[40px] pointer-events-none"
//           animate={{ 
//             opacity: [0, 0.2, 0],
//             transition: { 
//               duration: 5, 
//               repeat: Infinity, 
//               repeatType: "reverse" 
//             } 
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Trusted_Brand;



























































































































































// import React, { useRef, useEffect } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import TopLeft from '../../assets/12.svg'; // Assuming this is your actual top-left asset
// import TopRight from '../../assets/1.svg'; // Assuming this is your actual top-right asset
// import BottomRight from '../../assets/31.svg'; // Assuming this is your actual bottom-right asset
// import BottomLeft from '../../assets/3.svg'; // Assuming this is your actual bottom-left asset


// const Trusted_Brand = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.3 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [isInView, controls]);

//   // Background object (star/shape) animation - THIS REMAINS ANIMATED
//   const objectVariants = {
//     initial: { opacity: 0, scale: 0.5 },
//     visible: (i) => ({
//       opacity: [0.1, 0.2, 0.1], // Slightly more visible
//       scale: [0.5, 1, 0.8],
//       x: [0, i % 2 === 0 ? 30 : -30, 0], // Horizontal movement
//       y: [0, i % 3 === 0 ? 20 : -20, 0], // Vertical movement
//       transition: {
//         duration: i % 2 === 0 ? 20 : 17,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut",
//         delay: i * 0.6
//       }
//     })
//   };

//   // Heading animations
//   const headingVariants = {
//     initial: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 12,
//         duration: 0.8
//       }
//     }
//   };

//   const paragraphVariants = {
//     initial: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 12,
//         delay: 0.2,
//         duration: 0.8
//       }
//     }
//   };

//   // Card animation with 3D effect
//   const cardVariants = {
//     initial: { y: 100, opacity: 0, rotateX: 10 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 15,
//         delay: 0.4,
//         duration: 1,
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   };

//   // Card content animations
//   const logoVariants = {
//     initial: { y: 20, opacity: 0, scale: 0.9 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.6
//       }
//     }
//   };

//   const quoteVariants = {
//     initial: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         delay: 0.3
//       }
//     }
//   };

//   const authorVariants = {
//     initial: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         delay: 0.6
//       }
//     }
//   };

//   // Photo animation with floating effect
//   const photoVariants = {
//     initial: { opacity: 0, scale: 0.7, rotate: -10 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 60,
//         damping: 12,
//         duration: 1,
//         delay: 0.7
//       }
//     },
//     float: { // Retained the float animation for the photo
//       y: [0, -10, 0],
//       rotate: [0, 2, 0],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut"
//       }
//     }
//   };

//   // Quote marks animation
//   const quoteMarkVariants = {
//     initial: { opacity: 0, scale: 0 },
//     visible: {
//       opacity: [0, 1, 0.7],
//       scale: [0, 1.2, 1],
//       transition: {
//         duration: 0.8,
//         delay: 0.4
//       }
//     }
//   };

//   // Array of shapes for the animated background elements
//   const shapes = ['★', '●', '■', '▲', '◆', '✦']; // Star, Circle, Square, Up-triangle, Diamond, Eight-pointed star

//   return (
//     <motion.div
//       ref={ref}
//       className="bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] sm:py-16 py-12 px-4 md:px-20 relative overflow-hidden h-auto flex items-center flex-col justify-center"
//       initial="initial"
//       animate={controls}
//       style={{ perspective: "1200px" }}
//     >
//       {/* STATIC Decorative images using the imported SVGs */}
//       {/* Top-left image */}
//       <img
//         src={TopLeft} // Corrected: Using TopLeft for top-left
//         alt="Decorative Element Top Left"
//         className="absolute top-4 left-4 md:top-8 md:left-8 lg:left-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//         // Removed the filter style
//       />
//       {/* Top-right image */}
//       <img
//         src={TopRight} // Corrected: Using TopRight for top-right
//         alt="Decorative Element Top Right"
//         className="absolute top-4 right-4 md:top-8 md:right-8 lg:right-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//         // Removed the filter style
//       />
//       {/* Bottom-left image */}
//       <img
//         src={BottomLeft} // Corrected: Using BottomLeft for bottom-left
//         alt="Decorative Element Bottom Left"
//         className="absolute bottom-4 left-4 md:bottom-8 md:left-8 lg:left-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//         // Removed the filter style
//       />
//       {/* Bottom-right image - Added this to complete all four corners based on imports */}
//       <img
//         src={BottomRight} // Using BottomRight for bottom-right
//         alt="Decorative Element Bottom Right"
//         className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:right-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//         // Removed the filter style
//       />

//       {/* ANIMATED Background objects (stars/shapes) - Increased quantity and diversified shapes */}
//       {[...Array(25)].map((_, i) => { // Increased count to 25
//         const randomShape = shapes[Math.floor(Math.random() * shapes.length)]; // Randomly pick a shape
//         return (
//           <motion.div
//             key={i}
//             className="absolute text-white opacity-10 pointer-events-none"
//             style={{
//               fontSize: `${30 + Math.random() * 60}px`, // Size of the shape
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               zIndex: 0 // Keep these behind the main content and new decorative images
//             }}
//             variants={objectVariants} // Apply the animation variants
//             custom={i}
//           >
//             {randomShape}
//           </motion.div>
//         );
//       })}

//       <div className="text-center text-white max-w-3xl mx-auto relative z-20"> {/* Higher z-index for main text content */}
//         <motion.h2
//           className="text-2xl md:text-5xl font-bold"
//           variants={headingVariants}
//         >
//           We deliver and it shows.
//         </motion.h2>
//         <motion.p
//           className="text-sm md:text-[20px] md:leading-[30px] sm:my-16 my-10 max-w-[460px] mx-auto"
//           variants={paragraphVariants}
//         >
//           Trusted by leading brands, we hold ourselves accountable to every promise we make.
//         </motion.p>
//       </div>

//       <motion.div
//         className="flex bg-white max-w-[1000px] min-h-[485px] mx-auto rounded-[40px] px-12 md:px-16 shadow-lg z-20 max-lg:py-4 relative overflow-hidden" // Higher z-index for the main card
//         variants={cardVariants}
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Quote mark decoration */}
//         <motion.div
//           variants={quoteMarkVariants}
//           className="absolute text-[150px] font-serif text-orange-100 -left-5 top-0 leading-none z-0"
//         >
//           "
//         </motion.div>

//         <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
//           <div className="flex-1 text-center md:text-left">
//             {/* Logo image (previously commented out, now present) */}
//              {/* <motion.img
//               variants={logoVariants}
//               src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/YSHEngineering_logo.png'} // Placeholder, replace with actual logo if different
//               alt="Yew Seng Heng Engineering Logo"
//               className="md:mx-0 mx-auto mb-4 w-[169px] h-[117px] object-contain"
//             /> */}
//             <motion.h3
//               variants={quoteVariants}
//               className="text-[#2f2828] font-bold text-lg md:text-[26px] mb-2"
//             >
//               "Custory didn't just elevate our brand. They redefined how we communicate value in our industry."
//             </motion.h3>
//             <motion.p
//               variants={quoteVariants}
//               className="md:text-lg text-base text-[#111204] my-5"
//             >
//               "Samantha and the team approached our brand strategy with business-first thinking. From a website that speaks clearly to clients, to premium gifting and merchandise that our clients and team love - everything Custory delivered was intentional. They helped us stand out in a traditionally conservative industry."
//             </motion.p>
//             <motion.div variants={authorVariants}>
//               <p className="text-[#ff6600] font-bold text-xl mb-6">Tan Teck Poh Edmund</p>
//               <p className="text-base text-[#111204]">Managing Director</p>
//             </motion.div>
//           </div>

//           <motion.div
//             className="md:w-[325px] w-32 md:h-[325px] h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0"
//             variants={photoVariants}
//             animate={["visible", "float"]} // Ensure the photo also floats as per its variants
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <img
//              src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/person.png'} // Corrected image source from 'person.png' to 'tan_teck_poh_edmund.png' to match previous context
//               alt="Tan Teck Poh Edmund"
//               className="w-full h-full object-cover rounded-full"
//             />
//           </motion.div>
//         </div>

//         {/* Animated gradient overlay */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 to-transparent rounded-[40px] pointer-events-none"
//           animate={{
//             opacity: [0, 0.2, 0],
//             transition: {
//               duration: 5,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Trusted_Brand;













































































































// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import TopLeft from '../../assets/12.svg';
// import TopRight from '../../assets/1.svg';
// import BottomRight from '../../assets/31.svg';
// import BottomLeft from '../../assets/3.svg';

// const Trusted_Brand = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.3 });
//   const controls = useAnimation();
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Testimonial data
//   const testimonials = [
//     {
//       quote: "Custory didn't just elevate our brand. They redefined how we communicate value in our industry.",
//       description: "Samantha and the team approached our brand strategy with business-first thinking. From a website that speaks clearly to clients, to premium gifting and merchandise that our clients and team love - everything Custory delivered was intentional. They helped us stand out in a traditionally conservative industry.",
//       author: "Tan Teck Poh Edmund",
//       position: "Managing Director",
//       image: "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/person.png",
//       logo: "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/YSHEngineering_logo.png"
//     },
//     {
//       quote: "The transformation of our brand identity exceeded all expectations.",
//       description: "Working with the Custory team was a game-changer for our business. They brought fresh perspectives and creative solutions that perfectly captured our company's ethos. The new branding has significantly improved our market positioning and client engagement.",
//       author: "Sarah Johnson",
//       position: "CEO",
//       image: "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/person2.png",
//       logo: "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/company_logo2.png"
//     }
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev === 0 ? 1 : 0));
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [isInView, controls]);

//   // Background object animation
//   const objectVariants = {
//     initial: { opacity: 0, scale: 0.5 },
//     visible: (i) => ({
//       opacity: [0.1, 0.2, 0.1],
//       scale: [0.5, 1, 0.8],
//       x: [0, i % 2 === 0 ? 30 : -30, 0],
//       y: [0, i % 3 === 0 ? 20 : -20, 0],
//       transition: {
//         duration: i % 2 === 0 ? 20 : 17,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut",
//         delay: i * 0.6
//       }
//     })
//   };

//   // Heading animations
//   const headingVariants = {
//     initial: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 12,
//         duration: 0.8
//       }
//     }
//   };

//   const paragraphVariants = {
//     initial: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 12,
//         delay: 0.2,
//         duration: 0.8
//       }
//     }
//   };

//   // Card animation with 3D effect
//   const cardVariants = {
//     initial: { y: 100, opacity: 0, rotateX: 10 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 15,
//         delay: 0.4,
//         duration: 1,
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   };

//   // Card content animations
//   const logoVariants = {
//     initial: { y: 20, opacity: 0, scale: 0.9 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.6
//       }
//     }
//   };

//   const quoteVariants = {
//     initial: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         delay: 0.3
//       }
//     }
//   };

//   const authorVariants = {
//     initial: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         delay: 0.6
//       }
//     }
//   };

//   // Photo animation with floating effect
//   const photoVariants = {
//     initial: { opacity: 0, scale: 0.7, rotate: -10 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 60,
//         damping: 12,
//         duration: 1,
//         delay: 0.7
//       }
//     },
//     float: {
//       y: [0, -10, 0],
//       rotate: [0, 2, 0],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut"
//       }
//     }
//   };

//   // Quote marks animation
//   const quoteMarkVariants = {
//     initial: { opacity: 0, scale: 0 },
//     visible: {
//       opacity: [0, 1, 0.7],
//       scale: [0, 1.2, 1],
//       transition: {
//         duration: 0.8,
//         delay: 0.4
//       }
//     }
//   };

//   // Slider animation
//   const sliderVariants = {
//     initial: { x: 0 },
//     slide: (direction) => ({
//       x: direction === 'left' ? '0%' : '-50%',
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 20,
//         duration: 0.8
//       }
//     })
//   };

//   // Array of shapes for the animated background elements
//   const shapes = ['★', '●', '■', '▲', '◆', '✦'];

//   return (
//     <motion.div
//       ref={ref}
//       className="bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] sm:py-16 py-12 px-4 md:px-20 relative overflow-hidden h-auto flex items-center flex-col justify-center"
//       initial="initial"
//       animate={controls}
//       style={{ perspective: "1200px" }}
//     >
//       {/* Decorative SVG images */}
//       <img
//         src={TopLeft}
//         alt="Decorative Element Top Left"
//         className="absolute top-4 left-4 md:top-8 md:left-8 lg:left-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//       />
//       <img
//         src={TopRight}
//         alt="Decorative Element Top Right"
//         className="absolute top-4 right-4 md:top-8 md:right-8 lg:right-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//       />
//       <img
//         src={BottomLeft}
//         alt="Decorative Element Bottom Left"
//         className="absolute bottom-4 left-4 md:bottom-8 md:left-8 lg:left-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//       />
//       <img
//         src={BottomRight}
//         alt="Decorative Element Bottom Right"
//         className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:right-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//       />

//       {/* Animated background objects */}
//       {[...Array(25)].map((_, i) => {
//         const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
//         return (
//           <motion.div
//             key={i}
//             className="absolute text-white opacity-10 pointer-events-none"
//             style={{
//               fontSize: `${30 + Math.random() * 60}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               zIndex: 0
//             }}
//             variants={objectVariants}
//             custom={i}
//           >
//             {randomShape}
//           </motion.div>
//         );
//       })}

//       {/* Main heading content */}
//       <div className="text-center text-white max-w-3xl mx-auto relative z-20">
//         <motion.h2
//           className="text-2xl md:text-5xl font-bold"
//           variants={headingVariants}
//         >
//           We deliver and it shows.
//         </motion.h2>
//         <motion.p
//           className="text-sm md:text-[20px] md:leading-[30px] sm:my-16 my-10 max-w-[460px] mx-auto"
//           variants={paragraphVariants}
//         >
//           Trusted by leading brands, we hold ourselves accountable to every promise we make.
//         </motion.p>
//       </div>

//       {/* Slider container */}
//       <motion.div
//         className="w-full max-w-[2000px] mx-auto overflow-hidden relative z-20"
//         variants={cardVariants}
//       >
//         {/* Navigation dots */}
//         <div className="flex justify-center gap-2 mb-6">
//           {testimonials.map((_, i) => (
//             <button 
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-white scale-125' : 'bg-white/50'}`}
//               aria-label={`View testimonial ${i+1}`}
//             />
//           ))}
//         </div>

//         {/* Testimonial slider */}
//         <motion.div 
//           className="flex w-[200%]"
//           variants={sliderVariants}
//           animate="slide"
//           custom={activeIndex === 0 ? 'left' : 'right'}
//         >
//           {/* First testimonial */}
//           <div className="w-1/2 px-4">
//             <div className="bg-white rounded-[40px] px-8 md:px-16 py-10 shadow-lg relative overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
//               {/* Quote mark decoration */}
//               <motion.div
//                 variants={quoteMarkVariants}
//                 className="absolute text-[150px] font-serif text-orange-100 -left-5 top-0 leading-none z-0"
//               >
//                 "
//               </motion.div>

//               <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
//                 <div className="flex-1 text-center md:text-left">
//                   {/* Logo image */}
//                   <motion.img
//                     variants={logoVariants}
//                     src={testimonials[0].logo}
//                     alt="Company Logo"
//                     className="md:mx-0 mx-auto mb-4 w-[169px] h-[117px] object-contain"
//                   />
//                   <motion.h3
//                     variants={quoteVariants}
//                     className="text-[#2f2828] font-bold text-lg md:text-[26px] mb-2"
//                   >
//                     "{testimonials[0].quote}"
//                   </motion.h3>
//                   <motion.p
//                     variants={quoteVariants}
//                     className="md:text-lg text-base text-[#111204] my-5"
//                   >
//                     "{testimonials[0].description}"
//                   </motion.p>
//                   <motion.div variants={authorVariants}>
//                     <p className="text-[#ff6600] font-bold text-xl mb-6">{testimonials[0].author}</p>
//                     <p className="text-base text-[#111204]">{testimonials[0].position}</p>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   className="md:w-[325px] w-32 md:h-[325px] h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0"
//                   variants={photoVariants}
//                   animate={["visible", "float"]}
//                   style={{ transformStyle: "preserve-3d" }}
//                 >
//                   <img
//                     src={testimonials[0].image}
//                     alt={testimonials[0].author}
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </motion.div>
//               </div>

//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 to-transparent rounded-[40px] pointer-events-none"
//                 animate={{
//                   opacity: [0, 0.2, 0],
//                   transition: {
//                     duration: 5,
//                     repeat: Infinity,
//                     repeatType: "reverse"
//                   }
//                 }}
//               />
//             </div>
//           </div>

//           {/* Second testimonial */}
//           <div className="w-1/2 px-4">
//             <div className="bg-white rounded-[40px] px-8 md:px-16 py-10 shadow-lg relative overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
//               {/* Quote mark decoration */}
//               <motion.div
//                 variants={quoteMarkVariants}
//                 className="absolute text-[150px] font-serif text-orange-100 -left-5 top-0 leading-none z-0"
//               >
//                 "
//               </motion.div>

//               <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
//                 <div className="flex-1 text-center md:text-left">
//                   {/* Logo image */}
//                   <motion.img
//                     variants={logoVariants}
//                     src={testimonials[1].logo}
//                     alt="Company Logo"
//                     className="md:mx-0 mx-auto mb-4 w-[169px] h-[117px] object-contain"
//                   />
//                   <motion.h3
//                     variants={quoteVariants}
//                     className="text-[#2f2828] font-bold text-lg md:text-[26px] mb-2"
//                   >
//                     "{testimonials[1].quote}"
//                   </motion.h3>
//                   <motion.p
//                     variants={quoteVariants}
//                     className="md:text-lg text-base text-[#111204] my-5"
//                   >
//                     "{testimonials[1].description}"
//                   </motion.p>
//                   <motion.div variants={authorVariants}>
//                     <p className="text-[#ff6600] font-bold text-xl mb-6">{testimonials[1].author}</p>
//                     <p className="text-base text-[#111204]">{testimonials[1].position}</p>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   className="md:w-[325px] w-32 md:h-[325px] h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0"
//                   variants={photoVariants}
//                   animate={["visible", "float"]}
//                   style={{ transformStyle: "preserve-3d" }}
//                 >
//                   <img
//                     src={testimonials[1].image}
//                     alt={testimonials[1].author}
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </motion.div>
//               </div>

//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 to-transparent rounded-[40px] pointer-events-none"
//                 animate={{
//                   opacity: [0, 0.2, 0],
//                   transition: {
//                     duration: 5,
//                     repeat: Infinity,
//                     repeatType: "reverse"
//                   }
//                 }}
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Navigation arrows */}
//         <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 z-30 pointer-events-none">
//           <button 
//             onClick={() => setActiveIndex(0)}
//             className={`w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-auto transition-opacity ${activeIndex === 0 ? 'opacity-50 cursor-default' : 'opacity-100 hover:bg-white'}`}
//             disabled={activeIndex === 0}
//             aria-label="Previous testimonial"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M15 18l-6-6 6-6" />
//             </svg>
//           </button>
//           <button 
//             onClick={() => setActiveIndex(1)}
//             className={`w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-auto transition-opacity ${activeIndex === 1 ? 'opacity-50 cursor-default' : 'opacity-100 hover:bg-white'}`}
//             disabled={activeIndex === 1}
//             aria-label="Next testimonial"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M9 18l6-6-6-6" />
//             </svg>
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Trusted_Brand;
























































































// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import TopLeft from '../../assets/12.svg';
// import TopRight from '../../assets/1.svg';
// import BottomRight from '../../assets/31.svg';
// import BottomLeft from '../../assets/3.svg';
// import reviewImage2 from '../../assets/review-image2.svg'
// import yewSeng from '../../assets/yewSeng2.svg'
// import singaporeSwimming2 from '../../assets/singaporeSwimming2.svg'

// const Trusted_Brand = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.3 });
//   const controls = useAnimation();
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Testimonial data
//   const testimonials = [
//     {
//       quote: "Custory didn't just elevate our brand. They redefined how we communicate value in our industry.",
//       description: "Samantha and the team approached our brand strategy with business-first thinking. From a website that speaks clearly to clients, to premium gifting and merchandise that our clients and team love - everything Custory delivered was intentional. They helped us stand out in a traditionally conservative industry.",
//       author: "Tan Teck Poh Edmund",
//       position: "Managing Director",
//       image: reviewImage2,
//       logo: singaporeSwimming2
//       // logo: "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/YSHEngineering_logo.png"
//     },
//     {
//       quote: "“Custory has been professional and comprehensive in their approach and strategy to our sales and marketing needs.”",
//       description: "Looking forward to continued close collaborations to achieve the results we are after!”",
//       author: "Min Yee Koh",
//       position: "General Manager",
//       // image: reviewImage2,
//       image: "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/person.png",
//       // image: "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/person2.png",
//       // logo: "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/company_logo2.png"
//       logo: yewSeng
//     }
//   ];

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [isInView, controls]);

//   // Background object animation
//   const objectVariants = {
//     initial: { opacity: 0, scale: 0.5 },
//     visible: (i) => ({
//       opacity: [0.1, 0.2, 0.1],
//       scale: [0.5, 1, 0.8],
//       x: [0, i % 2 === 0 ? 30 : -30, 0],
//       y: [0, i % 3 === 0 ? 20 : -20, 0],
//       transition: {
//         duration: i % 2 === 0 ? 20 : 17,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut",
//         delay: i * 0.6
//       }
//     })
//   };

//   // Heading animations
//   const headingVariants = {
//     initial: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 12,
//         duration: 0.8
//       }
//     }
//   };

//   const paragraphVariants = {
//     initial: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 12,
//         delay: 0.2,
//         duration: 0.8
//       }
//     }
//   };

//   // Card animation with 3D effect
//   const cardVariants = {
//     initial: { y: 100, opacity: 0, rotateX: 10 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 15,
//         delay: 0.4,
//         duration: 1,
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     }
//   };

//   // Card content animations
//   const logoVariants = {
//     initial: { y: 20, opacity: 0, scale: 0.9 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.6
//       }
//     }
//   };

//   const quoteVariants = {
//     initial: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         delay: 0.3
//       }
//     }
//   };

//   const authorVariants = {
//     initial: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         delay: 0.6
//       }
//     }
//   };

//   // Photo animation with floating effect
//   const photoVariants = {
//     initial: { opacity: 0, scale: 0.7, rotate: -10 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 60,
//         damping: 12,
//         duration: 1,
//         delay: 0.7
//       }
//     },
//     float: {
//       y: [0, -10, 0],
//       rotate: [0, 2, 0],
//       transition: {
//         duration: 6,
//         repeat: Infinity,
//         repeatType: "reverse",
//         ease: "easeInOut"
//       }
//     }
//   };

//   // Quote marks animation
//   const quoteMarkVariants = {
//     initial: { opacity: 0, scale: 0 },
//     visible: {
//       opacity: [0, 1, 0.7],
//       scale: [0, 1.2, 1],
//       transition: {
//         duration: 0.8,
//         delay: 0.4
//       }
//     }
//   };

//   // Slider animation
//   const sliderVariants = {
//     initial: { x: 0 },
//     slide: (direction) => ({
//       x: direction === 'left' ? '0%' : '-50%',
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 20,
//         duration: 0.8
//       }
//     })
//   };

//   // Array of shapes for the animated background elements
//   const shapes = ['★', '●', '■', '▲', '◆', '✦'];

//   return (
//     <motion.div
//       ref={ref}
//       className="bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] sm:py-16 py-12 px-4 md:px-20 relative overflow-hidden h-auto flex items-center flex-col justify-center"
//       initial="initial"
//       animate={controls}
//       style={{ perspective: "1200px" }}
//     >
//       {/* Decorative SVG images */}
//       {/* <img
//         src={TopLeft}
//         alt="Decorative Element Top Left"
//         className="absolute top-4 left-4 md:top-8 md:left-8 lg:left-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//       />
//       <img
//         src={TopRight}
//         alt="Decorative Element Top Right"
//         className="absolute top-4 right-4 md:top-8 md:right-8 lg:right-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//       />
//       <img
//         src={BottomLeft}
//         alt="Decorative Element Bottom Left"
//         className="absolute bottom-4 left-4 md:bottom-8 md:left-8 lg:left-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//       />
//       <img
//         src={BottomRight}
//         alt="Decorative Element Bottom Right"
//         className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:right-16 w-[500px] md:w-[150px] lg:w-[250px] xl:w-[350px] h-auto object-contain z-10"
//       /> */}

//       {/* Animated background objects */}
//       {[...Array(25)].map((_, i) => {
//         const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
//         return (
//           <motion.div
//             key={i}
//             className="absolute text-white opacity-10 pointer-events-none"
//             style={{
//               fontSize: `${30 + Math.random() * 60}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               zIndex: 0
//             }}
//             variants={objectVariants}
//             custom={i}
//           >
//             {randomShape}
//           </motion.div>
//         );
//       })}

//       {/* Main heading content */}
//       <div className="text-center text-white max-w-3xl mx-auto relative z-20">
//         <motion.h2
//           className="text-2xl md:text-5xl font-bold"
//           variants={headingVariants}
//         >
//           We deliver and it shows.
//         </motion.h2>
//         <motion.p
//           className="text-sm md:text-[20px] md:leading-[30px] sm:my-16 my-10 max-w-[460px] mx-auto"
//           variants={paragraphVariants}
//         >
//           Trusted by leading brands, we hold ourselves accountable to every promise we make.
//         </motion.p>
//       </div>

//       {/* Slider container */}
//       <motion.div
//         className="w-full max-w-[1200px] mx-auto overflow-hidden relative z-20 border-5"
//         variants={cardVariants}
//       >
//         {/* Navigation dots */}
//         <div className="flex justify-center gap-2  mb-6">
//           {testimonials.map((_, i) => (
//             <button 
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-white scale-125' : 'bg-white/50'}`}
//               aria-label={`View testimonial ${i+1}`}
//             />
//           ))}
//         </div>

//         {/* Testimonial slider */}
//         <motion.div 
//           className="flex w-[200%]"
//           variants={sliderVariants}
//           animate="slide"
//           custom={activeIndex === 0 ? 'left' : 'right'}
//         >
//           {/* First testimonial */}
//           <div className="w-1/2 px-4">
//             <div className="bg-white rounded-[40px] px-8 md:px-16 py-10 shadow-lg relative overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
//               {/* Quote mark decoration */}
//               <motion.div
//                 variants={quoteMarkVariants}
//                 className="absolute text-[150px] font-serif text-orange-100 -left-5 top-0 leading-none z-0"
//               >
//                 "
//               </motion.div>

//               <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
//                 <div className="flex-1 text-center md:text-left">
//                   {/* Logo image */}
//                   {/* <motion.img
//                     variants={logoVariants}
//                     src={testimonials[0].logo}
//                     alt="Company Logo"
//                     className="md:mx-0 mx-auto mb-4 w-[169px] h-[117px] object-contain"
//                   /> */}
//                   <motion.h3
//                     variants={quoteVariants}
//                     className="text-[#2f2828] font-bold text-lg md:text-[26px] mb-2"
//                   >
//                     "{testimonials[0].quote}"
//                   </motion.h3>
//                   <motion.p
//                     variants={quoteVariants}
//                     className="md:text-lg text-base text-[#111204] my-5"
//                   >
//                     "{testimonials[0].description}"
//                   </motion.p>
//                   <motion.div variants={authorVariants}>
//                     <p className="text-[#ff6600] font-bold text-xl mb-6">{testimonials[0].author}</p>
//                     <p className="text-base text-[#111204]">{testimonials[0].position}</p>
//                     <motion.img
//                     variants={logoVariants}
//                     src={testimonials[0].logo}
//                     alt="Company Logo"
//                     className="md:mx-0 mx-auto mb-4 w-[169px] h-[117px] object-contain"
//                   />
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   className="md:w-[325px] w-32 md:h-[325px] h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0"
//                   variants={photoVariants}
//                   animate={["visible", "float"]}
//                   style={{ transformStyle: "preserve-3d" }}
//                 >
//                   <img
//                     src={testimonials[0].image}
//                     alt={testimonials[0].author}
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </motion.div>
//               </div>

//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 to-transparent rounded-[40px] pointer-events-none"
//                 animate={{
//                   opacity: [0, 0.2, 0],
//                   transition: {
//                     duration: 5,
//                     repeat: Infinity,
//                     repeatType: "reverse"
//                   }
//                 }}
//               />
//             </div>
//           </div>

//           {/* Second testimonial */}
//           <div className="w-1/2 px-4">
//             <div className="bg-white rounded-[40px] px-8 md:px-16 py-10 shadow-lg relative overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
//               {/* Quote mark decoration */}
//               <motion.div
//                 variants={quoteMarkVariants}
//                 className="absolute text-[150px] font-serif text-orange-100 -left-5 top-0 leading-none z-0"
//               >
//                 "
//               </motion.div>

//               <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
//                 <div className="flex-1 text-center md:text-left">
//                   {/* Logo image */}
//                   {/* <motion.img
//                     variants={logoVariants}
//                     src={testimonials[1].logo}
//                     alt="Company Logo"
//                     className="md:mx-0 mx-auto mb-4 w-[169px] h-[117px] object-contain"
//                   /> */}
//                   <motion.h3
//                     variants={quoteVariants}
//                     className="text-[#2f2828] font-bold text-lg md:text-[26px] mb-2"
//                   >
//                     "{testimonials[1].quote}"
//                   </motion.h3>
//                   <motion.p
//                     variants={quoteVariants}
//                     className="md:text-lg text-base text-[#111204] my-5"
//                   >
//                     "{testimonials[1].description}"
//                   </motion.p>
//                   <motion.div variants={authorVariants}>
//                     <p className="text-[#ff6600] font-bold text-xl mb-6">{testimonials[1].author}</p>
//                     <p className="text-base text-[#111204]">{testimonials[1].position}</p>
//                   </motion.div>
//                   <motion.img
//                     variants={logoVariants}
//                     src={testimonials[1].logo}
//                     alt="Company Logo"
//                     className="md:mx-0 mx-auto mb-4 w-[169px] h-[117px] object-contain"
//                   />
//                 </div>

//                 <motion.div
//                   className="md:w-[325px] w-32 md:h-[325px] h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0"
//                   variants={photoVariants}
//                   animate={["visible", "float"]}
//                   style={{ transformStyle: "preserve-3d" }}
//                 >
//                   <img
//                     src={testimonials[1].image}
//                     alt={testimonials[1].author}
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </motion.div>
//               </div>

//               {/* Animated gradient overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 to-transparent rounded-[40px] pointer-events-none"
//                 animate={{
//                   opacity: [0, 0.2, 0],
//                   transition: {
//                     duration: 5,
//                     repeat: Infinity,
//                     repeatType: "reverse"
//                   }
//                 }}
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Navigation arrows */}
//         <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 z-30 pointer-events-none">
//           <button 
//             onClick={() => setActiveIndex(0)}
//             className={`w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-auto transition-opacity ${activeIndex === 0 ? 'opacity-50 cursor-default' : 'opacity-100 hover:bg-white'}`}
//             disabled={activeIndex === 0}
//             aria-label="Previous testimonial"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M15 18l-6-6 6-6" />
//             </svg>
//           </button>
//           <button 
//             onClick={() => setActiveIndex(1)}
//             className={`w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-auto transition-opacity ${activeIndex === 1 ? 'opacity-50 cursor-default' : 'opacity-100 hover:bg-white'}`}
//             disabled={activeIndex === 1}
//             aria-label="Next testimonial"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M9 18l6-6-6-6" />
//             </svg>
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Trusted_Brand;
















































































import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import TopLeft from '../../assets/12.svg';
import TopRight from '../../assets/1.svg';
import BottomRight from '../../assets/31.svg';
import BottomLeft from '../../assets/3.svg';
import reviewImage2 from '../../assets/review-image2.svg'
import yewSeng from '../../assets/yewSeng2.svg'
import singaporeSwimming2 from '../../assets/singaporeSwimming2.svg'

const Trusted_Brand = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRefs = useRef([]);
  const [slideHeight, setSlideHeight] = useState('auto');

  // Testimonial data
  const testimonials = [
    {
      quote: "Custory didn't just elevate our brand. They redefined how we communicate value in our industry.",
      description: "Samantha and the team approached our brand strategy with business-first thinking. From a website that speaks clearly to clients, to premium gifting and merchandise that our clients and team love - everything Custory delivered was intentional. They helped us stand out in a traditionally conservative industry.",
      author: "Tan Teck Poh Edmund",
      position: "Managing Director",
      image: reviewImage2,
      logo: singaporeSwimming2
    },
    {
      quote: "Custory has been professional and comprehensive in their approach and strategy to our sales and marketing needs.",
      description: "Looking forward to continued close collaborations to achieve the results we are after!",
      author: "Min Yee Koh",
      position: "General Manager",
      image: "https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/person.png",
      logo: yewSeng
    }
  ];

  // Calculate dynamic height for the slider
  useEffect(() => {
    const updateHeight = () => {
      if (testimonialRefs.current[0] && testimonialRefs.current[1]) {
        const height1 = testimonialRefs.current[0].getBoundingClientRect().height;
        const height2 = testimonialRefs.current[1].getBoundingClientRect().height;
        const maxHeight = Math.max(height1, height2);
        if (maxHeight > 0) {
          setSlideHeight(`${maxHeight}px`);
        }
      }
    };
    
    // Initial calculation
    updateHeight();
    
    // Update on resize
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Animation variants
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
        delay: i * 0.6
      }
    })
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
        duration: 0.8
      }
    }
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
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    initial: { 
      y: 100, 
      opacity: 0, 
      rotateX: 10 
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
        staggerChildren: 0.2
      }
    }
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
        duration: 0.6
      }
    }
  };

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  const authorVariants = {
    initial: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.6
      }
    }
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
        delay: 0.7
      }
    },
    float: {
      y: [0, -10, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const quoteMarkVariants = {
    initial: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0.7],
      scale: [0, 1.2, 1],
      transition: {
        duration: 0.8,
        delay: 0.4
      }
    }
  };

  const sliderVariants = {
    initial: { x: 0 },
    slide: (direction) => ({
      x: direction === 'left' ? '0%' : '-50%',
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.8
      }
    })
  };

  const shapes = ['★', '●', '■', '▲', '◆', '✦'];

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-b from-[#FF6600] via-[39%] via-[#FF711B] to-[#FFB669] sm:py-16 py-12 px-4 md:px-20 relative overflow-hidden h-auto flex items-center flex-col justify-center"
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
              zIndex: 0
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
          Trusted by leading brands, we hold ourselves accountable to every promise we make.
        </motion.p>
      </div>

      {/* Slider container - Now with dynamic height */}
      <motion.div
        className="w-full max-w-[1200px] mx-auto overflow-hidden relative z-20"
        variants={cardVariants}
      >
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mb-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-white scale-125' : 'bg-white/50'}`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Testimonial slider with dynamic height */}
        <motion.div
          className="flex w-[200%]"
          variants={sliderVariants}
          animate="slide"
          custom={activeIndex === 0 ? 'left' : 'right'}
          style={{ height: slideHeight, transition: "height 0.3s ease" }}
        >
          {/* First testimonial */}
          <div className="w-1/2 px-4">
            <div 
              ref={el => testimonialRefs.current[0] = el} 
              className="bg-white rounded-[40px] px-4 sm:px-8 md:px-10 py-10 shadow-lg relative overflow-hidden h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Quote mark decoration */}
              <motion.div
                variants={quoteMarkVariants}
                className="absolute text-[80px] md:text-[150px] font-serif text-orange-100 -left-2 md:-left-5 top-0 leading-none z-0"
              >
                "
              </motion.div>

              <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="flex-1 text-center md:text-left">
                  <motion.h3
                    variants={quoteVariants}
                    className="text-[#2f2828] font-bold text-lg md:text-[26px] mb-2"
                  >
                    "{testimonials[0].quote}"
                  </motion.h3>
                  <motion.p
                    variants={quoteVariants}
                    className="md:text-lg text-base text-[#111204] my-5"
                  >
                    "{testimonials[0].description}"
                  </motion.p>
                  <motion.div variants={authorVariants} className="mb-4">
                    <p className="text-[#ff6600] font-bold text-xl mb-2">{testimonials[0].author}</p>
                    <p className="text-base text-[#111204]">{testimonials[0].position}</p>
                  </motion.div>
                  {/* Logo with proper sizing and constraints */}
                  <motion.div
                    variants={logoVariants}
                    className="md:mx-0 mx-auto mb-4 h-[80px] md:h-[117px] flex items-center"
                  >
                    <img
                      src={testimonials[0].logo}
                      alt="Company Logo"
                      className="max-h-full w-auto object-contain"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0"
                  variants={photoVariants}
                  animate={["visible", "float"]}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].author}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 to-transparent rounded-[40px] pointer-events-none"
                animate={{
                  opacity: [0, 0.2, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              />
            </div>
          </div>

          {/* Second testimonial */}
          <div className="w-1/2 px-4">
            <div 
              ref={el => testimonialRefs.current[1] = el}
              className="bg-white rounded-[40px] px-4 sm:px-8 md:px-16 py-10 shadow-lg relative overflow-hidden h-full" 
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Quote mark decoration */}
              <motion.div
                variants={quoteMarkVariants}
                className="absolute text-[80px] md:text-[150px] font-serif text-orange-100 -left-2 md:-left-5 top-0 leading-none z-0"
              >
                "
              </motion.div>

              <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="flex-1 text-center md:text-left">
                  <motion.h3
                    variants={quoteVariants}
                    className="text-[#2f2828] font-bold text-lg md:text-[26px] mb-2"
                  >
                    "{testimonials[1].quote}"
                  </motion.h3>
                  <motion.p
                    variants={quoteVariants}
                    className="md:text-lg text-base text-[#111204] my-5"
                  >
                    "{testimonials[1].description}"
                  </motion.p>
                  <motion.div variants={authorVariants} className="mb-4">
                    <p className="text-[#ff6600] font-bold text-xl mb-2">{testimonials[1].author}</p>
                    <p className="text-base text-[#111204]">{testimonials[1].position}</p>
                  </motion.div>
                  {/* Logo with same styling as first testimonial */}
                  <motion.div
                    variants={logoVariants}
                    className="md:mx-0 mx-auto mb-4 h-[80px] md:h-[117px] flex items-center"
                  >
                    <img
                      src={testimonials[1].logo}
                      alt="Company Logo"
                      className="max-h-full w-auto object-contain"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0"
                  variants={photoVariants}
                  animate={["visible", "float"]}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={testimonials[1].image}
                    alt={testimonials[1].author}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 to-transparent rounded-[40px] pointer-events-none"
                animate={{
                  opacity: [0, 0.2, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Navigation arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 z-30 pointer-events-none">
          <button
            onClick={() => setActiveIndex(0)}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-auto transition-opacity ${activeIndex === 0 ? 'opacity-50 cursor-default' : 'opacity-100 hover:bg-white'}`}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex(1)}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-auto transition-opacity ${activeIndex === 1 ? 'opacity-50 cursor-default' : 'opacity-100 hover:bg-white'}`}
            disabled={activeIndex === 1}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Trusted_Brand;
