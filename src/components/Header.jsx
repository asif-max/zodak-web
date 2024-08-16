import React from "react";
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

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-screen  relative overflow-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <img
          src={bg1}
          alt="bg1"
          className="pt-[10%] w-[35%] h-[89%] absolute right-0 top-0"
        />
        <div className="relative h-screen flex flex-col items-start justify-center gap-8 md:w-4/6 pl-[7%] mt-8">
          <div className="absolute top-0 right-0 p-1 mx-6 flex h-36 justify-end bg-[#FF6347] text-[#FF6347]">
            hi
          </div>
          <div className="flex flex-row justify-between pb-[25px]">
            <div>
              <div className="tracking-[0.4px] space-y-8 w-[80%] truncate">
                <p className="text-gray-500">Why Zodak</p>
                <p className="text-gray-500 w-5/6">
                  Zodak, as 'Advanced Safety Solutions' suppliers in the Kingdom keeps high quality
                  <br /> standards. We have quality standard certificates attained after properly
                  proven tests
                  <br /> to ensure and fulfill customer requirements. In addition to that, we are
                  dedicated to provide
                  <br /> advanced technical support to the customers who would like to improve their
                  quality of services.
                </p>
              </div>
              <button className="ml-6 mt-24 relative bg-primary px-4 py-2 text-lg font-semibold border border-primary rounded-md text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-white hover:text-primary hover:font-bold">
                Read more
              </button>
            </div>
          </div>
          <div className="w-full flex justify-end items-center pt-16 gap-4 my-16">
            <div className="flex flex-row justify-between space-x-4 text-etrabold">
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

        <div className="flex items-start mt-8 flex-col h-2/6">
          <Slider {...settings} className="relative w-full md:w-[465px] h-[44rem]">
            <div>
              <img src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src={slide2} alt="Slide 2" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src={slide3} alt="Slide 3" className="w-full h-full object-cover" />
            </div>
            <div>
              <img src={slide4} alt="Slide 4" className="w-full h-full object-cover" />
            </div>
          </Slider>
          <img
            src={Line}
            alt="Line"
            className="absolute w-1/6 h-5/6 mt-[278px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
