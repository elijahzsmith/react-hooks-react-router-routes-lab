import React from "react";
import { directors } from "../data";
import Director from "./Director";

const renderDirectors = directors.map((director) => {
  console.log(director);
  return <Director key={director.name} director={director} />;
});

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors;
