import React from 'react';
import { motion } from "framer-motion";
import bg1 from '../assets/zodak/vectors/Asset11.png';
import bg3 from '../assets/zodak/1x/Asset 2.png';
import bg4 from '../assets/zodak/1x/Asset 3.png';
import bg5 from '../assets/zodak/1x/Asset 6.png';
import bg6 from '../assets/zodak/shapes/Asset 31.svg';
import bg7 from '../assets/zodak/1x/Asset 4.png';
import bg8 from '../assets/zodak/1x/Asset 5.png';
import bg9 from '../assets/zodak/1x/Asset 7.png';

const iconVariants = {
  animate: { y: [10, -10] }, // Up-and-down motion
};

const Secondpage = () => {
  return (
    <div className="h-screen relative bg-white">
      <img
        src={bg1}
        alt="bg1"
        className="absolute w-[30%] h-[75%] bg-cover bottom-0 right-0 transform scale-x-[-1]"
      />
      <div className="flex justify-center items-center h-full">
        <div className="flex w-9/12 h-full p-[10%] items-center space-x-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate="animate"
            variants={iconVariants}
            transition={{
              duration: 0.5, // Duration for whileInView animation
              ease: "easeInOut",
              y: {
                duration: 3, // Duration for one complete up-down cycle
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="flex flex-col space-y-4"
          >
            <div className="flex flex-row space-x-4 justify-center">
              <img
                src={bg3}
                alt="bg3"
                className="relative w-[50%] bg-cover bg-center transition-transform duration-300 hover:scale-105"
              />
              <img
                src={bg4}
                alt="bg4"
                className="relative w-[50%] bg-cover bg-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex flex-row space-x-4 justify-center">
              <img
                src={bg5}
                alt="bg5"
                className="relative w-[50%] bg-cover bg-center transition-transform duration-300 hover:scale-105"
              />
              <img
                src={bg9}
                alt="bg9"
                className="relative w-[50%] bg-cover bg-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate="animate"
            variants={iconVariants}
            transition={{
              duration: 0.5, // Duration for whileInView animation
              ease: "easeInOut",
              y: {
                duration: 3, // Duration for one complete up-down cycle
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="flex flex-col space-y-4"
          >
            <div className="flex flex-row space-x-4 justify-center">
              <img
                src={bg7}
                alt="bg7"
                className="relative w-[50%] bg-cover bg-center transition-transform duration-300 hover:scale-105"
              />
              <img
                src={bg8}
                alt="bg8"
                className="relative w-[50%] bg-cover bg-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex flex-row space-x-4 justify-center">
              <img
                src={bg5}
                alt="bg5"
                className="relative w-[50%] bg-cover bg-center transition-transform duration-300 hover:scale-105"
              />
              <img
                src={bg6}
                alt="bg6"
                className="relative w-[50%] bg-cover bg-center transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
