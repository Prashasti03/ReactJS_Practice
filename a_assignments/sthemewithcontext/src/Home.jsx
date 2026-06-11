import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { theme, setLightTheme, setDarkTheme } =
    useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>{theme.toUpperCase()} THEME</h1>

      <button onClick={setLightTheme}>Light Mode</button>
      <button onClick={setDarkTheme}>Dark Mode</button>
    </div>
  );
}

export default Home;