import React from "react";
import { movies } from "../data";

function Movies() {
  const movie_list = movies.map((movie) => {
    const genres = movie.genres.map((genre) => {
      return <li key={genre}>{genre}</li>
    })

    return <div key={movie.title}>
      <h5>{movie.title}</h5>
      <span>{movie.time} mins</span>
      <ul>{genres}</ul>
    </div>
  });

  return <div>
    <h1>Movies Page</h1>
    <div>
    {movie_list}
    </div>
  </div>;
}

export default Movies;
