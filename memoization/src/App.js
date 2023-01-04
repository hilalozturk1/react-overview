import "./App.css";
import { useState, React, useMemo } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  //data working only once (useMemo)
  const data = useMemo(() => {
    return calculateObject(number);
  }, [number]);

  // const data = calculateObject(number);

  return (
    <div className="App">
      <Header number={number > 5 && number} data={data} />
      <hr />
      {number}
      <hr />
      <button onClick={() => setNumber(number + 1)}>click</button>
    </div>
  );
}

function calculateObject(number) {
  console.log(" ");
  for (let index = 0; index < 100; index++) {console.log(index);}
  return { name: "assa", number };
}

export default App;
