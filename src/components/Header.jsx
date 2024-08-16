import React from "react";
import Navbar from "./Navbar";
import image1 from "../assets/zodak/images/Asset1.png";
import bg1 from "../assets/zodak/vectors/Asset11.png";
import Line from "../assets/zodak/shapes/Asset 33.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';




const Header = () => {
  return (
    <div className="border border-red-600 h-screen">
      <Navbar />

      <div className="flex">
        <img
          src={bg1}
          alt="bg1"
          className="pt-[10%]  w-[35%] h-[89%]  absolute bg-right-top  "
        />
        <div className="relative h-screen  flex flex-col items-start justify-center gap-8 w-4/6 pl-[7%] mt-10 pt-16">
          <div className="flex flex-row justify-between pb-[25px] "><div >
          <div className=" tracking-[0.4px]  space-y-8 w-[80%] truncate">
            <p className="text-gray-500">Why Zodak</p>
            <p className="text-gray-500  w-5/6 ">
              Zodak, as 'Advanced Safety Solutions' suppliers in the Kingdom
              keeps high quality
              <br /> standards. We have quality standard certificates attained
              after properly proven tests
              <br /> to ensure and fulfill customer requirements. In addition to
              that, we are dedicated to provide
              <br /> advanced technical support to the customers who would like
              to improve their quality of services.
            </p>
          </div>
          <button className="ml-6 mt-24 relative bg-primary  px-4 py-[0.1rem] text-lg text-semibold text-white " >
            Read more
          </button>
          </div>
          <div className="p-1 flex h-36 mx-6  items-start " style={{backgroundColor:"#FF6347",color:"#FF6347"}}>hi</div></div>
          <div className=" w-full flex justify-end items-center gap-4 my-16 border ">
            <div className="flex flex-row justify-between space-x-4 text-etrabold  "><FontAwesomeIcon icon={faSquareFacebook} className="text-2xl text-black hover:text-blue-600 cursor-pointer" />
            <FaTwitter  className="text-2xl text-black text-shadow-lg hover:font-extrabold cursor-pointer hover:text-blue-600"/>
            <FaInstagram  className="text-2xl text-black text-shadow-lg hover:text-pink-700 cursor-pointer "/>
            <FaLinkedinIn  className="text-2xl text-black text-shadow-lg hover:text-blue-700 cursor-pointer"/></div>
            <svg className=" w-full  h-2 pt-[6px] mb-[4px]">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="black"
                stroke-width="4"
              />
            </svg>
          </div>
        </div>
        
        <div className="flex items-start mt-8   flex-col h-2/6">
          <img src={image1} alt="image1" className="relative w-[479px] h-[44rem] " />
            <img src={Line} alt="Line" className=" absolute w-1/6 h-5/6 mt-[278px] " />
            
        </div>
      </div>
      
    </div>
  );
};  

export default Header;
