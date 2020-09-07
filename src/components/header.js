/**
 * Footer component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Hero from "../components/hero"
import { rhythm } from "../utils/typography"

const Header = ({ location, title }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRoot = location.pathname === rootPath;

    function Brand() {
        if (isRoot) {
            return <Hero />
        } else {
            return null
        }
    }


    function AppBar() {

        return (
            <div style={{ display: "flex", width: "100%", marginBottom: rhythm(1.5) }}>
                <h3
                    style={{
                        fontFamily: `Montserrat, sans-serif`,
                        marginTop: 0,
                        marginBottom: 0,
                        width: "inherit"
                    }}
                >
                    {!isRoot && <Link
                        style={{
                            boxShadow: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>}
                </h3>
                <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                    <Link to={`/courses/`} style={{ marginRight: 12 }}>
                        Courses
                    </Link>
                    <Link to={`/`} style={{ marginRight: 12 }}>
                        Blogs
                    </Link>
                </div>
            </div>
        )
    }



    return (
        <header
            style={{
                display: `flex`,
                marginBottom: rhythm(0.5),
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <AppBar />
            <Brand />
        </header>
    )
}

export default Header
