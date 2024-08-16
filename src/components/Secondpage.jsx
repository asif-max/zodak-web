import React from 'react';
import bgshape from '../assets/zodak/shapes/Asset 27.svg'
import bg1 from '../assets/zodak/vectors/Asset11.png';
import bg3 from '../assets/zodak/shapes/Asset 28.svg';
import bg4 from '../assets/zodak/shapes/Asset 29.svg';
import bg5 from '../assets/zodak/shapes/Asset 30.svg';
import bg6 from '../assets/zodak/shapes/Asset 31.svg';

const Secondpage = () => {
  return (
    <div className="h-screen  ">
      <div className='flex justify-end    '>
        <img src={bgshape} alt="" className='absolute w-[33.5%]  ' />
      </div>
      <img
        src={bg1}
        alt="bg1"
        className="absolute w-[30%] h-[75%] bg-cover bg-center mt-48 "
      />
      
      <div className="flex justify-center items-center  h-screen">
        
        <div className="flex  w-9/12 h-full   items-center big-container space-x-10">
          <div className="flex flex-col space-y-4 image-container1">
            <div className="flex flex-row space-x-4 justify-center">
              <img
                src={bg3}
                alt="bg3"
                className="relative w-[50%] bg-cover bg-center"
              />
              <img
                src={bg4}
                alt="bg4"
                className="relative w-[50%] bg-cover bg-center"
              />
            </div>
            <div className="flex flex-row space-x-4 justify-center">
              <img
                src={bg5}
                alt="bg5"
                className="relative w-[50%] bg-cover bg-center"
              />
              <img
                src={bg6}
                alt="bg6"
                className="relative w-[50%] bg-cover bg-center"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 image-container2">
            <div className="flex flex-row space-x-4 justify-center">
              <img
                src={bg3}
                alt="bg3"
                className="relative w-[50%] bg-cover bg-center"
              />
              <img
                src={bg4}
                alt="bg4"
                className="relative w-[50%] bg-cover bg-center"
              />
            </div>
            <div className="flex flex-row space-x-4 justify-center">
              <img
                src={bg5}
                alt="bg5"
                className="relative w-[50%] bg-cover bg-center"
              />
              <img
                src={bg6}
                alt="bg6"
                className="relative w-[50%] bg-cover bg-center"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Secondpage;
