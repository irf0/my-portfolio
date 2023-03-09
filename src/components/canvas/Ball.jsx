import React from "react";
import Tilt from "react-tilt";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

const BallCanvas = ({ index, title, icon }) => {
  return (
    <Tilt className="h-20">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="ease-out cursor-pointer p-[5px] rounded-full shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-2 rounded-full sm:h-20 sm:w-20 flex justify-center items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 sm:p-2 p-1"
          />
        </div>
      </motion.div>
    </Tilt>
  );
};
export default BallCanvas;
