import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export const About = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>About</h2>
      <div>{JSON.stringify(user, null, 2)}</div>
    </div>
  );
};
