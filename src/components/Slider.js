// Slider.js
import React, { useState, useEffect } from 'react';
import { One, Three, Two } from '../assets/images/carosel';

const images = [
  One,
  Two,
  Three,
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setFade(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrent(index);
      setFade(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-96 ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute bottom-4 left-[-20px] gap-4 transform -translate-x-1/2 flex flex-col ">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-green-500' : 'bg-gray-300'} transition-colors duration-300`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
