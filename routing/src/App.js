import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users" element={<Users />}>
            <Route path=":id" element={<User />}></Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <NavLink to={`/users/${item.id}`}>user {item.name}</NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => setUser(res.data));
  }, [id]);
  return (
    <div>
      <h2>user detail: {id}</h2>
      <code>{JSON.stringify(user)}</code> <br /> <br />
      <NavLink to={`/users/${parseInt(id) + 1}`}>Next User {parseInt(id) + 1}</NavLink>
    </div>
  );
}
function Error() {
  return <div>This page was not found.</div>;
}

export default App;
