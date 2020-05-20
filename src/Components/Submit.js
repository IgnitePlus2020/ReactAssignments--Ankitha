import React, { useState } from "react";
import App from "../App";
import ReactDOM from "react-dom";

function Submit(props) {
  const [color, setColor] = useState("#3f3f44");

  function handleMouseOver() {
    setColor("black");
  }
  function handleMouseOut() {
    setColor("#3f3f44");
  }
  function handleClick() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  return (
    <div className="container">
      <h1> Sign Up Successful! </h1>
      <h3> Name : {props.name}</h3>
      <h3> Email : {props.email}</h3>
      <h3> Phone Number : {props.phone}</h3>
      <h3> Address : {props.address}</h3>
      <br />
      <h2> Thankyou for Choosing Us! </h2>
      <br />
      <button
        style={{ backgroundColor: color }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
       Continue Browsing!
      </button>
    </div>
  );
}

export default Submit;
