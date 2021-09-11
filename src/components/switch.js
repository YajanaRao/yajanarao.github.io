import React from 'react';
// import sun from '../sun';
// import moon from '../moon';
import Toggle from './Toggle/Toggle';
import { useStaticQuery, graphql } from 'gatsby';
import Image from "gatsby-image";

const Switch = React.memo(() => {

    const data = useStaticQuery(graphql`
    query SwitchQuery {
      moon: file(absolutePath: { regex: "/switch/moon.png/" }) {
        childImageSharp {
          fixed(width: 16, height: 16) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sun: file(absolutePath: { regex: "/switch/sun.png/" }) {
        childImageSharp {
          fixed(width: 16, height: 16) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

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
        <div style={{ height: 24 }}>
            <Toggle
                icons={{
                    checked: (
                        <Image
                            fixed={data.moon.childImageSharp.fixed}
                            alt={"moon"}
                            style={{
                                pointerEvents: "none",
                            }}
                            role="presentation"

                        />
                    ),
                    unchecked: (
                        <Image
                            fixed={data.sun.childImageSharp.fixed}
                            alt={"sun"}
                            role="presentation"
                            style={{
                                pointerEvents: "none"
                            }}
                        />
                    ),
                }}
                checked={theme === "dark"}
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            />
        </div>
    )
})


export default Switch;
