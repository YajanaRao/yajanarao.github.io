import React from 'react';

const Switch = React.memo(() => {
    const [theme, setTheme] = React.useState("light")
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
        <div className="flex items-center justify-center w-full mb-12">
            <label className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        id="toggleB"
                        className="sr-only"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                        aria-label="Switch between Dark and Light mode"
                    />
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
            </label>
        </div>
    );
})


export default Switch;
