import React from 'react';
import bgGrey from '../assets/zodak/shapes/Asset 12.png';
import bgcard from '../assets/zodak/shapes/Asset 38.svg';
import cap1 from '../assets/zodak/images/Asset 2.svg';
import { motion } from 'framer-motion';

const Fifthpage = () => {
  return (
    <div className="relative h-screen bg-gray-300">
      <img
        src={bgGrey}
        alt="Background Grey"
        className="absolute right-0 top-0 h-full object-cover"
      />
      <div className="flex h-full ml-auto items-center justify-center relative">
        <img
          src={bgcard}
          alt="Card Background"
          className="h-[60%] relative object-contain"
        />
        <div className="absolute h-screen flex justify-end items-center">
          <div className="w-[20%]"></div>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-[38%] z-20 mr-6 text-white"
          >
            Lorem ipsum dolor sit araesentium error magni voluptate. Non minima magni sequi assumenda cumque labore perferendis quae sunt nemo aut, iste, eligendi praesentium recusandae libero autem exercitationem tenetur magnam dignissimos hic ipsa, quos consequatur placeat aperiam. Dolor voluptas maxime, magnam asperiores a id facilis officiis molestias quas. Reiciendis tenetur consequatur hic illum aperiam eveniet magni, praesentium excepturi quasi id possimus natus atque non ducimus dolorem. Eum maiores repellendus, optio ex earum necessitatibus illum alias labore suscipit a assumenda provident tenetur veniam tempora consequatur neque similique sequi, quibusdam perferendis vel nesciunt voluptate quas fugit unde! Eum maiores repellendus, optio ex earum necessitatibus illum alias labore suscipit a assumenda provident tenetur veniam tempora consequatur neque similique sequi, quibusdam perferendis vel nesciunt voluptate quas fugit unde!
          </motion.p>
          <div className="w-[44%] flex flex-col items-center h-full">
            <div className="h-[9%]"></div>
            <img src={cap1} alt="cap1" className="bottom-0" />
            <div className="py-[6%] text-white flex w-full px-16">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="h-[90%] font-bold text-2xl mt-[-25px] mr-[-19px]" // Adjust the mt value to move the text upward
              >
                TOP ACHIEVEMENTS
              </motion.p>
              <div className="w-[20%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthpage;
