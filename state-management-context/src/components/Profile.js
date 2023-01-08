import { useState } from "react";
import {useUserContext} from "../contex/UserContext";

function Profile() {
  const { user, setUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  console.log(user);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ is: 1, userName: "dsf", bio: "sdfs" });
      setLoading(false);
    }, 1500);
  };
  const logout = () => {
    setUser(null)
  };

  return (
    <div>
      Profile <hr />
      {!user && (
        <>
          <button onClick={handleLogin}>Login</button> <hr /> {loading && <div>Loading..</div>}
        </>
      )}
      <code>{JSON.stringify(user)}</code>
      <hr />
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
}

export default Profile;
