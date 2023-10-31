import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movies }) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movies.poster_path}
        alt=""
        className="w-[110px] md:w-[200px] rounded-md hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in"
      />
    </>
  );
}

export default MovieCard;
