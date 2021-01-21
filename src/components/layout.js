import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
export default function Layout(props) {
  return <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
  </div>
}
