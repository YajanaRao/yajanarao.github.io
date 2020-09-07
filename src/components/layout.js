import React from "react"

import { rhythm } from "../utils/typography"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header title={title} location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
