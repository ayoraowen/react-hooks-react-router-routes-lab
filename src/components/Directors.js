import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((eachDirector, index) => {
        return (
          <div key={index}>
            <h2>{eachDirector.name}</h2>
            <ul>
              Movies:
              
              {eachDirector.movies.map((eachMovie, index) => <li key={index}>{eachMovie}</li>)}
              
            </ul>
          </div>
        )
      })}

    </div>
  );
}

export default Directors;
