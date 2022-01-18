import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Login from "./components/Login/Login";
import useLocalStorage from "./components/CustomHook/useLocalStorage";
import DashBoard from "./components/Dashboard/DashBoard";

function App() {
  const [id, setID] = useLocalStorage('id');
  return (
    <>  
      {id ? <DashBoard id={id}/> : <Login setID ={setID}/>}
    </>
  );
}

export default App;

