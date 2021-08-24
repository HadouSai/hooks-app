import React, { useContext } from "react";
import { UserContext } from "./UserContext";

interface Props {}

export const LoginScreen = (props: Props) => {
  const { setUser } = useContext(UserContext);
  const data = { id: "1", username: "admin", email: "admin@admin.com" };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => setUser(data)}>
        Login
      </button>
    </div>
  );
};
