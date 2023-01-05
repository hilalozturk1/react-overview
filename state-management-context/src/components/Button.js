import { useContext } from "react";
import ThemeContext from "../contex/ThemeContext";

function Button() {
  const data = useContext(ThemeContext);
  console.log('data', data)
  return <div>Button</div>;
}

export default Button;
