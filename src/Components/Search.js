import React, { useState } from "react";
import Success from "./Success";
import Failed from "./Failed";
import Shows from "./Shows"

export default function App() {
  const [id, setID] = useState(0);
  const [color, setColor] = useState("#3f3f44");
  const [showSuccess,setSuccess] = useState(false)
  const [showFailed,setFailed] = useState(false)

  function handleClick() {
    console.log(id);
    var flag = true;
    Shows.map(customer => {
      if (customer.id === parseInt(id)) {
        setSuccess(true)
        setFailed(false)
        flag = false;
      }
    });

    if (flag === true) {
     setSuccess(false)
     setFailed(true)
    }
  }

  function handleOnChange(event) {
    setID(event.target.value);
  }

  function handleMouseOver() {
    setColor("black");
  }
  function handleMouseOut() {
    setColor("#3f3f44");
  }

  return (
    <div className="search">
      <input 
        onChange={handleOnChange}
        type="text"
        placeholder="Search for an ID"
      />
      <button 
        style={{ backgroundColor: color }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Search
      </button>

      {showSuccess && <Success id={id}/>}
      {showFailed && <Failed/>}
    </div>
  );
}
