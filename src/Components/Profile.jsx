import { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user, imgUrl } = useContext(UserContext);

  if (!user)
    return (
      <div>
        <h1>Please Login</h1>
      </div>
    );

  return (
    <div
      style={{
        height: "250px",
        width: "350px",
        backgroundColor: "#f5f5f5",
        color: "black",
        marginLeft: "170px",
      }}
    >
      <h2>Welcome</h2>
      <h1
        style={{
          marginLeft: "30px",
        }}
      >
        {user.userName}
      </h1>
      <h2
        style={{
          marginLeft: "170px",
          fontSize: "45px",
        }}
      >
        {user.lastName}
      </h2>
      {console.log(user.password)}
      {<img src={imgUrl} alt="User Image" />}
    </div>
  );
};

export default Profile;
