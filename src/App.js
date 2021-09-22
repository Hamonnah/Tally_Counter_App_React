import React, { useState, useEffect } from "react";
import './App.css';
import Button from './Button';
import Display from "./Display";

function App() {

  const [number, setNumber] = useState(0);
  const [level, setLevel] = useState(1);
  
  
  function incrementLevel(number) {
    
    if(number === 10) {
      setLevel(level + 1);
    } else if (number === 20) {
      setLevel(level + 1);
    } else if (number === 40) {
      setLevel(level + 1);
    } else if (number === 80) {
      setLevel(level + 1);
    } else if (number === 160) {
      setLevel(level + 1);
    } else if (number === 320) {
      setLevel(level + 1);
    } else if (number === 640) {
      setLevel(level + 1);
    } else if (number === 1280) {
      setLevel(level + 1);
    } else if (number === 2560) {
      setLevel(level + 1);
    } else if (number === 5120) {
      setLevel(level + 1);
    } else if (number === 10240) {
      setLevel(level + 1);
    } else if (number === 20480) {
      setLevel(level + 1);
    } else if (number === 40960) {
      setLevel(level + 1);
    } else if (number === 81920) {
      setLevel(level + 1);
    } else if (number === 163840) {
      setLevel(level + 1);
    } else if (number === 327680) {
      setLevel(level + 1);  
    }
  
  }

  function Increment() {
    setNumber(number + 1);
    incrementLevel(number);
  }

  const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      document.title = `Kliknięto ${count} razy`;
    }

 /*  const Example = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
  
    return(
      <div>
        <h1>The component has been rendered for {count} seconds</h1>
       {/*  <button onClick={handleClick}>Start counting</button> */
      /*   <Button autoClickMethod={handleClick} />
      </div>
    );
  }; */
 
  /* function Example() {
    const [count, setCount] = useState(0);
  
    
    useEffect(() => {
      let id = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearInterval(id);
    });

      document.title = `Kliknięto ${count} razy`;
  
    return (
      <div>
        <p>Kliknięto {count} razy</p>
        <button onClick={() => setCount(count + 1)}>
          Kliknij mnie
        </button>
      </div>
    );
  } */

  /* function Example() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let id = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      document.title = `Kliknięto ${count} razy`;
    });
  
    return (
      <div>
        <p>Kliknięto {count} razy</p>
        <button className="AutoClickButton" onClick={() => setCount(count + 1)}>auto-clicker</button>
      </div>
    );
  } */
  /* function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let id = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearInterval(id);
    });
  
    return <h1>{count}</h1>;
  } */


/* function autoClick()
{
  let intervalID = setInterval(autoClick, 2000);
  increment();
  console.log(intervalID);
 */

  /* function autoClick() {
    useInterval(() => {
      increment();
    }, 1000);
    
  } */

  return (
    <div className="App">
      <header className="App-header">
       <h1>Tally Counter</h1>
      </header>
      <Display displayNumber={number} displayLevel={level}/>
      <Button incrementMethod={Increment} />
      <button onClick={handleClick}>Start counting</button>
     {/*  <Counter/> */}
    
    </div>
  );
}

export default App;
