import React from "react";
import Shows from "./Shows";

function Failed() {
  return (
    <div className="search">
      <h4> Oops! There is no Show of the mentioned ID </h4>
      <br />
      <h4>Here's a list of Valid ID's you can choose among.. </h4>
      <br />
      <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
        
          {Shows.map(show => {
            return (
             <tr>
                <td>{show.id}</td>
                <td>{show.name}</td>
                </tr>
            );
          })}
       
      </table>
    </div>
  );
}

export default Failed;
