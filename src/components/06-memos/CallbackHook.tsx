import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

interface Props {}

export const CallbackHook = (props: Props) => {
  const [counter, setCounter] = useState(10);

  //const increment = () => setCounter(counter + 1);

  const increment = useCallback(
    (val) => {
      setCounter((c) =>  c + val);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>Usecallback</h1>
      <hr />

      <h3>{counter}</h3>

      <ShowIncrement increment={() => increment(5)} />
    </div>
  );
};
