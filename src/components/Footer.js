import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  text-align: center;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  background: transparent;
  margin-top: 1rem;
`

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} | made en theos with{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a> <br /> Handweaved by{" "}
        <a href="https://github.com/Eddiebee">eddiebee</a>
      </p>
    </Wrapper>
  )
}

export default Footer
