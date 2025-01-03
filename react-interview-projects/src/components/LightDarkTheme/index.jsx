import useLocalStorage from "./useLocalStorage";
import './styles.css';
export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        {theme === 'dark' ? <p> O mah gad this world is fuckin DARK 🥶 </p> : <p>thank god lights are ON 🤗</p>}
        <button onClick={handleToggleTheme}>Change it</button>
      </div>
    </div>
  );
}
