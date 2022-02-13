import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Blog from "./Blog"

const Wrapper = styled.section`
  padding: 1rem;
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
const FeaturedBlogs = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Blog title="God is good" />
      </Link>
      <Link to="/">
        <Blog title="God is good" />
      </Link>
      <Link to="/">
        <Blog title="God is good" />
      </Link>
    </Wrapper>
  )
}

export default FeaturedBlogs
