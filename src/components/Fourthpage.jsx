import React from "react";
import chatImg from "../assets/zodak/shapes/Asset 36.svg";
import worldmap from "../assets/zodak/vectors/Asset 10.png";
import locationSign from "../assets/zodak/icons/Asset 34.svg";
import frame1 from "../assets/zodak/shapes/Asset 37.svg";
import brand1 from "../assets/zodak/logos/adidas.png";
import brand2 from "../assets/zodak/logos/asics.png";
import brand3 from "../assets/zodak/logos/kappa.png";
import brand4 from "../assets/zodak/logos/nb.png";
import brand5 from "../assets/zodak/logos/puma.png";
import brand6 from "../assets/zodak/logos/ua.png";

const brandLogos = [brand1, brand2, brand3, brand4, brand5, brand6];

const Fourthpage = () => {
  return (
    <div className="pt-32 h-screen">
      <div className="flex flex-col items-middle px-24">
        <img src={chatImg} alt="chat" className="h-[82px] absolute" />
        <p
          className="relative text-xl mt-[22px] mx-2 text-white font-bold tracking-extremeTight"
          style={{ transform: "scaleY(1.5)" }}
        >
          BRANDS WE ARE ASSOCIATED WITH
        </p>
      </div>
      <div className="flex justify-start items-center h-full">
        <div className="h-5/6  flex justify-start items-center">
          <img src={worldmap} alt="" className="absolute w-[55%]" />
          <div className="relative z-10 mt-[-190px] flex justify-center px-[26rem] items-center">
            <img src={locationSign} alt="" className="absolute w-[4%]" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 looping">
          {brandLogos.map((logo, index) => (
            <div key={index} className="relative m-4">
              <img src={frame1} alt="frame" className="w-[200px]" />
              <img
                src={logo}
                alt={`brand-${index}`}
                className="absolute inset-0 m-auto w-[70%] h-[70%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fourthpage;
