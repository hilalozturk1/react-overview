import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./contex/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
