import React, { useState } from "react";
import "./styles.css";
import Home from "./Components/Home"
import Card from "./Components/Card"
import Form from "./Components/Form"
import Search from "./Components/Search"
import Help from "./Components/Help"

export default function App() {
  const [showHome,setHome] = useState(false)
  const [showComedy,setComedy] =useState(false)
  const [showDrama,setDrama] =useState(false)
  const [showSciFi,setSciFi] = useState(false)
  const [showForm,setForm] = useState(false)
  const [id,setId] = useState("")
  const [showSearch,setSearch] = useState(false)
  const [showHelp,setHelp] = useState(false)

  function handleHome(){
    setHome(true)
    setComedy(false)
    setDrama(false)
    setSciFi(false)
    setSearch(false)
    setHelp(false)
    setForm(false)
  }
  function handleSignUp(){
    setHome(false)
    setComedy(false)
    setDrama(false)
    setSciFi(false)
    setSearch(false)
    setHelp(false)
    setForm(true)
  }
  function handleHelp(){
    setHome(false)
    setComedy(false)
    setDrama(false)
    setSciFi(false)
    setSearch(false)
    setHelp(true)
    setForm(false)
  }
 
  function handleComedy(){
    setHome(false)
    setComedy(true)
    setDrama(false)
    setSciFi(false)
    setSearch(false)
    setHelp(false)
    setForm(false)
    
  }
  function handleDrama(){
    setHome(false)
    setComedy(false)
    setDrama(true)
    setSciFi(false)
    setSearch(false)
    setHelp(false)
    setForm(false)
  }
  function handleSciFi(){
    setHome(false)
    setComedy(false)
    setDrama(false)
    setSciFi(true)
    setSearch(false)
    setHelp(false)
    setForm(false)
  }

  function handleSearch(event){
    setHome(false)
    setComedy(false)
    setDrama(false)
    setSciFi(false)
    setSearch(true)
    setHelp(false)
    setForm(false)
  }

  return (
    <div className = "container">
    <div class="topnav">
  <a onClick = {handleHome}>Home</a>
  <div class="dropdown">
  <button class="dropbtn" onclick="myFunction()">Genre
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content" id="myDropdown">
  
    <a onClick = {handleComedy}>Comedy</a>
    <a onClick = {handleDrama}>Drama</a>
    <a onClick = {handleSciFi}>SciFi</a>

  </div>
  </div>
  <a onClick = {handleSignUp}>Sign Up</a>
  <a onClick = {handleHelp}>Help</a>

  <a class ="search-container" onClick = {handleSearch}>Search</a>

</div>

{showHome && <Home/>}
{showComedy && <Card type="comedy" />}
{showDrama && <Card type="drama" />}
{showSciFi && <Card type="scifi" />}
{showForm && <Form/>}
{showHelp && <Help/>}
{showSearch && <Search/>}

</div>

  );
}
