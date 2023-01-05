import "./App.css";
import Button from "./components/Button";
import ThemeContext from "./contex/ThemeContext";


function App() {
  console.log(ThemeContext);
  return <ThemeContext.Provider value={"dark"}>
    <Button/>
  </ThemeContext.Provider>;
}

export default App;
