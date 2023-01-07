import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./contex/ThemeContext";
import { UserContextProvider } from "./contex/UserContext";

function App() {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <Container />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
