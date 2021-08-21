import React, { memo } from "react";

interface Props {
  increment: Function;
}

export const ShowIncrement = memo(({ increment }: Props) => {
  console.log("me volvi a llamar");
  return (
    <div>
      <button className="btn btn-primary" onClick={() => increment()}>
        Increment
      </button>
    </div>
  );
});
