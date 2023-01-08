import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const values = { user, setUser };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContextProvider };
