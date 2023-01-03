import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
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
            <Link to={`/user/${item.id}`}>user {item.name}</Link>
          </li>
        ))}
      </ul>
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
      <Link to={`/user/${parseInt(id) + 1}`}>Next User {parseInt(id) + 1}</Link>
    </div>
  );
}

export default App;
