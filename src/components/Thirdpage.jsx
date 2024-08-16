import React from "react";
import rulingImg from "../assets/zodak/images/Asset 3.png";
import spyral from "../assets/zodak/shapes/Asset 35.svg";
import bendImg1 from "../assets/zodak/images/Asset 5.png"; // Replace with your image paths

const Thirdpage = () => {
  return (
    <div className="relative flex">
      <img
        src={rulingImg}
        alt="Ruling Image"
        className="w-[60%] h-screen object-cover brightness-50"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pr-[30%] px-10 z-10">
        <div className="text-white text-end">
          <h1 className="text-7xl tracking-wider font-bold">ZODAK SAFETY</h1>
          <h2 className="text-8xl font-bold">
            <span className="text-8xl">GLOVES</span>
            <span className="text-7xl"> GIVE</span>
          </h2>
          <h3 className="text-7xl tracking-wider font-bold">EXCEPTIONAL</h3>
          <h4 className="text-7xl tracking-wider font-bold">PROTECTION</h4>
        </div>
      </div>
      <div className="border-2 border-green-500 w-full h-screen relative">
        <p className="font-bold text-3xl border text-center pt-16 pb-6">
          SAFETY SOLUTIONS <p>ACROSS INDUSTRIES</p>
        </p>
        <div className="relative flex justify-center items-start h-full">
          <img src={spyral} alt="Spyral" className="w-[64%] relative" />
          <div className="absolute top-[0.7%] left-[19%] h-[19%] w-[30%] flex">
            <img
              src={bendImg1}
              alt="Bend 1"
              className="w-full h-full object-cover rounded-tl-full rounded-bl-full rounded-br-full"
            />
            <div className="ml-2 text-xs text-black flex flex-col justify-center z-20  bg-opacity-50 p-2">
              <h5 className="font-bold text-primary">Lorem Ipsum</h5>
              <p>This is a sample paragraph next to the image.</p>
            </div>
          </div>
          <div className="absolute top-[20%] right-[34%] h-[19%] w-[30%] flex">
            <div className="ml-2 text-xs text-black flex flex-col justify-center z-20  bg-opacity-50 p-2">
              <h5 className="font-bold text-primary">Lorem Ipsum</h5>
              <p>This is a sample paragraph next to the image.</p>
            </div>
            <img
              src={bendImg1}
              alt="Bend 2"
              className="w-full h-full object-cover rounded-tr-full rounded-bl-full rounded-br-full"
            />
          </div>
          <div className="absolute top-[39.5%] left-[19%] h-[19%] w-[30%] flex">
            <img
              src={bendImg1}
              alt="Bend 3"
              className="w-full h-full object-cover rounded-tl-full rounded-bl-full rounded-br-full"
            />
            <div className="ml-2 text-xs text-black flex flex-col justify-center z-20  bg-opacity-50 p-2">
              <h5 className="font-bold text-primary">Lorem Ipsum</h5>
              <p>This is a sample paragraph next to the image.</p>
            </div>
          </div>
          <div className="absolute bottom-[22%] right-[19%] h-[19%] w-[60%]   flex">
            <div className="ml-2 text-xs text-black flex flex-col justify-center z-20  bg-opacity-50 p-2">
              <h5 className="font-bold text-primary">Lorem Ipsum</h5>
              <p>This is a sample paragraph next to the image.</p>
            </div>
            <img
              src={bendImg1}
              alt="Bend 4"
              className="w-[47%] h-full object-cover rounded-tr-full rounded-bl-full rounded-br-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;
