import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((eachActor, index) => {
        return (
          <div key={index}>
            <h2>{eachActor.name}</h2>
            <ul>
              Movies:
              
              {eachActor.movies.map((eachMovie, index) => <li key={index}>{eachMovie}</li>)}
              
            </ul>
          </div>
        )
      })}

    
    </div>
  );
}

export default Actors;
