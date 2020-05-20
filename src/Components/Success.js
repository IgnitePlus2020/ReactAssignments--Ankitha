import React from "react";
import Shows from "./Shows";
var show = "";
function Success(props) {
  Shows.map(x => {
    if (x.id === parseInt(props.id)) {
      show = x;
    }
  });
  
  return (
    <div className="container">
      <h1>Name : {show.name}</h1>
      <h2>ID: {show.id} </h2>
      <h2>Number Of Seasons: {show.noOfSeasons} </h2>
      <h2> Rating : {show.rating} </h2>
      <h2>Show Description: {show.description} </h2>
    </div>
  );
}

export default Success;
