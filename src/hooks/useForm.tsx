import React, { useState } from "react";

const useForm = (initialState = {}): [any, (a: any) => void, Function] => {
  const [values, setValues] = useState(initialState);

  const reset = () => setValues(initialState);

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
