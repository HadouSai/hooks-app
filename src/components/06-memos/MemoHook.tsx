import React, { useMemo, useState } from "react";
import { process } from "../../helpers/processP";
import useCounter from "../../hooks/useCounter";

interface Props {}
export const MemoHooks = (props: Props) => {
  const { counter, increment } = useCounter(7000);
  const [show, setShow] = useState(true);

  const memoProcess = useMemo(() => process(counter), [counter]);
  // recuerde valores y no vuelva hacer procesos, por que para que??
  // ejemplo una peticion cada rato pediria
  // el resultado es el que se pone

  return (
    <div>
      <h2>MemoHooks</h2>
      <hr />

      <small>{counter}</small>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <p>{memoProcess}</p>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
