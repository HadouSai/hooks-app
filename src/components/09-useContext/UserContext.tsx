import React, { createContext } from "react";

interface Props {
  user: any;
  setUser: Function;
}

export const UserContext = createContext({} as Props);
