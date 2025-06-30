// DarkModeToggle.jsx
import { useState, useEffect } from "react";
import "../styles/DarkModeToggle.css";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button className="darkmode-toggle" onClick={() => setDark(!dark)}>
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
