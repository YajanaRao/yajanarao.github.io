import React from "react";
import Toggle from "./Toggle/Toggle";
import Image from "next/image";

const Switch = React.memo(() => {
  const [theme, setTheme] = React.useState("light");
  function toggleTheme() {
    if (localStorage.theme === "dark") {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
    } else {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div style={{ height: 24 }}>
      <Toggle
        icons={{
          checked: (
            <Image
              src={"/assets/switch/moon.png"}
              width={"18"}
              height={"18"}
              alt={"moon"}
              style={{
                pointerEvents: "none",
              }}
              role="presentation"
            />
          ),
          unchecked: (
            <Image
              src={"/assets/switch/sun.png"}
              alt={"sun"}
              width={"18"}
              height={"18"}
              role="presentation"
              style={{
                pointerEvents: "none",
              }}
            />
          ),
        }}
        checked={theme === "dark"}
        onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
});

export default Switch;
