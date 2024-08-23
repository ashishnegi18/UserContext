import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";
import User from "./Components/User";
const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
      <User />
    </UserContextProvider>
  );
};

export default App;
