import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movies }) {
  return (
    <div>
      <img
        src={IMAGE_BASE_URL + movies.backdrop_path}
        alt=""
        className="w-32 md:w-48 rounded-md hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in"
      />
    </div>
  );
}

export default HrMovieCard;
