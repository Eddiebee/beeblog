import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import FeaturedBlogs from "../components/FeaturedBlogs"

const Wrapper = styled.section`
  min-height: calc(100vh - (6rem + 4rem));

  .hero {
    position: relative;
    height: 50vh;
    margin-bottom: 2rem;
  }
  .hero-img {
    height: 100%;
    border-radius: var(--borderRadius);
  }
  .hero-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: var(--borderRadius);
  }
  .hero-text {
    color: var(--white);
    text-align: center;
  }
`
export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <section className="hero">
          <StaticImage
            src="../assets/images/hero-bg.jpg"
            alt="bee blog hero background"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-content">
            <div className="hero-text">
              <h1>Welcome to Bee Blog</h1>
              <h4>...honey sweet blogs</h4>
            </div>
          </div>
        </section>
        <FeaturedBlogs />
      </Wrapper>
    </Layout>
  )
}
