import React, { useEffect, useRef } from "react";
import rulingImg from "../assets/zodak/images/Asset 3.png";
import spyral from "../assets/zodak/shapes/Asset 35.svg";
import bendImg1 from "../assets/zodak/images/realone.jpg";

const Tempage = () => {
  return (
    <div className="flex flex-row">
      <div className="relative h-screen w-10/12">
        <img
          src={rulingImg}
          alt=""
          className="h-full  object-cover brightness-50"
        />
        <h1 className="absolute top-1/2 left-[29%] text-4xl text-end font-bold text-white">
          ZODAK SAFETY <br /> GLOVES GIVE <br />
          EXCEPTIONAL PROTECTION
        </h1>
      </div>
      <div className=" w-1/2 relative flex justify-center items-center">
        <img src={spyral} alt="" className="h-4/6 absolute object-cover " />
        <div className="absolute \ w-[56%]  imagecontainer gap-[1px]  border-black flex flex-col">
          <div className="flex flex-row justify-between">
            <img
              src={bendImg1}
              alt=""
              className=" object-cover bg-center w-[143px]  h-full rounded-tl-full rounded-bl-full rounded-br-full"
            />{" "}
            <div className="flex flex-col items-center justify-center  ">
            <p className="font-bold text-primary text-sm">sample heading</p>
            <p className="text-xs text-center tracking-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minus!  </p>
            </div>{" "}
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-primary text-sm ">sample heading</p>
            <p className="text-xs text-center tracking-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minus!  </p>
            </div>
            <img
              src={bendImg1}
              alt=""
              className=" object-cover bg-center w-[143px]  h-full rounded-bl-full rounded-br-full rounded-tr-full"
            />{" "}
          </div>
          <div className="flex flex-row justify-between">
            <img
              src={bendImg1}
              alt=""
              className=" object-cover bg-center w-[143px]  h-full rounded-tl-full rounded-bl-full rounded-br-full"
            />{" "}
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-primary text-sm">sample heading</p>
              <p className="text-xs text-center tracking-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minus!  </p>
            </div>{" "}
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-primary text-sm">sample heading</p>
            <p className="text-xs text-center tracking-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, minus!  </p>
            </div>
            <img
              src={bendImg1}
              alt=""
              className=" object-cover bg-center w-[143px]  h-full rounded-bl-full rounded-br-full rounded-tr-full"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tempage;
