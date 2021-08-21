import React, { useCallback, useState } from "react";
import useCounter from "../../hooks/useCounter";
import { ChildTask } from "./ChildTask";

interface Props {}

export const FatherTask = (props: Props) => {
  const numbers = [2, 4, 6, 8, 10];
  //const { counter, increment } = useCounter(0);

  const [value, setValue] = useState(0);

  const useCallbackIncrement = useCallback(
    (quantity: number) => {
      setValue((value) => value + quantity);
    },
    [setValue]
  );

  return (
    <div>
      <h1>CounterFATHER</h1>

      <h3>{value}</h3>

      <ul>
        {numbers.map((number, i) => (
          <ChildTask
            key={i}
            increment={useCallbackIncrement}
            quantity={number}
          />
        ))}
      </ul>
    </div>
  );
};
