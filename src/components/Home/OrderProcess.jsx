import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const processList = [
  {
    number: 1,
    name: "SELECT",
    description: <span>Products that <br/> aren't Boring</span>
  },
  {
    number: 2,
    name: "DESIGN",
    description: <span>Create your <br/> Custom design</span>
  },
  {
    number: 3,
    name: "SHIP",
    description: <span>Get it shipped <br/> Internationally</span>
  },
];

const FAQComponent = () => {
  const [dropMenu, setDropMenu] = useState([]);
  const [isFormFocused, setIsFormFocused] = useState(false);

  const FAQ_array = [
    // {heading: "Do you work with both businesses and individuals?", answer: "Yes. We support brands, agencies, and creators alike — whether you're launching a campaign or customizing merch for fun, Custory has you covered."},
    // {heading: "What makes Custory different from other merchandisers?", answer: "We offer end-to-end creative services with no minimum order quantity, instant quotations, and a seamless process from branding to delivery — all tailored to your goals."},
    // {heading: "How fast can I receive my custom products?", answer: "For orders placed through our Shop page without custom design requests, we offer two delivery options: Express Shipping (7–14 business days) and Standard Shipping (up to 4 weeks)."},
    // {heading: "How do I get started?", answer: "Whether you're a business or an individual, getting started is easy — book a call with our team for tailored B2B support, or start designing directly on our Shop page for fast, self-service ordering."},

<<<<<<< HEAD
    {heading: "What is Custory and what does it do?", answer: "Custory is a creative studio that helps businesses design and deliver better brand experiences through strategy, storytelling, and merchandise. Our name stands for “custom story” - design-led solutions that drive real results."},
    {heading: "Do you work with both businesses and individuals?", answer: "Yes. We support brands, agencies, and creators alike — whether you’re launching a campaign or customizing merch for fun, Custory has you covered."},

    {heading: "What makes Custory different from other merchandisers?", answer: "We offer end-to-end creative services with no minimum order quantity, instant quotations, and a seamless process from branding to delivery — all tailored to your goals."},

    {heading: "How fast can I receive my custom products?", answer: "For orders placed through our Shop page without custom design requests, we offer two delivery options: Express Shipping (7–14 business days) and Standard Shipping (up to 4 weeks). "},

    {heading: "How do I get started?", answer: "Whether you're a business or an individual, getting started is easy — book a call with our team for tailored B2B support, or start designing directly on our Shop page for fast, self-service ordering."},
=======
    {heading: "What is Custory and what does it do?", answer: "Custory is a creative studio that helps businesses design and deliver better brand experiences through strategy, storytelling, and merchandise. Our name stands for “custom story” and reflects our focus design-led solutions that drive real results."},
    {heading: "Do you work with both businesses and individuals?", answer: "We support brands, agencies, and creators alike. Whether you’re launching a campaign or customizing merch just for fun, Custory has you covered."},

    {heading: "What makes Custory merchandise different from other merchandisers?", answer: "We offer end-to-end creative services with no minimum order quantity, instant quotations, and a seamless process from branding to delivery, all tailored to your goals."},

    {heading: "How fast can I receive my custom products?", answer: "For orders placed through our Shop page without custom design requests, we offer two delivery options: Express Shipping (7–14 business days) and Standard Shipping (up to 4 weeks). "},

    {heading: "How do I get started?", answer: "Whether you're a business or an individual, getting started is easy. Book a call with our team for tailored B2B support, or start designing directly on our Shop page for fast, self-service ordering."},
>>>>>>> origin/main
  ];

  // Floating animation variants
  const floatingTitle = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  
  const floatingItem = index => ({
    animate: {
      y: [0, -8, 0],
      x: index % 2 === 0 ? [0, 5, 0] : [0, -5, 0],
      transition: {
        duration: 6 + index,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: index * 0.5
      }
    }
  });
  
  const floatingButton = {
    animate: {
      y: [0, -5, 0],
      boxShadow: [
        '0px 4px 8px rgba(255, 102, 0, 0.2)',
        '0px 8px 16px rgba(255, 102, 0, 0.3)',
        '0px 4px 8px rgba(255, 102, 0, 0.2)',
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: '0px 10px 20px rgba(255, 102, 0, 0.4)'
    },
    tap: { scale: 0.98 }
  };
  
  const floatingDecoration = index => ({
    animate: {
      y: [0, -(10 + index * 5), 0],
      x: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
      rotate: [0, index % 2 === 0 ? 10 : -10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 8 + index * 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: index * 1.2
      }
    }
  });
  
  const floatingChevron = {
    animate: {
      y: [0, -2, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  
  const floatingForm = {
    rest: { y: 0 },
    hover: { y: -5 },
    focus: { 
      y: -10, 
      boxShadow: '0px 15px 25px rgba(255, 102, 0, 0.15)',
      transition: { type: "spring", stiffness: 400, damping: 20 }
    },
    floating: {
      y: [0, -7, 0],
      boxShadow: [
        '0px 5px 15px rgba(0, 0, 0, 0.05)',
        '0px 15px 25px rgba(255, 102, 0, 0.1)',
        '0px 5px 15px rgba(0, 0, 0, 0.05)',
      ],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  return (
    <div className="md:w-[550px] w-full mx-auto max-md:px-8 relative">
      {/* Floating background decorations */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-orange-200 to-orange-100 opacity-40 pointer-events-none"
          style={{
            width: 20 + Math.random() * 80,
            height: 20 + Math.random() * 80,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0
          }}
          variants={floatingDecoration(i)}
          animate="animate"
        />
      ))}
      
      <motion.div 
        className="mb-12 text-center relative z-10"
        variants={floatingTitle}
        animate="animate"
      >
        <motion.h1 
          className="sm:text-5xl text-3xl font-bold text-[#FF6600] mb-2 text-center"
          variants={floatingTitle}
          animate="animate"
        >
          FAQ's
          <motion.div 
            className="h-1 bg-orange-300 rounded-full w-16 mx-auto mt-2"
            animate={{ width: ["30%", "100%", "30%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.h1>
        <motion.p 
          className="sm:text-lg text-base text-[#FF6600] mt-4"
          animate={{ 
            opacity: [0.8, 1, 0.8],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          Providing answers to your questions
        </motion.p>
      </motion.div>

      <div className="space-y-8 mx-auto relative z-10">
        {FAQ_array.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-2xl bg-white shadow-lg px-6 py-2 min-h-[86px] flex flex-col justify-center sm:w-[543px] w-auto"
            variants={floatingItem(index)}
            animate="animate"
            whileHover={{ 
              y: -15, 
              boxShadow: "0px 15px 30px rgba(255, 102, 0, 0.15)",
              transition: { type: "spring", stiffness: 300, damping: 15 }
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="sm:text-[18px] text-base font-semibold text-black">
                {item?.heading}
              </h3>
              <motion.span
                className="cursor-pointer bg-[#FF6600] flex-shrink-0 rounded-full sm:w-12 w-9 sm:h-12 h-9 flex items-center justify-center"
                onClick={() => {
                  if (!dropMenu.includes(index)) {
                    setDropMenu([...dropMenu, index]);
                  } else {
                    const filterDropMenu = dropMenu.filter(
                      (item) => item !== index
                    );
                    setDropMenu([...filterDropMenu]);
                  }
                }}
                variants={floatingChevron}
                animate="animate"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 5px 15px rgba(255, 102, 0, 0.3)",
                  backgroundColor: "#e84c16",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {!dropMenu.includes(index) ? (
                  <FaChevronDown size={18} color="#FFF" />
                ) : (
                  <FaChevronUp size={18} color="#FFF" />
                )}
              </motion.span>
            </div>
            {dropMenu.includes(index) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: "auto",
                  transition: { duration: 0.5, ease: "easeOut" }
                }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p className="text-black text-base py-4">
                  {item?.answer}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-8 relative z-10">
        {/* <motion.div
          variants={floatingForm}
          initial="rest"
          animate={["floating"]}
          whileHover="hover"
          whileFocus="focus"
          className="relative rounded-xl"
        >
          <textarea
            className="sm:w-[543px] w-auto border-2 p-2 rounded-xl border-[#FF6600] resize-none outline-0 focus:border-blue-600 bg-white"
            placeholder="Ask us what you want to know...."
            rows={5}
            onFocus={() => setIsFormFocused(true)}
            onBlur={() => setIsFormFocused(false)}
          ></textarea>
        </motion.div>
         */}
        {/* <div className="flex items-center justify-between">
          <motion.p 
            className="text-[14px] max-w-[242px] text-black max-sm:max-w-[200px]"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              y: [0, -3, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1
              }
            }}
          >
            We will answer your questions via email within 48 hours.
          </motion.p>
          
          <motion.button
            className="bg-[#FF6600] text-white px-12 text-base py-3 rounded-[8px] font-semibold relative overflow-hidden"
            variants={floatingButton}
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
           
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-300/30 to-orange-400/0"
              animate={{
                x: ["-100%", "100%", "-100%"],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 3
                }
              }}
            />
            <span className="relative z-10">Send</span>
          </motion.button>
        </div> */}
      </div>
    </div>
  );
}

export default FAQComponent;



