import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import FeaturedBlogs from "../components/FeaturedBlogs"

const Wrapper = styled.section`
  min-height: calc(100vh - (6rem + 9rem));

  p {
    margin-bottom: 20px;
  }

  main {
    display: grid;
    grid-gap: 20px;

    /* media queries */
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    form {
      background: var(--white);
      display: flex;
      flex-direction: column;
      align-content: space-around;
      padding: 20px;
      border-radius: var(--borderRadius);

      label {
        text-transform: capitalize;
        margin-bottom: 10px;
      }
      input {
        border: 1px solid var(--grey-900);
        height: 2rem;
      }

      textarea,
      input {
        margin-bottom: 20px;
        border-radius: var(--borderRadius);
      }
    }
  }
`

const Contact = () => {
  return (
    <Layout>
      <Wrapper>
        <main>
          <article>
            <h1>Want to keep in touch?</h1>

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
          </article>
          <form>
            <label htmlFor="name">your name</label>
            <input type="text" id="name"></input>
            <label htmlFor="email">your email</label>
            <input type="email" id="email"></input>
            <label htmlFor="message">message</label>
            <textarea id="message" cols={20} rows={10}></textarea>
            <button type="submit" className="btn contact-link">
              submit
            </button>
          </form>
        </main>
      </Wrapper>
      <FeaturedBlogs />
    </Layout>
  )
}

export default Contact
