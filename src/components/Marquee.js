// Marquee.js
import React from "react";
import { Badge } from "../assets";

const Marquee = ({ text, duration = 20 }) => {
  return (
    <div className="overflow-x-hidden border-t border-gray-400">
      <div
        className="items-center whitespace-nowrap animate-marquee font-bold text-3xl pt-4 space-x-6 text-white flex"
        style={{ animationDuration: `${duration}s` }}
      >
        <img src={Badge} className="w-8 h-8" />
        {text}
        <img src={Badge} className="w-8 h-8" />
        {text}
        <img src={Badge} className="w-8 h-8" />
        {text}
        <img src={Badge} className="w-8 h-8" />
        {text}
        <img src={Badge} className="w-8 h-8" />
        {text}
      </div>
    </div>
  );
};

export default Marquee;
