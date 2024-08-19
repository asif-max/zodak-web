import React from "react";
import bg1 from "../assets/zodak/vectors/Asset11.png";
import shoeImg from '../assets/zodak/images/footer.jpg'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import lastshape from '../assets/zodak/shapes/Asset 39.svg'

const LastPage = () => {
  return (
    <div className="h-screen bg-white t-[7%]">
      <img
        src={bg1}
        alt="bg1"
        className="absolute w-[30%] h-screen  pt-[20%] "
      />
      <div className="flex justify-center items-center h-5/6 space-x-0 pt-[10%]">
        <div className="mx-[-50px] relative contact  flex transform -rotate-90 text-center bg-primary">
          <p className="text-white font-bold text-xl px-4 py-2">Contact Us</p>
        </div>
        <div className="relative  px-10 py-14 w-[27%] bg-gray-600">
          <div className="flex flex-col space-y-12">
            <input
              type="text"
              placeholder="Name"
              className="border w-full h-10 px-6"
            />
            <input
              type="text"
              className="border h-10 px-6"
              placeholder="Email"
            />
            <input
              type="text"
              className="border h-10 px-6"
              placeholder="Subject"
            />
            <input
              type="text"
              placeholder="Message"
              className="border h-10 px-6"
            />
            <input
              type="text"
              placeholder="bbbb"
              className="border h-10 px-6"
            />
          </div>
        </div>
        <div className="w-[45%]">
          <img src={shoeImg} alt="shoeImg" className="border-4 p-6 w-full border-primary"/>
        </div>
      </div>
      <div className="flex  h-[139px] "><div className="flex flex-row justify-center items-center space-x-2 px-16 text-etrabold"><FontAwesomeIcon icon={faSquareFacebook} className="text-2xl text-black hover:text-blue-600 cursor-pointer" />
            <FaTwitter  className="text-2xl text-black text-shadow-lg hover:font-extrabold cursor-pointer hover:text-blue-600"/>
            <FaInstagram  className="text-2xl text-black text-shadow-lg hover:text-pink-700 cursor-pointer "/>
            <FaLinkedinIn  className="text-2xl text-black text-shadow-lg hover:text-blue-700 cursor-pointer"/></div>
            <p className="flex justify-center items-center text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, excepturi.</p>
            <div className="flex place-items-end"><img src={lastshape} alt="lastshape" className="absolute"/></div>
            </div>
    </div>
  );
};

export default LastPage;
