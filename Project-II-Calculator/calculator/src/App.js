import React from 'react';
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

import './App.scss';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <div className="sub-container"> 

      <div>
        <div className="clear">
            <ActionButton buttonStyles="wide-key" text="clear" />
          </div>

        <div className="number-keys">
          <div className="row">
            <NumberButton text="7" />
            <NumberButton text="8" />
            <NumberButton text="9" />
          </div>
          <div className="row"> 
            <NumberButton text="4" />
            <NumberButton text="5" />
            <NumberButton text="6" />
          </div>
          <div className="row">
            <NumberButton text="1" />
            <NumberButton text="2" />
            <NumberButton text="3" />
          </div>
          <div className="row">
            <NumberButton buttonStyles="wide-key" text="0" />
          </div>

          </div>

          </div>

          <div className="action-keys-column">
            <ActionButton buttonStyles="action-key" text="&#247;" />
            <ActionButton buttonStyles="action-key" text="&#215;" />
            <ActionButton buttonStyles="action-key" text="&#8722;" />
            <ActionButton buttonStyles="action-key" text="&#43;" />
            <ActionButton buttonStyles="action-key" text="&#61;" />
          </div>
        </div>
    </div>
  );
};

export default App;
