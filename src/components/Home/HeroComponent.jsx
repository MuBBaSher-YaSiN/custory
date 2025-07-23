import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { easing } from "maath";
import { motion } from "framer-motion";
import {
  useGLTF,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HeroComponent = ({ position = [0, 0, 2.5], fov = 25 }) => {
  const transition = { ease: "linear", duration: 1.5 };
  const textVariants = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: 100, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  const vidRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced && vidRef.current) {
      setIsVideoPlaying(false);
      vidRef.current.pause();
    }
  }, []);

  const generateParticles = () => {
    const particleCount = isMobile ? 15 : isTablet ? 25 : 40;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * (isMobile ? 2 : 3) + 1,
        initialX: Math.random() * 100,
        initialY: -10 - Math.random() * 10,
        xMove: (Math.random() - 0.5) * (isMobile ? 30 : 70),
        duration: 7 + Math.random() * (isMobile ? 5 : 15),
        delay: Math.random() * 3,
        opacity: Math.random() * 0.3 + 0.2,
      });
    }
    
    return newParticles;
  };
  
  const [particles] = useState(generateParticles);

  const floatingGradient = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: [0.4, 0.5, 0.4], // Increased opacity for visibility
      y: [0, isMobile ? -8 : isTablet ? -12 : -15],
      x: [0, isMobile ? 2 : isTablet ? 3 : 5],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: isMobile ? 6 : 8,
          ease: "easeInOut",
        },
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: isMobile ? 7 : 9,
          ease: "easeInOut",
        },
        opacity: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: isMobile ? 5 : 7,
          ease: "easeInOut",
        },
      },
    },
  };

  const floatingHeadline = (i) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: i * 0.4 },
    },
    floating: {
      y: [0, isMobile ? -(1 + i * 0.3) : isTablet ? -(2 + i * 0.5) : -(3 + i)],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5 + i * 0.8,
        ease: "easeInOut",
      },
    },
  });

  const floatingStars = (i) => ({
    initial: { opacity: 0, scale: 0.5, rotate: 0 }, // Start smaller
    animate: {
      opacity: 1,
      scale: [2.5, 2.5, 2.5], // Increase to 1.5 then settle at 1
      rotate: 360,
      transition: {
        scale: { duration: 1.5, ease: "easeOut" }, // Smoother size increase
        rotate: {
          repeat: Infinity,
          duration: 20 + i * 5,
          ease: "linear",
        },
        opacity: { duration: 1, delay: 1.2 },
      },
    },
    floating: {
      y: [0, isMobile ? -(2 + i) : isTablet ? -(4 + i) : -(7 + i * 2)],
      x: [0, isMobile ? (1 + i) : isTablet ? (2 + i) : (4 + i * 2)],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 7 + i * 1.5,
        ease: "easeInOut",
      },
    },
  });

  const buttonFloat = (i) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2 + i * 0.3 }
    },
    hover: { 
      scale: 1.05,
      y: isMobile ? -2 : isTablet ? -3 : -5,
      transition: { duration: 0.4 }
    },
    tap: { scale: 0.98, transition: { duration: 0.2 } },
    floating: {
      y: [0, isMobile ? -2 : isTablet ? -3 : -4],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4 + i,
        ease: "easeInOut",
      }
    }
  });

  const footerTextFloat = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, delay: 3 } },
    floating: {
      y: [0, isMobile ? -1 : isTablet ? -2 : -3],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 6,
        ease: "easeInOut",
      }
    }
  };

  const lineFloat = (i) => ({
    initial: { width: 0 },
    animate: { width: "100px", transition: { duration: 1.5, delay: 3 } },
    floating: {
      y: [0, isMobile ? -1 : -2],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "easeInOut",
      }
    }
  });

  // Define shadow size based on screen size
  const shadowSize = isMobile ? "350px" : isTablet ? "450px" : "600px";

  return (
    <>
      {/* Circular Gradient Glow - Using inline styles instead of Tailwind classes */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
        <motion.div
          variants={floatingGradient}
          initial="initial"
          animate="animate"
          style={{
            width: shadowSize,
            height: shadowSize,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 102, 0, 0.3) 0%, rgba(255, 102, 0, 0.15) 40%, transparent 70%)",
            filter: "blur(40px)",
            position: "absolute"
          }}
        />
      </div>
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#ff6900]"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
              opacity: particle.opacity,
            }}
            animate={{
              y: ["0vh", "100vh"],
              x: [0, particle.xMove],
              opacity: [particle.opacity, particle.opacity, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <section className="text-center sm:py-10 sm:pb-0 py-0 px-4 relative overflow-hidden sm:mt-24 mt-0 pb-0">
        <div className="relative px-2 sm:px-4 pt-10 overflow-hidden lg:min-h-[500px] h-auto">
          <h1 className="relative z-10 text-center text-3xl sm:text-5xl md:text-6xl md:leading-[65px] lg:text-[90px] lg:leading-[103px] font-bold max-w-5xl mx-auto sm:px-4 px-1 font-[Karla]">
            <motion.span 
              className="text-black block pb-2"
              variants={floatingHeadline(0)}
              initial="initial"
              animate={["animate", "floating"]}
            >
              Your Custom Story,
            </motion.span>
            <motion.span 
              className="text-[#FF6600] block pb-2"
              variants={floatingHeadline(1)}
              initial="initial"
              animate={["animate", "floating"]}
            >
              Designed And
            </motion.span>
            <motion.span 
              className="text-[#FF6600] block"
              variants={floatingHeadline(2)}
              initial="initial"
              animate={["animate", "floating"]}
            >
              Delivered Better.
            </motion.span>
            
            <div className="absolute right-[10px] top-[17.5%] w-10 h-10 rounded-full opacity-70 lg:block hidden">
              <motion.img 
                variants={floatingStars(0)}
                initial="initial"
                animate={["animate", "floating"]}
                src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/star-icon.png'} 
                alt="Star Icon" 
              />
            </div>
            
            <motion.p
              variants={floatingHeadline(3)}
              initial="initial"
              animate={["animate", "floating"]}
              className="text-black sm:text-xl text-base font-normal mt-3 max-w-[627px] mx-auto"
              style={{ fontFamily: "'SUIT Variable', 'Poppins', sans-serif" }}
            >
              At Custory, we shape brand stories that live beyond the screen — in
              the hands, homes, and hearts of the people who matter to you.
            </motion.p>
            
            <div className="absolute left-[17%] bottom-[-13%] w-6 h-6 rounded-full lg:block hidden">
              <motion.img 
                variants={floatingStars(1)}
                initial="initial"
                animate={["animate", "floating"]}
                src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/star-icon.png'} 
                alt="Star Icon" 
              />
            </div>
          </h1>
        </div>
        
        <div className="flex justify-center gap-4 flex-wrap relative max-lg:mt-16">
          <div className="relative gap-8 flex flex-wrap justify-center">
            <motion.button 
              variants={buttonFloat(0)}
              initial="initial"
              animate={["animate", "floating"]}
              whileHover="hover"
              whileTap="tap"
              className="bg-[#FF6600] text-white cursor-pointer font-medium py-[18px] px-6 rounded-md text-base hover:bg-orange-600 transition max-sm:flex-grow z-10"
            >
              <a href="https://calendly.com/admin-custory/30min" target="_blank" className="no-underline text-white hover:no-underline">
                Book a Call with Our Team
              </a>
            </motion.button>
            
            <motion.button
              variants={buttonFloat(1)}
              initial="initial"
              animate={["animate", "floating"]}
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate("/upgrade")}
              className="bg-[#FF6600] text-white cursor-pointer font-medium py-[18px] px-16 rounded-md text-base hover:bg-orange-600 transition max-sm:flex-grow z-10"
            >
              Shop Now
            </motion.button>
            
            <div className="absolute right-[-8.5%] bottom-[84%] w-8 h-8 rounded-full lg:block hidden">
              <motion.img 
                variants={floatingStars(2)}
                initial="initial"
                animate={["animate", "floating"]}
                src={'https://custorybucket.s3.ap-southeast-1.amazonaws.com/Landing/star-icon.png'} 
                alt="Star Icon" 
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex items-center justify-center gap-8 max-sm:gap-2">
          <motion.div 
            variants={lineFloat(0)}
            initial="initial"
            animate={["animate", "floating"]}
            className="w-[100px] h-0.5 bg-[#FF6600] rounded-full" 
          />
          <motion.p 
            variants={footerTextFloat}
            initial="initial"
            animate={["animate", "floating"]}
            className="uppercase sm:text-[15px] text-[10px] font-bold tracking-[1.425px] text-black"
          >
            Trusted by brands that get it
          </motion.p>
          <motion.div 
            variants={lineFloat(1)}
            initial="initial"
            animate={["animate", "floating"]}
            className="w-[130px] h-0.5 bg-[#FF6600] rounded-full" 
          />
        </div>
      </section>
    </>
  );
};

function Shirt(props) {
  const texture = useTexture(`/custorytransparent.png`);
  const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb");
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, "#ff7f30", 0.25, delta)
  );

  return (
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      {...props}
      dispose={null}
    >
      <Decal
        position={[0, 0.08, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.28}
        opacity={0.6}
        map={texture}
      />
    </mesh>
  );
}

function Backdrop() {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.35}
      scale={1}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={9}
        radius={9}
        intensity={5.5}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={0.9}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

function CameraRig({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 2], 0.25, delta);
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

useGLTF.preload("/shirt_baked_collapsed.glb");

export default HeroComponent;
