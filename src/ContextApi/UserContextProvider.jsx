import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [signData, setSignData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setSignData(token);
    } else {
      setSignData(null);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ signData, setSignData, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
