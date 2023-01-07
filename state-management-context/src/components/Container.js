import { useContext } from "react";
import ThemeContext from "../contex/ThemeContext";
import Button from "./Button";
import Header from "./Header";

function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      {theme}
      <Header />
      <Button />
    </div>
  );
}

export default Container;
