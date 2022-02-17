import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../../components/Layout"
import styled from "styled-components"

const BlogPost = ({ data }) => {
  const {
    title,
    date,
    author,
    banner,
    tags: { tags },
    content,
  } = data.contentfulBlogPost
  const pathToBanner = getImage(banner)
  const pathToAuthorImg = getImage(author.avatar)
  const rawDocument = JSON.parse(content.raw)
  const hashTags = tags.map(tag => `#${tag}`).join(" ")

  return (
    <Layout>
      <Wrapper>
        <section className="info">
          <div className="info-banner">
            <GatsbyImage
              image={pathToBanner}
              alt={banner.title}
              className="banner"
            />
          </div>
        </section>
        <section className="overlay">
          <header>
            <h1>{title}</h1>
            <GatsbyImage
              image={pathToAuthorImg}
              alt={author.name}
              className="author-avatar"
            />
            <p>
              Written by &nbsp;
              <a
                href={author.website}
                target="_blank"
                rel="noreferrer"
                aria-label={`${author.name}'s website`}
              >
                {author.name}
              </a>
              &nbsp;
              <i className="date">{date}</i>
            </p>
            <p className="hash-tags">{hashTags}</p>
          </header>
        </section>
        <section className="content">
          {documentToReactComponents(rawDocument)}
        </section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(fromNow: true)
      author {
        name
        quote
        website
        avatar {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          title
        }
      }
      banner {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        title
      }
      tags {
        tags
      }
      content {
        raw
      }
      slug
    }
  }
`
const Wrapper = styled.section`
  position: relative;
  display: grid;
  min-height: calc(100vh - (6rem + 4rem));
  background: var(--grey-200);

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

  .info-banner {
    position: sticky;
    top: 0;
  }

  .banner {
    height: 32vh;
    background-color: var(--black);
  }

  .overlay {
    width: 100%;
    min-height: 32vh;
    background: rgba(0, 0, 0, 0.3);
    position: sticky;
    top: 0;
    margin-bottom: 1.5rem;
  }

  .overlay header {
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    color: var(--white);
  }

  .hash-tags {
    margin-top: 10px;
    font-family: var(--headingFont);
  }

  .author-avatar {
    background: var(--grey-400);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .info {
    position: sticky;
    top: 0;
  }

  .content {
    padding: 10px;
    line-height: 2;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(1, 1fr);

    .info header {
      flex-direction: column;
    }

    .content {
      width: 60vw;
      margin: 0 auto;
    }
  }
`
export default BlogPost
