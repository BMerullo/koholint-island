import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

import "../assets/main.css"

const Layout = ({ children }) => {
  return (
    <Layout className="">
      <NavBar />
      <body className="mx-4 lg:mx-[300px]">{children}</body>
      <Footer />
    </Layout>
  )
}

export default Layout
