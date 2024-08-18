import React, { useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./Navbar";
import bg1 from "../assets/zodak/vectors/Asset11.png";
import Line from "../assets/zodak/shapes/Asset 33.svg";
import slide1 from "../assets/zodak/images/slide1.jpg";
import slide2 from "../assets/zodak/images/slide2.jpg";
import slide3 from "../assets/zodak/images/slide3.jpg";
import slide4 from "../assets/zodak/images/slide4.jpg";
import {  
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";

const Firstpage = () => {
  return (
    <div className="h-screen relative">
  <img
    src={bg1}
    alt="bg1"
    className="absolute w-[35%] h-[80%] bg-cover bg-center bottom-0"
  />
  <div className="h-full flex flex-col">
    <Navbar />
    <div className="flex-grow flex flex-row ml-[7%]">
      <div className="flex flex-col justify-between  w-[63%] ">
        <div className="flex justify-end">
          <p className="bg-primary py-[6%] px-1 text-primary">hi</p>
        </div>
        <div className="h-3/6 flex flex-col justify-around">
          <p className="text-gray-500">Why Zodak,</p>
          <p className="text-gray-500 w-10/12">
            Zodak, as 'Advanced Safety Solutions' suppliers in the Kingdom keeps high quality
            standards. We have quality standard certificates attained after properly proven tests
            to ensure and fulfill customer requirements. In addition to that, we are dedicated to
            provide advanced technical support to the customers who would like to improve their
            quality of services.
          </p>
          <button className="relative bg-primary px-2 w-32 py-2 text-lg font-semibold border border-primary rounded-md text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-white hover:text-primary hover:font-bold animate">
            Read more
          </button>
        </div>
        <div className="flex flex-row items-center mb-14">
          <div className="flex flex-row space-x-4 px-2">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="text-2xl text-black hover:text-blue-600 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
            />
            <FaTwitter className="text-2xl text-black text-shadow-lg hover:font-extrabold cursor-pointer hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12" />
            <FaInstagram className="text-2xl text-black text-shadow-lg hover:text-pink-700 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12" />
            <FaLinkedinIn className="text-2xl text-black text-shadow-lg hover:text-blue-700 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-12" />
          </div>
          <svg className="w-full h-2 pt-[6px] mb-[4px]">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="w-[37%] relative  ">
        <img src={slide1} alt="Slide 1" className="w-full" />
        <div className="absolute inset-0 flex justify-start  items-end pb-[13.4%]">
          <img src={Line} alt="Line" className=" w-5/6" />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Firstpage;
