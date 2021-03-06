import React, { createContext, useContext, useState } from 'react';
import { getToken } from '../config/auth';

const auth = {
    isAuthenticated: false,
    signin(cb) {
        auth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        auth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
  

const authContext = createContext();

function useProvideAuth() {

    const token = getToken();

    const [ user, setUser] = useState(token);
  
    const signin = (cb) => {

      return auth.signin((token) => {
          
        cb();

      });
    };
  
    const signout = cb => {
      return auth.signout(() => {
        setUser(null);
        cb();
      });
    };
  
    return {
      user,
      signin,
      signout
    };
}

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
}

export default function useAuth() {
    return useContext(authContext);
}
