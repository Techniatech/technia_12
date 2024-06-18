import React, { useState } from "react";
import { Facebook, Instagram, LinkedIn, Twitter, Wazeer } from "../../assets";

const MeetCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`p-6 border relative mb-10 ${
        hover ? "border-custom-green-99" : "border-gray-500"
      } bg-[#171717] w-[23%] text-center transition-all ${
        hover ? "rounded-lg" : "rounded-arch"
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={` overflow-hidden transition-all w-full h-64 bg-gray-800 ${
          hover ? "rounded-lg" : "rounded-arch"
        }`}
      >
        <img
          src={Wazeer}
          alt="Cassian Coleson"
          className="w-full h-full  object-cover"
        />
      </div>
      <h2 className="text-white text-xl mt-4">WAZEER AHMED</h2>
      <p className="text-gray-400 mt-2">DIRECTOR</p>
      <div className={`absolute bg-[#171717] z-30 transition-all right-[-45px] p-3 bottom-0 ${hover ? 'block border-t border-r border-b' : 'hidden'} ${hover ? '' : 'w-[0px]'} border-custom-green-99`}>
        <ul className="flex flex-col gap-3">
          <li>
            <img src={Instagram} className="w-5 h-5"/>
          </li>
          <li>
            <img src={LinkedIn} className="w-5 h-5"/>
          </li>
          <li>
            <img src={Facebook} className="w-5 h-5"/>
          </li>
          <li>
            <img src={Twitter} className="w-5 h-5"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MeetCard;
