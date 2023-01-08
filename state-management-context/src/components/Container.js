import {useTheme} from "../contex/ThemeContext";
import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";

function Container() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      {theme}
      <Header />
      <Button />
      <Profile />
    </div>
  );
}

export default Container;
