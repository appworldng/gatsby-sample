import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./header"
import Footer from "./footer"
import "./layout.module.scss"

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
