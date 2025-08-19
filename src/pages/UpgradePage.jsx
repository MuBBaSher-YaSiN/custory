import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Layout/Header";
import { FaTiktok, FaTelegram } from 'react-icons/fa';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const UpgradePage = () => {
  const starVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: index => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: index * 0.3
      }
    }),
    float: index => ({
      y: [0, index % 2 === 0 ? -10 : -15, 0],
      x: [0, index % 2 === 0 ? 8 : -8, 0],
      transition: {
        duration: index % 2 === 0 ? 6 : 7,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }
    })
  };

  const SocialIcon = ({ Icon, href, label }) => (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-wrapper"
      whileHover={{ scale: 1.2, color: "#FF6600" }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Icon size={25} className="transition-colors duration-300" />
    </motion.a>
  );

  const socialLinks = [
    { Icon: AiOutlineInstagram, href: "https://www.instagram.com/custoryofficial/", label: "Follow us on Instagram" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@custoryofficial", label: "Follow us on TikTok" },
    { Icon: AiOutlineFacebook, href: "https://www.facebook.com/people/Custory/61556835771548/", label: "Follow us on Facebook" },
    { Icon: FaTelegram, href: "https://t.me/custory", label: "Join us on Telegram" },
    { Icon: AiOutlineLinkedin, href: "https://www.linkedin.com/company/custory.co", label: "Follow us on LinkedIn" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-[93vh] w-full overflow-hidden flex flex-col justify-between font-sans bg-white relative">
        
        {/* Main Content */}
        <div className="flex-grow flex flex-col mt-36 justify-center items-center text-center relative px-4 z-10">
          
          {/* Centered background glow behind heading */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2  blur-3xl bg-gradient-to-b from-[#fff9f5] to-[#FFE8DD] z-0 pointer-events-none"></div>

          {/* Stars */}
          <motion.div
            className="absolute left-[20%] top-[20%] w-24 h-24 md:w-32 md:h-32 z-10"
            initial="initial"
            animate={["animate", "float"]}
            variants={starVariants}
            custom={0}
          >
            <div className="absolute inset-0 blur-3xl bg-[#FF6600] opacity-5 scale-150"></div>
            <div className="absolute inset-0 blur-xl bg-[#FF6600] opacity-10 scale-125"></div>
            <div className="absolute right-[-8.5%] bottom-[84%] w-15 h-15 rounded-full lg:block hidden">
              <motion.img
                animate={["animate", "floating"]}
                src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/star-icon.png'}
                alt="Star Icon"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-[15%] top-[1%] w-24 h-24 md:w-32 md:h-32 z-10"
            initial="initial"
            animate={["animate", "float"]}
            variants={starVariants}
            custom={1}
          >
            <div className="absolute inset-0 blur-2xl bg-[#FF6600] opacity-5 scale-150"></div>
            <div className="absolute inset-0 blur-xl bg-[#FF6600] opacity-10 scale-125"></div>
            <div className="absolute right-[-8.5%] bottom-[84%] w-18 h-18 rounded-full lg:block hidden">
              <motion.img
                animate={["animate", "floating"]}
                src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/star-icon.png'}
                alt="Star Icon"
              />
            </div>
          </motion.div>

          {/* Headings */}
          <div className="z-10">
            <h1 className="text-black font-black text-5xl sm:text-6xl md:text-8xl tracking-tight font-bold leading-tight">
              Our Platform
            </h1>
            <h1 className="text-black font-black text-5xl sm:text-6xl md:text-8xl tracking-tight font-bold leading-tight">
              is getting <span className="text-[#FF6600]">an upgrade!</span>
            </h1>

            <p className="max-w-5xl mx-auto text-gray-800 text-base md:text-xl leading-relaxed mt-10 mb-4 px-4">
              We're currently fine-tuning things behind the scenes to bring you a better experience. We'll be back online shortly. In the meantime, feel free to reach out to us at <span className="font-bold">admin@custory.co</span> for any orders or inquiries. <span className="font-bold">We're here to help!</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-gray-600 text-sm">
              © 2020–2025 Custory - All Rights Reserved
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  Icon={social.Icon}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpgradePage;
