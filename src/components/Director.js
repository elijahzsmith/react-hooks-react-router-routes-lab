import React from "react";

function Director({ director }) {
  const { name, movies } = director;

  const theirMovies = movies.map((movie) => {
    return <li key={movie}>{movie}</li>;
  });

  return (
    <div>
      <h2>{name}</h2>
      {theirMovies}
    </div>
  );
}

export default Director;
