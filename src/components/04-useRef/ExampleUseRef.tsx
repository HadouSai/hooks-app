import React, { useState } from "react";
import MultiplesCustomHooks from "../examples/MultiplesCustomHooks";

interface Props {}

export const ExampleUseRef = (props: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>ExampleUseRef</h1>
      <hr />

      {show && <MultiplesCustomHooks />}
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show / hide
      </button>
    </div>
  );
};
