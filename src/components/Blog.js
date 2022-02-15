import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Blog = ({ title, date, author, banner, tags, content }) => {
  const pathToImage = getImage(author.avatar)
  const pathToBanner = getImage(banner)
  return (
    <Wrapper>
      <div className="banner sticky">
        <GatsbyImage
          image={pathToBanner}
          alt="banner"
          className="banner sticky"
        />
      </div>
      <div className="heading sticky">
        <h2>{title}</h2>
        <h4>{date}</h4>
        <p>{author.name}</p>
        <GatsbyImage
          image={pathToImage}
          alt={title}
          className="author-avatar"
        />
      </div>
      <div className="tags sticky">{tags}</div>
      <div className="content">{content}</div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  height: 400px;
  max-width: 336px;
  background: var(--white);
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: var(--borderRadius);
  overflow-y: scroll;

  /* scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }

  a {
    background: var(--grey-500);
    padding: 0.1rem;
  }

  code {
  }

  ul {
    list-style-type: square;
    margin: 1rem;
  }

  .a,
  .banner,
  .heading {
    border-radius: var(--borderRadius);
  }

  .banner {
    top: 0;
    height: 160px;
    max-width: 336px;
    background: var(--black);
  }

  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 160px;
    padding: 10px;
    color: var(--white);
    background: rgba(0, 0, 0, 0.3);
  }

  .author-avatar {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--grey-500);
  }

  .tags {
    top: 10rem;
    background: var(--grey-400);
    width: 100%;
    margin: 0.4rem 0;
    padding: 2px;
    font-size: 0.8rem;
    font-family: var(--headingFont);
  }

  .content {
    margin-top: 0.4rem;
    padding: 10px;
  }

  .content p {
    line-height: 2;
  }

  .sticky {
    position: sticky;
  }
`
export default Blog
