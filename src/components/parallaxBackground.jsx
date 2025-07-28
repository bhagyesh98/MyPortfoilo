"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    {
      stiffness: 100,
      damping: 30,
      mass: 0.5,
    }
  );

  return (
    <section className="absolute inset-0 bg-black/0 pointer-events-none -z-10">
      <div className="relative h-full overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url(/assets/socials/imagebackground.png)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
