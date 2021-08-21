import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import { Small } from "./Small";

interface Props {}

// react nota que hay un cambio en un state
// y vuelve a dibujar todo el componente y sus childs

export const Memorize = (props: Props) => {
  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <hr />

      <h3>
        <Small value={counter} />
      </h3>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
