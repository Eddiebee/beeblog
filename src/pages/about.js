import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import FeaturedBlogs from "./../components/FeaturedBlogs"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Wrapper = styled.section`
  min-height: calc(100vh - (6rem + 13rem));

  p {
    margin-bottom: 2rem;
  }

  main {
    display: grid;
    grid-gap: 20px;
    img {
      border-radius: 10px;
    }

    /* media queries */
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

const About = () => {
  return (
    <Layout>
      <Wrapper>
        <main>
          <article>
            <h1>Welcome to about page</h1>

            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link
              to="/contact"
              className="contact-link btn"
              activeClassName="active-link"
              role="button"
            >
              Contact
            </Link>
          </article>

          <StaticImage
            src="../assets/images/hero-bg.jpg"
            layout="FULL_WIDTH"
            placeholder="tracedSVG"
            alt="bee blog"
          />
        </main>
      </Wrapper>
      <FeaturedBlogs />
    </Layout>
  )
}

export default About
