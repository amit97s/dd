import React, { useCallback, useEffect, useState } from "react";
import bimg23 from "../subassets/bagris images/New folder/wedd1.jpg";
// import bimg11 from "../subassets/bagris images/New folder/wedd2.jpg";
import bimg2 from "../subassets/bagris images/New folder/wed3.jpg";
import bimg203 from "../subassets/bagris images/New folder/wed5.jpg";
import groom1 from "../subassets/bagris images/New folder/groom 1.jpg";
import groom2 from "../subassets/bagris images/New folder/groom 2.jpg";
import groom3 from "../subassets/bagris images/New folder/groom3.jpg";
import groom4 from "../subassets/bagris images/New folder/groom 4.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Portwed = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    // { name: "pic-1", src: bimg11 },
    { name: "pic-2", src: bimg2 },
    { name: "pic-3", src: groom3 },
    { name: "pic-4", src: bimg23 },
    { name: "pic-4", src: bimg203 },
  ];
  const groomImg = [
    {
      name: "groom1",
      src: groom1,
    },
    {
      name: "groom1",
      src: groom2,
    },
    {
      name: "groom1",
      src: groom3,
    },
    {
      name: "groom1",
      src: groom4,
    },
  ];
  const handlePrev = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide, handleNext]);

  return (
    <div className="Portwed">
      <div className="bg-gray-200 relative mx-auto overflow-hidden max-w-screen-xl -z-30">
        <div
          className=" w-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full select-none"
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-60 sm:h-[30rem] object-cover -z-30"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-4 mt-5  sm:p-20  flex items-center justify-center gap-10">
        <p className="w-full  sm:p-10 rounded-md bg-[#FFF6E1] shadow-lg">
          "In this grand performance of affection, the bride and groom step onto
          the stage of matrimony, surrounded by the applause of loved ones. Each
          step down the aisle is a graceful movement towards a future woven with
          threads of devotion and commitment. The music swells as they exchange
          sacred words, sealing their union with tender kisses and joyful tears.
          Their love story unfolds like a delicate ballet, with every gesture a
          testament to their enduring bond. And as they twirl in each other's
          arms, they embark on a journey where every beat of their hearts echoes
          the melody of everlasting love."
        </p>
      </div>
      <div className="flex justify-center">
        {groomImg.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.src}
                alt={item.name}
                className="w-72 p-1  hover:opacity-55"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portwed;
