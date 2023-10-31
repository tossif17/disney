import React, { useEffect, useState } from "react";
import Globalapi from "../../Services/Globalapi";
import MovieCard from "./MovieCard";

function MovieList({ generId }) {
  useEffect(() => {
    getGenerId();
  }, []);
  const [getGener, setGenr] = useState([]);
  const getGenerId = () => {
    Globalapi.getMovieByGenreId(generId).then((res) => {
      setGenr(res.data.results);
    });
  };
  return (
    <div className="flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5">
      {getGener.map((iteam, index) => (
        <MovieCard movies={iteam} />
      ))}
    </div>
  );
}

export default MovieList;
