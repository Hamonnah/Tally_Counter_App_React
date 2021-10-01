import React, { useState, useEffect } from "react";
import './App.css';
import ButtonsPanel from './ButtonsPanel';
import Display from "./Display";

function App() {

  const [number, setNumber] = useState(0);
  const [level, setLevel] = useState(1);
  const [intervalId, setIntervalId] = useState(0);
  const [disabled, setDisabled] = useState(true);
  
  useEffect(() => {
    const incrementLevel = (number) => {
      if (number === 10) {
        setLevel((level) => level + 1);
      } else if (number === 20) {
        setLevel((level) => level + 1);
      } else if (number === 40) {
        setLevel((level) => level + 1);
      } else if (number === 80) {
        setLevel((level) => level + 1);
      } else if (number === 160) {
        setLevel((level) => level + 1);
      } else if (number === 320) {
        setLevel((level) => level + 1);
      } else if (number === 640) {
        setLevel((level) => level + 1);
      } else if (number === 1280) {
        setLevel((level) => level + 1);
      } else if (number === 2560) {
        setLevel((level) => level + 1);
      } else if (number === 5120) {
        setLevel((level) => level + 1);
      } else if (number === 10240) {
        setLevel((level) => level + 1);
      } else if (number === 20480) {
        setLevel((level) => level + 1);
      } else if (number === 40960) {
        setLevel((level) => level + 1);
      } else if (number === 81920) {
        setLevel((level) => level + 1);
      } else if (number === 163840) {
        setLevel((level) => level + 1);
      } else if (number === 327680) {
        setLevel((level) => level + 1);
      }
    };

    incrementLevel(number);
  }, [number]);
  
  function increment() {
    setNumber(number + 1);
    if(level > 3) {
      setDisabled(false);
    }
  }

  function autoClick() {
      const newIntervalId = setInterval(() => {
        setNumber((prevCount) => prevCount + 1);
      }, 800);
      setIntervalId(newIntervalId);
      clearInterval(intervalId);
  }

  function stopAutoClick() {
    clearInterval(intervalId);
    setDisabled(false);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Tally Counter</h1>
      </header>
      <Display displayNumber={number} displayLevel={level}/>
      <ButtonsPanel incrementMethod={increment} autoClickMethod={autoClick} disabledMethod={disabled} stopAutoClickMethod={stopAutoClick}/>
    </div>
  );
}

export default App;