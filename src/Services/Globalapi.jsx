import axios from "axios";
const BaseUrl = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=8a24e63df2c65f43b1ded1d7ab4bd59f";
const Trending = axios.get(BaseUrl + "/trending/movie/day" + API_KEY);

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=8a24e63df2c65f43b1ded1d7ab4bd59f";

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  Trending,
  getMovieByGenreId,
};

// https://api.themoviedb.org/3/trending/movie/day?api_key=8a24e63df2c65f43b1ded1d7ab4bd59f
