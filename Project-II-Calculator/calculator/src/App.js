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
          <div className="clear">
              <ActionButton buttonStyles="wide-key clear" text="clear" />
              <ActionButton buttonStyles="action-key" text="&#247;" />
          </div>
          <div className="number-keys">
              <div className="row">
                <NumberButton text="7" />
                <NumberButton text="8" />
                <NumberButton text="9" />
                <ActionButton buttonStyles="action-key" text="&#215;" />
              </div>
              <div className="row"> 
                <NumberButton text="4" />
                <NumberButton text="5" />
                <NumberButton text="6" />
                <ActionButton buttonStyles="action-key" text="&#8722;" />
              </div>
              <div className="row">
                <NumberButton text="1" />
                <NumberButton text="2" />
                <NumberButton text="3" />
                <ActionButton buttonStyles="action-key" text="&#43;" />
              </div>
              <div className="row">
                <NumberButton buttonStyles="wide-key" text="0" />
                <ActionButton buttonStyles="action-key" text="&#61;" />
              </div>
             </div>
          </div>
      </div>
  );
};

export default App;
