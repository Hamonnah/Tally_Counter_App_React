import React, { useState } from "react";
import './App.css';
import Button from './Button';
import Display from "./Display";

function App() {

  const [number, setNumber] = useState(0);
  const [setLevel] = useState(0);
  

  function levelUp(number) {
    setLevel = (number / 10)
   /*  if (Number.isInteger(level)) {
      return score;
    }
    console.log(newNumber); */
  }
  

  function increment() {
    setNumber(number + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>Tally Counter</h1>
      </header>
      <Display displayNumber={number}/>
      <Button incrementMethod={increment}/>
    </div>
  );
}

export default App;
