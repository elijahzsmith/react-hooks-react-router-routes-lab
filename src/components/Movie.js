import React from "react";

function Movie({ movie }) {
  const { title, time, genres } = movie;

  const displayGenres = genres.map((genre) => {
    return <li key={genre}>{genre}</li>;
  });

  return (
    <div>
      <h2>{title}</h2>
      <h4>Runtime {time} minutes</h4>
      <ul>{displayGenres}</ul>
    </div>
  );
}

export default Movie;
