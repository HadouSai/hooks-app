import React, { useLayoutEffect, useRef, useState } from "react";
import useCounter from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layoutEffect.css";

const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data } = useFetch(url);

  let quoteU = "";

  const ref = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState({});

  // despues de cada renderizacion finalizada del DOM
  useLayoutEffect(() => {
    if (ref?.current) {
      console.log("aaa", ref.current.getBoundingClientRect());
      setBoxSize(ref.current.getBoundingClientRect());
    }
  }, [data]);

  if (data?.[0]) {
    const { quote } = data[0];
    quoteU = quote;
  }

  return (
    <div>
      <h1>LayoutEFFEC </h1>
      <hr />

      <blockquote className="">
        <p ref={ref} className="mb-0" style={{ display: "inline" }}>
          {quoteU}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={() => increment()}>
        Next
      </button>
    </div>
  );
};

export default LayoutEffect;
