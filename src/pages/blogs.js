import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import slugify from "slugify"
import Layout from "../components/Layout"
import styled from "styled-components"
import Blog from "../components/Blog"

const Wrapper = styled.section`
  min-height: calc(100vh - (6rem + 4rem));

  @media screen and (min-width: 992px) {
    main {
      width: 90vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

const blogs = ({ data }) => {
  console.log(data.allContentfulBlogPost.nodes)
  const blogs = data.allContentfulBlogPost.nodes
  return (
    <Layout>
      <Wrapper>
        <h1>honey sweet blogs</h1>
        <main>
          {blogs.map(blog => {
            const {
              id,
              title,
              date,
              author,
              banner,
              tags: { tags },
              content: { raw },
            } = blog
            const hashTags = tags.map(tag => `#${tag}`)
            const rawDocument = JSON.parse(raw)
            const slug = slugify(title, {
              lower: true,
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
          })}
        </main>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: date, order: DESC }) {
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

export default blogs
