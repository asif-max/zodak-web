import React, { useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./Navbar";
import bg1 from "../assets/zodak/vectors/Asset11.png";
import Line from "../assets/zodak/shapes/Asset 33.svg";
import slide1 from "../assets/zodak/images/slide1.jpg";
import slide2 from "../assets/zodak/images/slide2.jpg";
import slide3 from "../assets/zodak/images/slide3.jpg";
import slide4 from "../assets/zodak/images/slide4.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";

const Firstpage = () => {
  return (
    <div className="h-auto">
        <Navbar/>
        <img src={bg1} alt="bg1" className="absolute w-[30%] h-[90%] bg-cover bg-center pt-48 "/>
    </div>
  )
}

export default Firstpage