import React, { memo } from "react";

interface Props {
  increment: Function;
  quantity: number;
}

export const ChildTask = memo(({ increment, quantity }: Props) => {
  console.log("child");
  return (
    <div>
      <button className="btn btn-primary" onClick={() => increment(quantity)}>
        {quantity}
      </button>
    </div>
  );
});
