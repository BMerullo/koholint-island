import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

import "../assets/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <body className="mx-4 md:mx-[300px]">
        <NavBar />
        {children}
        <Footer />
      </body>
    </>
  )
}

export default Layout
