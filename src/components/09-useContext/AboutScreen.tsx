import React, { useContext } from "react";
import { UserContext } from "./UserContext";

interface Props {}

export const AboutScreen = (props: Props) => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };

  console.log(user);

  return (
    <div>
      <h1>ABOUT</h1>
      <hr />

      <pre className="container">{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-primary" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
