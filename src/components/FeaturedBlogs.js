import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import slugify from "slugify"
import styled from "styled-components"
import Blog from "./Blog"

const query = graphql`
  {
    allContentfulBlogPost(
      filter: { featured: { eq: true } }
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        title
        id
        date(fromNow: true)
        author {
          name
          avatar {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        tags {
          tags
        }
        content {
          raw
        }
        banner {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const FeaturedBlogs = () => {
  const data = useStaticQuery(query)
  const blogs = data.allContentfulBlogPost.nodes
  return (
    <Wrapper>
      <h1>Featured Blogs</h1>
      <main>
        {blogs.map(
          ({
            id,
            title,
            date,
            author,
            banner,
            tags: { tags },
            content: { raw },
          }) => {
            const hashTags = tags.map(tag => `#${tag}`)
            const rawDocument = JSON.parse(raw)
            const slug = slugify(title, {
              lower: true,
              // strict: true,
              remove: /[*+~.()'"!:@]/g,
            })
            return (
              <Link to={`/blogs/${slug}`} key={id}>
                <Blog
                  title={title}
                  date={date}
                  author={author}
                  banner={banner}
                  tags={hashTags.join(" ")}
                  content={documentToReactComponents(rawDocument)}
                />
              </Link>
            )
          }
        )}
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 1rem;
  @media screen and (min-width: 992px) {
    main {
      width: 90vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default FeaturedBlogs
