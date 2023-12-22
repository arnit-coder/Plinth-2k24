import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
  const [signData, setSignData] = useState(null);
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{signData, setSignData, user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;