import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10">
      <div className="px-40 pt-10 flex">
        <div className="w-1/2">
          <h3 className="text-6xl font-bold">
            We Are Your Partner For Innovation And Fast Growth.
          </h3>
        </div>
        <div className="w-1/2">
          <ul className="flex gap-8 flex-wrap text-2xl font-bold">
            <li className="w-[45%]">
              <a href="#">About Us</a>
            </li>
            <li className="w-[45%]">
              <a href="#">Resources</a>
            </li>
            <li className="w-[45%]">
              <a href="#">It Service</a>
            </li>
            <li className="w-[45%]">
              <a href="#">Career</a>
            </li>
            <li className="w-[45%]">
              <a href="#">Our Services</a>
            </li>
            <li className="w-[45%]">
              <a href="#">Blog</a>
            </li>
            <li className="w-[45%]">
              <a href="#">Case Studies</a>
            </li>
            <li className="w-[45%]">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-6">
        <div className="px-40 flex gap-6 items-center">
          <div className="w-20 h-20 bg-[#171717] rounded-lg"></div>
          <div>
            <h4 className="text-3xl font-semibold">Location</h4>
            <address className="text-md">
              vyttila, ponnurunni east 65343
            </address>
          </div>
        </div>
        <div className="px-40 flex gap-6 items-center">
          <div className="w-20 h-20 bg-[#171717] rounded-lg"></div>
          <div>
            <h4 className="text-3xl font-semibold">Phone</h4>
            <h5 className="text-md">9995819386</h5>
          </div>
        </div>
        <div className="px-40 flex gap-6 items-center">
          <div className="w-20 h-20 bg-[#171717] rounded-lg"></div>
          <div>
            <h4 className="text-3xl font-semibold">Email</h4>
            <h5 className="text-md">techniatech@gmail.com</h5>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-gray-400">
        <p className="text-center text-md">Copyright 2024 Technia</p>
      </div>
    </footer>
  );
};

export default Footer;
