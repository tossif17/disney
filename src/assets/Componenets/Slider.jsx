import React, { useEffect, useRef, useState } from "react";
import Globalapi from "../../Services/Globalapi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const setWidth = window.innerWidth;
  const [movieList, setMovieList] = useState([]);
  const eleRef = useRef();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    Globalapi.Trending.then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };
  const slidRight = (element) => {
    element.scrollLeft += setWidth - 110;
  };

  const slidLeft = (element) => {
    element.scrollLeft -= setWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer"
        onClick={() => slidRight(eleRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor- right-0 cursor-pointer"
        onClick={() => slidLeft(eleRef.current)}
      />

      <div
        className="flex w-full px-16 py-4 overflow-x-auto scrollbar-none scroll-smooth"
        ref={eleRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index} // You should provide a unique key for each item in the map function
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt=""
            className="min-w-full md:h-[450px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
