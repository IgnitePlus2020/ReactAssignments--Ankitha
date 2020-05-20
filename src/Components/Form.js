import React, { useState } from "react";
import Submit from "./Submit";

function Form() {
  const [color, setColor] = useState("#3f3f44");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const[submit,setSubmit] = useState("");

  function handleMouseOver() {
    setColor("black");
  }

  function handleMouseOut() {
    setColor("#3f3f44");
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePhoneNo(event) {
    setPhone(event.target.value);
  }


  function handleAddress(event) {
    setAddress(event.target.value);
  }


  function onSubmit(event) {
    event.preventDefault();
    setSubmit(true);
  }

  return (
    <div className ="form">
      <form >
        <h1 className = "form-heading">
          <b>Sign Up for free!</b>
        </h1>
        <br />
        <input 
          onChange={handleName}
          type="text"
          placeholder="Enter your Name"
          required
        />
        <input 
          onChange={handleEmail}
          type="email"
          placeholder="Enter your Email id"
          name="email"
          required
        />
        <input 
          onChange={handlePhoneNo}
          type="text"
          placeholder="Phone Number"
          name="phone"
          required
        />
        <input
          onChange={handleAddress}
          type="text"
          placeholder="Address"
          name="address"
          required
        />

        <br />
        <button id="form-button"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={onSubmit}
          style={{ backgroundColor: color }}
        >
          Sign Up
        </button>
      </form>
      {submit &&  <Submit
        name={name}
        email={email}
        phone={phone}
        address={address}
      />}
    </div>
  );
}

export default Form;
