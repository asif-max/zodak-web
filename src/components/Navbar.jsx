import React from "react";
import Logo from "../assets/zodak/logos/SVG/logoz.svg";
import { FaSearch } from "react-icons/fa";
import './styles.css'

const Navbar = () => {
  return (
    <div className="flex justify-between pt-8 pr-20 pl-[7%]">
      {/* Logo Section */}
      <div>
        <img src={Logo} alt="Logo" className="h-14" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-3 ">
        <p className="underline-custom hover:font-bold cursor-pointer">HOME</p><p>|</p> 
        <p className="underline-custom hover:font-bold cursor-pointer">GLOVES</p><p>|</p> 
        <p className="underline-custom hover:font-bold cursor-pointer">VEST</p><p>|</p> 
        <p className="underline-custom hover:font-bold cursor-pointer">SHOE</p><p>|</p> 
        <p className="underline-custom hover:font-bold cursor-pointer">HELMET</p><p>|</p> 
        <p className="underline-custom hover:font-bold cursor-pointer">SPECTACLES</p><p>|</p> 
        <p className="underline-custom hover:font-bold cursor-pointer">HARNESS</p><p>|</p> 
        <p className="underline-custom hover:font-bold cursor-pointer">WORKWEAR</p><p>|</p> 
        <p className="underline-custom hover:font-bold cursor-pointer">OTHERS</p> 
      </div>

      {/* Search Icon */}
      <div className="flex items-center">
        <FaSearch className="text-3xl text-primary w-[19px] cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
