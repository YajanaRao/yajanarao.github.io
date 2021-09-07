/**
 * Footer component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Link } from "gatsby";
import Hero from "../components/hero";
import { rhythm } from "../utils/typography";

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRoot = location.pathname === rootPath;

  function Brand() {
    if (isRoot) {
      return <Hero />;
    } else {
      return null;
    }
  }

  function toggleTheme() {
    if (localStorage.theme === "dark") {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }

  React.useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function AppBar() {
    return (
      <div
        className="grid sm:grid-cols-2 grid-cols-1"
        style={{ width: "100%", marginBottom: rhythm(1.5) }}
      >
        <h2
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            width: "inherit",
            marginBottom: rhythm(0.6),
          }}
          className="justify-center flex sm:justify-start"
        >
          {!isRoot && (
            <Link
              style={{
                boxShadow: `none`,
              }}
              className="text-black dark:text-white"
              to={`/`}
            >
              {title}
            </Link>
          )}
        </h2>
        <div
          className="grid grid-cols-4 gap-4"
          style={{ marginBottom: rhythm(0.6) }}
        >
          <div className="justify-center flex sm:justify-start">
            <Link to={`/`} className="h-6">Blogs</Link>
          </div>
          <div className="justify-center flex sm:justify-start">
            <Link to={`/courses/`} className="h-6">Courses</Link>
          </div>
          <div className="justify-center flex sm:justify-start">
            <Link to={`/about`} className="h-6">
              About
            </Link>
          </div>
          <div className="justify-center flex sm:justify-start">
            <div class="flex items-center justify-center w-full mb-12">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggleB"
                    className="sr-only"
                    onClick={toggleTheme}
                  />
                  <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <header
      style={{
        display: `flex`,
        marginBottom: rhythm(0.5),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar />
      <Brand />
    </header>
  );
};

export default Header;
