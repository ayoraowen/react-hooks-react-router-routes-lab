import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map((eachMovie, index) => {
      return (
        <div key={index}>
          <h2>{eachMovie.title}</h2>
          <p>{eachMovie.time}</p>
          <ul>
            Genres:
            
            {eachMovie.genres.map((eachGenre, index) => <li key={index}>{eachGenre}</li>)}
            
          </ul>
        </div>

      )
    })}


  </div>
  );
}

export default Movies;
