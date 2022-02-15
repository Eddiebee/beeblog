import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"
import styled from "styled-components"

const Wrapper = styled.main`
  width: 90vw;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
