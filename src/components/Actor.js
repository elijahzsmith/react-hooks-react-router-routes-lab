import React from "react";

function Actor({ actor }) {
  const { name, movies } = actor;
  const theirMovies = movies.map((movie) => {
    return <li key={movie}>{movie}</li>;
  });
  return (
    <div>
      <h2>{name}</h2>
      <ul>{theirMovies}</ul>
    </div>
  );
}

export default Actor;
