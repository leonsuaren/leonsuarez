import { createContext, useState } from 'react';

export const AdminLogedIn = createContext();

export const AdminLogedInProvider = ({ children }) => {
  const [login, setLogin] = useState(false); 

  return (
    <AdminLogedIn.Provider value={{ login, setLogin }}>
      { children }
    </AdminLogedIn.Provider>
  )
}
