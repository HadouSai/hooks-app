import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * A simple Counter with quantity for `increment`, `decrement`, `reset`
 * @param {number} initialState
 * @return {*};
 */
const useCounter = (initialState: number = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = (quantity: number = 1) => setCounter(counter + quantity);
  const decrement = (quantity: number = 1) => setCounter(counter - quantity);
  const reset = (quantity: number = 0) =>
    setCounter(quantity > 0 ? quantity : initialState);

  return { counter, increment, decrement, reset };
};

useCounter.propTypes = {
  initialState: PropTypes.number,
};

useCounter.defaultProps = {
  initialState: 10,
};

export default useCounter;
