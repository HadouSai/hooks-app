import React, { useRef } from "react";

interface Props {}

export const FocusScreen = (props: Props) => {
  const inputRef = useRef();
  // variable que cambia sin disparar una actualizacin en la view

  const handleClick = () => {
  };

  return (
    <div>
      <h1>FocusScreen</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Name"
      />

      <button
        className="btn btn-primary mt-5"
        onClick={() => handleClick()}
      ></button>
    </div>
  );
};
