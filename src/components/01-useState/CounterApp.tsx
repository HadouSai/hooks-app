import React, { useState } from "react";

export const CounterApp = () => {
    
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 20,
  });

  const { counter1, counter2 } = state;

  console.log(counter1, counter2);

  return (
    <div>
      <h1>Counter</h1>
      <span>{counter1}</span>
      <span>{counter2}</span>

      <br />
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        + 1
      </button>
    </div>
  );
};
