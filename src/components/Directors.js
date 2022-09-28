import React from "react";
import { directors } from "../data";

function Directors() {
  const director_list = directors.map((director) => {
    const movies = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })

    return <div key={director.name}>
      <h6>{director.name}</h6>
      <ul>{movies}</ul>
    </div>
  })

  return <div>
    <h1>Directors Page</h1>
    <div>{director_list}</div>
  </div>;
}

export default Directors;
