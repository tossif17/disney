import React from "react";
import disney from "../images/disney.png";
import pixar from "../images/pixar.png";
import marvel from "../images/marvel.png";
import starwar from "../images/starwar.png";
import nationalG from "../images/nationalG.png";
import disneyv from "../videos/disney.mp4";
import pixarv from "../videos/pixar.mp4";
import marvelv from "../videos/marvel.mp4";
import starwarv from "../videos/star-wars.mp4";
import nationalv from "../videos/national-geographic.mp4";

function ProductHouse() {
  const productionList = [
    {
      id: 1,
      image: disney,
      video: disneyv,
    },
    {
      id: 2,
      image: pixar,
      video: pixarv,
    },
    {
      id: 3,
      image: marvel,
      video: marvelv,
    },
    {
      id: 4,
      image: starwar,
      video: starwarv,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalv,
    },
  ];
  return (
    <>
      <div className="flex gap-5 p-2 sm:px-16">
        {productionList.map((item) => (
          <div
            className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl
        shadow-gray-800 hidden sm:hidden md:inline lg:inline xl:inline
        "
          >
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute z-0  top-0 rounded-md
        opacity-0 hover:opacity-50"
            />
            <img src={item.image} className="w-full z-[1] opacity-100" />
          </div>
        ))}
      </div>
      <div className="md:hidden flex gap-3 px-10 p-2">
        {productionList.map(
          (item, index) =>
            index < 3 && (
              <div
                className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl
        shadow-gray-800
        "
              >
                <video
                  src={item.video}
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="absolute z-0  top-0 rounded-md
        opacity-0 hover:opacity-50"
                />
                <img src={item.image} className="w-full z-[1] opacity-100" />
              </div>
            )
        )}
      </div>
      <div className="md:hidden flex gap-3 px-10 p-2">
        {productionList.map(
          (item, index) =>
            index > 1 && (
              <div
                className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl
        shadow-gray-800
        "
              >
                <video
                  src={item.video}
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="absolute z-0  top-0 rounded-md
        opacity-0 hover:opacity-50"
                />
                <img src={item.image} className="w-full z-[1] opacity-100" />
              </div>
            )
        )}
      </div>
    </>
  );
}

export default ProductHouse;
