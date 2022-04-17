import React from "react";
import { movies } from "../data";
import Movie from "./Movie";

const renderMovies = movies.map((movie) => {
  console.log(movie);
  return <Movie key={movie.title} movie={movie} />;
});

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>{renderMovies}</div>
    </div>
  );
}

export default Movies;
