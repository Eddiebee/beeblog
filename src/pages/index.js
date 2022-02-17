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

  /* animations from w: http://animista.net, t: @cssanimista */
  .tracking-in-contract {
    -webkit-animation: tracking-in-contract 2s
      cubic-bezier(0.215, 0.61, 0.355, 1) 1000ms both;
    animation: tracking-in-contract 2s cubic-bezier(0.215, 0.61, 0.355, 1)
      1000ms both;
  }

  @-webkit-keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }
  @keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
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
            <div className="hero-text tracking-in-contract">
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
