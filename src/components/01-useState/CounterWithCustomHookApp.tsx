import React from "react";
import useCounter from "../../hooks/useCounter";

const CounterWithCustomHookApp = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Counter Custom</h2>
      <span> {counter} </span>
      <br />

      <button className="btn btn-primary" onClick={() => increment(2)}>
        + 1
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        - 1
      </button>

      <button className="btn btn-primary" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default CounterWithCustomHookApp;
