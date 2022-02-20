import React, { useState } from "react"
import { RiMenu3Line } from "react-icons/ri"
import { Link } from "gatsby"
import logo from "../assets/images/logo.svg"
import styled from "styled-components"

const Wrapper = styled.nav`
  position: relative;
  width: 100%;

  header {
    width: 100%;
    padding-top: 10px;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header img {
    width: 50px;
  }

  header h1 {
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--grey-1000);
    letter-spacing: var(--letterSpacing);
    transition: var(--transition);
  }

  header button {
    cursor: pointer;
    width: 50px;
    appearance: none;
    color: var(--white);
    background: var(--black);
    border: none;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
  }

  header button svg {
    font-size: 1rem;
    color: var(--white);
  }

  ul {
    display: flex;
    height: 0;
    overflow: hidden;
    flex-direction: column;
    list-style-type: none;
    align-items: center;
    transition: var(--transition);
  }

  .show-links {
    height: 12.9375rem;
  }

  li {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--grey-1000);
    letter-spacing: var(--letterSpacing);
    padding: 1rem 0;
    border-top: 1px solid var(--grey-500);
    transition: var(--transition);
  }

  li > a {
    color: var(--grey-900);
    text-decoration: none;
  }

  .active-link {
    color: var(--primary-500);
  }

  .contact-link {
    cursor: pointer;
    appearance: none;
    color: var(--white);
    background: var(--black);
    border: none;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
  }

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    header {
      padding: 5px 0;
      width: 100%;
    }

    header img {
      width: 80px;
    }

    header button {
      display: none;
    }

    ul {
      flex-direction: row;
      flex: 1;
      width: 100%;
      height: auto !important;
      overflow: visible;
      /* background-color: blue; */
    }

    li {
      border: none;
      font-size: 1rem;
      /* padding: 0; */
      /* padding: 5px 0; */
      /* gap: 2; */
      margin-left: 5rem;
    }

    li:last-of-type {
      gap: 0;
    }

    li a {
    }
  }
`

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <Wrapper>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button onClick={() => setShowLinks(!showLinks)}>
          <RiMenu3Line />
        </button>
      </header>

      <ul className={showLinks ? `show-links` : null}>
        <li>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="nav-link" activeClassName="active-link">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="nav-link contact-link btn"
            activeClassName="active-link"
            role="button"
          >
            Contact
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default NavBar
