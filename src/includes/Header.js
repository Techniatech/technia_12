// src/Header.js
import React from "react";
import { Logo, MeshImage } from "../assets";
import MenuIcon from "../assets/MenuIcon";

const Header = () => {
  return (
    <div
      className="w-[100px] h-screen py-6 px-3 flex fixed flex-col justify-between items-center border-gray-400 border-r"
      style={{
        backgroundImage: `url(${MeshImage}), linear-gradient(#1d1d1d, #1d1d1d)`,
      }}
    >
      <div className="p-2">
        <img className="w-full" src={Logo} alt="Technia" />
      </div>
      <div>
        <MenuIcon color={'#fff'}/>
      </div>
      <button className="border border-[#06d889] p-3 text-[#06d889] rotate-90 w-[200px] mb-20 hover:bg-[#06d889] hover:text-[#fff] transition-all">
        Get A Quote
      </button>
    </div>
  );
};

export default Header;
