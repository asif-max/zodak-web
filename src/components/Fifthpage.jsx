import React from 'react';
import bgGrey from '../assets/zodak/shapes/Asset 12.png';
import bgcard from '../assets/zodak/shapes/Asset 38.svg';
import cap1 from '../assets/zodak/images/Asset 2.svg'

const Fifthpage = () => {
  return (
    <div className="relative h-screen bg-gray-300 border border-green-800">
      <img
        src={bgGrey}
        alt="Background Grey"
        className="absolute right-0 top-0 h-full object-cover"
      />
      <div className="flex h-full ml-auto items-center boder border-black border-4 justify-center relative">
        <img
          src={bgcard}
          alt="Card Background"
          className="h-[60%] relative object-contain"
        />
        <div className='absolute  h-screen border flex justify-end items-center  '><div className='w-[20%]'></div><p className='w-[38%]  z-20 mr-6 text-white border border-blue-500'>
          Lorem ipsum dolor sit araesentium error magni voluptate. Non minima magni sequi assumenda cumque labore perferendis quae sunt nemo aut, iste, eligendi praesentium recusandae libero autem exercitationem tenetur magnam dignissimos hic ipsa, quos consequatur placeat aperiam. Dolor voluptas maxime, magnam asperiores a id facilis officiis molestias quas. Reiciendis tenetur consequatur hic illum aperiam eveniet magni, praesentium excepturi quasi id possimus natus atque non ducimus dolorem. Eum maiores repellendus, optio ex earum necessitatibus illum alias labore suscipit a assumenda provident tenetur veniam tempora consequatur neque similique sequi, quibusdam perferendis vel nesciunt voluptate quas fugit unde!Eum maiores repellendus, optio ex earum necessitatibus illum alias labore suscipit a assumenda provident tenetur veniam tempora consequatur neque similique sequi, quibusdam perferendis vel nesciunt voluptate quas fugit unde!
        </p>
        <div className='w-[44%] flex flex-col items-center border  h-full '>
            <div className='h-[9%] border border-green-300'></div>
        <img src={cap1} alt="cap1" className=" bottom-0  border border-black   "/>
        <div className='py-[6%] text-white border flex border-black w-full px-16 '><p className='h-[90%] border border-black font-bold text-2xl '>TOP TOP ACHIEVEMENTS</p><div className='w-[20%]'></div></div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Fifthpage;
