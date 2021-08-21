import React, { memo } from "react";

interface Props {
  value: any;
}

export const Small = memo(({ value }: Props) => {
  console.log(":C");

  return (
    <div>
      <small>{value}</small>
    </div>
  );
});