import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "./head"
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/main.scss";

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
