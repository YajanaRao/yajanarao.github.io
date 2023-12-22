/**
 * Footer component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Link from "next/link";
import Hero from "../components/hero";
import Switch from "./switch";
import { usePathname } from "next/navigation";

const Header = React.memo(function Header({ title }) {
  const rootPath = `/`;
  const pathname = usePathname();
  const isRoot = pathname === rootPath;

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
        className="grid sm:grid-cols-2 grid-cols-1 mb-1"
        style={{ width: "100%" }}
      >
        <div>
          {!isRoot && (
            <h2 className="justify-center flex sm:justify-start mb-1 mt-0 border-0">
              <Link className="text-black dark:text-white" href={`/`}>
                {title}
              </Link>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-4 gap-4 mb-1">
          <div className="justify-center flex sm:justify-start">
            <Link href={`/`} className="h-6">
              Blogs
            </Link>
          </div>
          <div className="justify-center flex sm:justify-start">
            <Link href={`/notes/`} className="h-6">
              Notes
            </Link>
          </div>
          <div className="justify-center flex sm:justify-start">
            <Link href={`/about`} className="h-6">
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
      className="mb-1"
      style={{
        display: `flex`,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar />
      <Brand />
    </header>
  );
});

export default Header;
