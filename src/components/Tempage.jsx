import React from "react";
import rulingImg from "../assets/zodak/images/Asset 3.png";
import spyralimage from "../assets/zodak/images/spyralimage.png";
import { motion } from "framer-motion";

const Tempage = () => {
  return (
    <div className="flex flex-row">
      <div className="relative h-screen w-10/12">
        <img src={rulingImg} alt="" className="h-full object-cover brightness-50" />
        <h1 className="absolute top-1/2 left-[29%] text-4xl text-end font-bold text-white">
          ZODAK SAFETY <br /> GLOVES GIVE <br />
          EXCEPTIONAL PROTECTION
        </h1>
      </div>
      <div className="w-1/2 relative flex justify-center items-end">
        <motion.div  className="absolute top-[23%] left-1/2 transform -translate-x-1/2 -translate-y-[120%] z-10 text-center font-semibold text-2xl text-black">
         <span className="text-primary">SAFETY </span>  SOLUTIONS <br /> ACROSS INDUSTRIES
        </motion.div>
        <img
          src={spyralimage}
          alt=""
          className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-[55%] mr-10 z-10 space-y-12 bottom-10 mb-24">
          <div className="flex justify-end">
            <div className="w-1/2 flex flex-col items-start eachone">
              <p className="font-bold text-primary text-sm">sample heading</p>
              <p className="text-xs text-start tracking-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minus!
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="w-1/2 flex flex-col items-start eachone">
              <p className="font-bold text-primary text-sm">sample heading</p>
              <p className="text-xs text-start tracking-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minus!
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-1/2 flex flex-col items-start eachone">
              <p className="font-bold text-primary text-sm">sample heading</p>
              <p className="text-xs text-start tracking-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minus!
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="w-1/2 flex flex-col items-start eachone">
              <p className="font-bold text-primary text-sm">sample heading</p>
              <p className="text-xs text-start tracking-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tempage;
