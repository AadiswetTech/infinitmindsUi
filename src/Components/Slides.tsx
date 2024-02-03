"use client"
import React, { useState, useEffect } from 'react';
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
const Slider = () => {
  const images = [
    "/gym2.jpeg",
    "/gym3.jpeg",
    "/gym4.jpeg",
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <><h1 className='font-bold text-center text-6xl text-orange-800'>Slides </h1><div className="relative w-[90vw] mx-auto">
          <div className="overflow-hidden w-[60vw] relative mx-auto">
              <div
                  className="flex transition-transform ease-in-out duration-300 transform translate-x-"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                  {images.map((image, index) => (
                      <div key={index} className="flex-shrink-0 pt-2 w-[60vw]">
                          <img src={image} alt={`Slide ${index + 1}`} className="w-[80vw]" />
                      </div>
                  ))}
              </div>
          </div>

          {/* Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-center">
              <TfiAngleDoubleLeft size={50}
                  onClick={prevSlide}
                  
              />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center justify-center">
              <HiOutlineChevronDoubleRight size={50}
                  onClick={nextSlide}
                  
              />
               
          </div>
      </div></>
  );
};

export default Slider;
