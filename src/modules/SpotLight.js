import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  MeshImage,
  RightArrow,
  RightBlue,
  Twitter,
} from "../assets";
import Marquee from "../components/Marquee";
import Slider from "../components/Slider";

const SpotLight = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="h-[calc(100vh-100px)] w-full border-b border-gray-400 flex overflow-hidden "
      style={{
        backgroundImage: `url(${MeshImage}), linear-gradient(#1d1d1d, #1d1d1d)`,
      }}
    >
      <div className="flex">
        <div className="flex items-center justify-center h-screen w-[250px] border-r border-gray-400 relative overflow-hidden">
          <h1
            className="text-gray-300 font-extrabold text-[140px] writing-mode-vertical-lr transform rotate-90 "
            style={{ bottom: "-10px" }}
          >
            TECHNIA
          </h1>
        </div>
        <div className="py-10 px-10 w-full">
          <div className="pt-[50px] flex justify-between w-full ">
            <h2 className="text-white font-extrabold text-[60px]">
              CRAFT YOUR
              <br /> DIGITAL JOURNEY
            </h2>
            <div>
              <ul className="flex flex-col justify-around gap-5">
                <li className="w-7 h-7">
                  <a href="#">
                    <img src={Instagram} />
                  </a>
                </li>
                <li className="w-7 h-7">
                  <a href="#">
                    <img src={Facebook} />
                  </a>
                </li>
                <li className="w-7 h-7">
                  <a href="#">
                    <img src={Twitter} />
                  </a>
                </li>
                <li className="w-7 h-7">
                  <a href="#">
                    <img src={LinkedIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full gap-[250px]">
            <div className="">
              <div className="mt-10">
                <p className="w-[450px] text-white text-[20px]">
                  At Technia, we deliver exceptional software and website
                  development services that bring your vision to life. Let's
                  create together.
                </p>
                <div
                  className={`mt-10 flex items-center gap-3 cursor-pointer relative`}
                  onMouseOver={() => setHover(true)}
                  onMouseOut={() => setHover(false)}
                >
                  <div
                    className={`w-20 h-20 border ${
                      hover ? "border-[#06d889]" : "border-white"
                    } p-5 rounded-full ${
                      hover ? "rotate-0" : "rotate-[-45deg]"
                    } transition-all`}
                  >
                    <img src={hover ? RightBlue : RightArrow} />
                  </div>
                  <h4
                    className={`text-[26px] ${
                      hover ? "text-[#06d889]" : "text-white"
                    } ${!hover && "absolute"} left-[55px] transition-all `}
                  >
                    VIEW MORE
                  </h4>
                </div>
              </div>
              <div>
                <div className="py-[50px] flex gap-3 items-center">
                  <div className="relative w-1 h-[150px] bg-white rounded-md overflow-hidden">
                    <div className="absolute top-0 w-full h-[40px] bg-[#06d889] animate-slide" />
                  </div>
                  <div className="text-white text-[22px]">
                    Scroll Down To
                    <br /> Explore
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <Slider />
            </div>
          </div>
          <div>
            <div>
              <Marquee text="WE CRAFT YOUR CLICKS" />
            </div>
            {/* */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotLight;
