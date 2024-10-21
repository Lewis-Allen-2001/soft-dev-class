'use client'
import { useContext } from "react";

import { UserContext } from "@/app/Context/UserContext";
import { ThemeContext } from "@/app/Context/ThemeContext";

export function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  let {theme, setTheme} = useContext(ThemeContext);


  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
}

  return (
    <>
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("Jeff")}>
        Change username to Jeff
      </button>
      <h2>Theme: {theme}</h2>
      <button onClick={handleThemeToggle}>Change theme to dark</button>
    </>
  );

}

