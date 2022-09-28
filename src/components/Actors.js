import React from "react";
import { actors } from "../data";

function Actors() {
  const actor_list = actors.map((actor) => {
    const movies = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })

    return <div key={actor.name}>
      <h6>{actor.name}</h6>
      <ul>{movies}</ul>
    </div>
  })

  return <div>
    <h1>Actors Page</h1>
    <div>{actor_list}</div>
  </div>;
}

export default Actors;
