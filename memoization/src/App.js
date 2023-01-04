import "./App.css";
import { useState, React } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <Header number={number > 5 && number}/>
      {number}
      <button onClick={() => setNumber(number + 1)}>click</button>
    </div>
  );
}
export default App;
