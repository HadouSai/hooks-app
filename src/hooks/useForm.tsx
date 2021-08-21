import React, { useState } from "react";

const useForm = (initialState = {}): [any, (a: any) => void] => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, handleInputChange];
};

export default useForm;
