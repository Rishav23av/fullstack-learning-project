import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div className="counter-card">
        <h1>Counter App</h1>
        <div className="display">
          <h2>{count}</h2>
        </div>
        <div className="buttons">
          <button onClick={decrement} className="btn minus">
            -
          </button>
          <button onClick={reset} className="btn reset">
            Reset
          </button>
          <button onClick={increment} className="btn plus">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;