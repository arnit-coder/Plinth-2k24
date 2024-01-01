import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
  const [signData, setSignData] = useState(null);
  const [user, setUser] = useState([]);
  const [signedIn , setSignedIn] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token")){
      setUser(JSON.parse(localStorage.getItem("user")))
      setSignedIn(true);
    }
  }, [])



  return (
    <UserContext.Provider value={{signData, setSignData, user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;