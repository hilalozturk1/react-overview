import { React, useContext } from "react";
import ThemeContext from "../contex/ThemeContext";

function Header() {
  const data = useContext(ThemeContext);
  console.log(data.theme);
  return (
    <div>
      Header Active Theme : {data.theme}
      <button
        onClick={() => (data.theme === "dark" ? data.setTheme("light") : data.setTheme("dark"))}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Header;
