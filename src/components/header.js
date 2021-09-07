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
import Switch from "./switch";

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
            <Switch />
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
