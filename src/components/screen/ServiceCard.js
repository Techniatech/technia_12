import React from "react";
import CodeIcon from "../../assets/images/services/code.png";

const ServiceCard = ({data}) => {
  return (
    <div className="p-10 border transition-all border-gray-500 rounded w-[32%] mb-10 bg-[#171717] hover:border-custom-green-99 hover:translate-y-[-10px] hover:translate-x-[-10px]">
      <div className="relative">
        <img
          src={data.icon}
          alt="Code Icon"
          className="w-14 h-14 relative z-10"
        />
        <div className="w-14 h-14 bg-gradient-radial to-custom-green-00 from-custom-green-99 filter blur-xl absolute left-[20px] bottom-[-10px]"></div>
      </div>
      <h2 className="text-white text-3xl mt-8 font-bold">{data.name}</h2>
      <p className="text-gray-400 mt-4">
        {data.description}
      </p>
      <button className="mt-10 px-4 py-2 bg-gray-700 text-white rounded">
        LEARN MORE
      </button>
    </div>
  );
};

export default ServiceCard;
