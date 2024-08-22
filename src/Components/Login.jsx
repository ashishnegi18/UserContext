import { useState } from "react";

useState
const Login = () => {
  const[userName, setUserName]=useState('')
  const[lastName, setLastName]=useState('')
  return (
    <>
      <h2>Login</h2>

      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />
      {"     "}
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="lastName"
      />
      <button>submit</button>
    </>
  );
};

export default Login;
