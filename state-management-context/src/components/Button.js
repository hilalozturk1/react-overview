import {useTheme} from "../contex/ThemeContext";

function Button() {
  const data = useTheme();

  return (
    <div>
      Active Theme : {data.theme}
      <button
        onClick={() => (data.theme === "dark" ? data.setTheme("light") : data.setTheme("dark"))}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Button;
