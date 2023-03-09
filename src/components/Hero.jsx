import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#40f655] sm:-mt-20" />
          <div className="w-1 sm:h-80 h-40" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white sm:text-xl sm:-mt-14`}
          >
            Hi, I'm <span className="text-[#e8f13f]">Irfan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 sm:text-lg`}>
            I develop user <br className="sm:block hidden" />
            interfaces and web applications and I bring your ideas into life.😎
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
