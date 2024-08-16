import React, { useEffect, useRef } from "react";
import rulingImg from "../assets/zodak/images/Asset 3.png";
import spyral from "../assets/zodak/shapes/Asset 35.svg";
import bendImg1 from "../assets/zodak/images/Asset 5.png"; // Replace with your image paths

const Thirdpage = () => {
  const elementsRef = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "translateX(0)";
            entry.target.style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((element) => {
      observer.observe(element);
    });

    textRefs.current.forEach((text) => {
      observer.observe(text);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const getAnimationStyle = (index) => {
    const transformDirection = index % 2 === 0 ? "translateX(100%)" : "translateX(-100%)";
    const delay = index * 0.5;
    return {
      transform: transformDirection,
      opacity: 0,
      transition: `transform 1s ease-in-out ${delay}s, opacity 1s ease-in-out ${delay}s`,
    };
  };

  const getTextAnimationStyle = (index) => {
    const transformDirection = index % 2 === 0 ? "translateX(100%)" : "translateX(-100%)";
    const delay = index * 0.5 + 0.3; // Slight delay after image
    return {
      transform: transformDirection,
      opacity: 0,
      transition: `transform 1s ease-in-out ${delay}s, opacity 1s ease-in-out ${delay}s`,
    };
  };

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
      <div className="w-full h-screen relative">
        <p className="font-bold text-3xl text-center pt-16 pb-6">
          SAFETY SOLUTIONS <span>ACROSS INDUSTRIES</span>
        </p>
        <div className="relative flex justify-center items-start h-full">
          <img src={spyral} alt="Spyral" className="w-[64%] relative" />
          <div
            ref={addToRefs}
            className="absolute top-[0.7%] left-[19%] h-[19%] w-[60%] flex"
            style={getAnimationStyle(0)}
          >
            <img
              src={bendImg1}
              alt="Bend 1"
              className="w-[47%] h-full object-cover rounded-tl-full rounded-bl-full rounded-br-full"
            />
            <div
              className="ml-2 w-[60%] text-xs text-black flex flex-col justify-center z-20 bg-opacity-50 p-2"
              ref={addToTextRefs}
              style={getTextAnimationStyle(0)}
            >
              <h5 className="font-bold text-primary">Lorem Ipsum</h5>
              <p>This is a sample paragraph next to the image.</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="absolute top-[20%] right-[19%] h-[19%] w-[60%] flex"
            style={getAnimationStyle(1)}
          >
            <div
              className="ml-2 text-xs text-black flex flex-col justify-center z-20 bg-opacity-50 p-2"
              ref={addToTextRefs}
              style={getTextAnimationStyle(1)}
            >
              <h5 className="font-bold text-primary">Lorem Ipsum</h5>
              <p>This is a sample paragraph next to the image.</p>
            </div>
            <img
              src={bendImg1}
              alt="Bend 2"
              className="w-[47%] h-full object-cover rounded-tr-full rounded-bl-full rounded-br-full"
            />
          </div>
          <div
            ref={addToRefs}
            className="absolute top-[39.5%] left-[19%] h-[19%] w-[60%] flex"
            style={getAnimationStyle(2)}
          >
            <img
              src={bendImg1}
              alt="Bend 3"
              className="w-[47%] h-full object-cover rounded-tl-full rounded-bl-full rounded-br-full"
            />
            <div
              className="ml-2 text-xs text-black flex flex-col justify-center z-20 bg-opacity-50 p-2"
              ref={addToTextRefs}
              style={getTextAnimationStyle(2)}
            >
              <h5 className="font-bold text-primary">Lorem Ipsum</h5>
              <p>This is a sample paragraph next to the image.</p>
            </div>
          </div>
          <div
            ref={addToRefs}
            className="absolute bottom-[22%] right-[19%] h-[19%] w-[60%] flex"
            style={getAnimationStyle(3)}
          >
            <div
              className="ml-2 text-xs text-black flex flex-col justify-center z-20 bg-opacity-50 p-2"
              ref={addToTextRefs}
              style={getTextAnimationStyle(3)}
            >
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
