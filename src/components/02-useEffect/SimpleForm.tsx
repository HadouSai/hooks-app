import React, { ChangeEventHandler, useEffect, useState } from "react";
import propTypes from "prop-types";
import Message from "./Message";

interface Props {
  name?: string;
  email?: string;
}

export const SimpleForm = (initialForm: Props) => {
  const [formState, setFormState] = useState(initialForm);
  //console.log("initialForm", initialForm);

  const { name, email } = formState;

  useEffect(() => {
    console.log("TODO?");
  }, []); //manejarlo de forma individual

  useEffect(() => {
    console.log("email");
  }, [email]);

  // *useEffecty* without dependency is trigger in each change in our component
  // with [] just trigger once 1
  // with an especific value, is trigger just when the specified value is changed
  // recordarlol como UseEffecto una casa con 3 puertas en cada una con una bombilla
  // tiene un return que funciona como una fase de limpieza

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <div>
      <h3>useEffect</h3>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      
      {name === "123" && <Message />}
    </div>
  );
};

SimpleForm.defaultProps = {
  initialForm: {
    name: "",
    email: "",
  },
};
