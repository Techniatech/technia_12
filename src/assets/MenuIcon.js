import React, { useState } from "react";

const MenuIcon = (color) => {
  const [isHover, setHover] = useState(false);
  return (
    <div
      className={`border cursor-pointer p-3 h-[50px] w-[50px] rounded-2xl flex flex-col justify-around items-center ${
        isHover ? "border-[#06d889]" : "border-[#fff]"
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-full h-[1px] ${isHover ? "bg-[#06d889]" : "bg-[#fff]"}`}
      />
      <div
        className={`${isHover ? "bg-[#06d889]" : "bg-[#fff]"} w-full h-[1px]`}
      />
      <div
        className={`${isHover ? "bg-[#06d889]" : "bg-[#fff]"} w-full h-[1px]`}
      />
    </div>
  );
};

export default MenuIcon;
