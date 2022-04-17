import React from "react";
import { actors } from "../data";
import Actor from "./Actor";

const renderActors = actors.map((actor) => {
  return <Actor key={actor.name} actor={actor} />;
});

function Actors() {
  return (
    <>
      <h1>Actors Page</h1>
      {renderActors}
    </>
  );
}

export default Actors;
