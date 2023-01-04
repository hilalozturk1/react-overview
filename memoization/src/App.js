import "./App.css";
import { useState, React, useMemo, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  const increment = useCallback(() => {// prevent child component re-rendering
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      {number}
      <hr />
    </div>
  );
}

export default App;
