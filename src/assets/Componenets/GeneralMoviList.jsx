import React from "react";
import GeneralList from "../../Constant/GeneralList";
import MovieList from "./MovieList";

function GeneralMoviList() {
  return (
    <div>
      {GeneralList.genere.map(
        (iteam, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:16">
              <h2 className="text-[20px] text-white font-bold">{iteam.name}</h2>
              <MovieList generId={iteam.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GeneralMoviList;
