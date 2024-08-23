import { useState } from "react";
import UserContext from "../Context/UserContext";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser, imgUrl, setImgUrl }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
