import { createContext, useState, useEffect } from 'react';

export const AdminLogedIn = createContext();

export const AdminLogedInProvider = ({ children }) => {
  const [login, setLogin] = useState(false); 

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogin(true);
    }
  }, []);

  return (
    <AdminLogedIn.Provider value={{ login, setLogin }}>
      { children }
    </AdminLogedIn.Provider>
  )
}
