import React from "react";
import { AboutImg, Badge } from "../assets";

const WhoAreWe = () => {
  return (
    <div className="h-screen py-40 px-20 flex">
      <div className="w-1/2">
        <div className="border border-[#06d889] py-3 flex justify-center w-[250px]">
          <h5 className="text-white font-bold">OUR VALUES & CULTURE</h5>
        </div>
        <h4 className="text-7xl font-bold text-white mt-5">Who We Are</h4>
        <p className="w-[90%] mt-3 text-white text-[18px]">
          We are a passionate and diverse team committed to innovation,
          creativity, and excellence. Our mission is to deliver exceptional
          solutions that inspire and empower our clients and communities. We
          believe in the power of collaboration and strive to create impactful
          experiences that drive positive change and foster growth for everyone
          involved.
        </p>
        <div>
          <ul className="flex flex-wrap mt-5 space-y-10">
            <li className="flex items-center w-1/2 gap-3">
              <img src={Badge} className="w-8 h-8" />
              <h5 className="text-white font-bold">Creative Strategy</h5>
            </li>
            <li className="flex items-center w-1/2 gap-3">
              <img src={Badge} className="w-8 h-8" />
              <h5 className="text-white font-bold">Rebranding Design</h5>
            </li>
            <li className="flex items-center w-1/2 gap-3">
              <img src={Badge} className="w-8 h-8" />
              <h5 className="text-white font-bold">Unique Production</h5>
            </li>
            <li className="flex items-center w-1/2 gap-3">
              <img src={Badge} className="w-8 h-8" />
              <h5 className="text-white font-bold">Corporate Identity</h5>
            </li>
          </ul>
        </div>
        <p className="w-[90%] mt-10 text-white text-[18px]">
          We are a passionate and diverse team committed to innovation,
          creativity, and excellence. Our mission is to deliver exceptional
          solutions that inspire and empower our clients and communities
        </p>
      </div>
      <div className="w-1/2 flex justify-end relative">
        <div className="border border-[#06d889] p-3 h-[480px]">
          <img src={AboutImg} />
        </div>
        <div className="absolute left-[-40px] bottom-[-80px] overflow-hidden ">
          <img src={AboutImg} className="w-full rounded-[180px] bg-black bg-opacity-50"/>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
