import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  let ImageURL =
    "https://miro.medium.com/max/1080/1*8DDN_DRuSBlM74dVYUjR9Q.png";

  const { setUser, setImgUrl } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, lastName, password });
    setImgUrl(ImageURL);
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />{" "}
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
