import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Login from "./components/Login/Login";
import useLocalStorage from "./components/CustomHook/useLocalStorage";

function App() {
  const [id, setID] = useLocalStorage('id');
  return (
    <>
    <h1>{id}</h1>
      <Login setID ={setID}/>
    </>
  );
}

export default App;

