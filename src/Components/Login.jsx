import { useState,useContext } from "react";
import UserContext from "../Context/UserContext";

useState
const Login = () => {
  const[userName, setUserName]=useState('')
  const[lastName, setLastName]=useState('')
  
  const {setUser} = useContext(UserContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
    setUser({userName,lastName})  
  }
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
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default Login;
