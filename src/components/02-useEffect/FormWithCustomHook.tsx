import React, { useEffect } from "react";
import propTypes from "prop-types";
import Message from "./Message";
import useForm from "../../hooks/useForm";

interface Props {
  name?: string;
  email?: string;
  password?: string;
}

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues as any;

  useEffect(() => {
    console.log("emailChanged");
  }, [email]);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <h3>Custom Hook</h3>
      <hr />

      <form action="" onSubmit={handleSubmit}>
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

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="*****"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>

      {name === "123" && <Message />}
    </div>
  );
};

FormWithCustomHook.defaultProps = {
  initialForm: {
    name: "",
    email: "",
    password: "",
  },
};
