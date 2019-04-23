import React from 'react';
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/NumberButton";
import './App.scss';

const App = () => {
  return (
    <div className="container">
      <div className="action-keys">
        <div>
          <ActionButton buttonStyles="wide-key" text="clear" />
        </div>
        <div>
        <ActionButton text="&#247;" />
        </div>
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
  );
};

export default App;
