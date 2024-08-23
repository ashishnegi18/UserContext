import { useContext } from "react";
import UserContext from "../Context/UserContext";

const User = () => {
  const { user } = useContext(UserContext);
//   console.log(lastName)
  return <div>{user.lastName}</div>;
};

export default User;
