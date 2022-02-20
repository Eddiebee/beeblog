import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-height: calc(100vh - (6rem + 8rem));

  h1 {
    font-size: 6rem;
    color: var(--grey-900);
  }

  code {
    font-size: 1.2rem;
    max-width: 50rem;
  }

  /* animations from animista.net */
  .text-flicker-out-glow {
    -webkit-animation: text-flicker-out-glow 5s linear infinite both;
    animation: text-flicker-out-glow 5s linear infinite both;
  }

  /**
 * ----------------------------------------
 * animation text-flicker-out-glow
 * ----------------------------------------
 */
  @-webkit-keyframes text-flicker-out-glow {
    0% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    13.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    14% {
      opacity: 0;
      text-shadow: none;
    }
    14.9% {
      opacity: 0;
      text-shadow: none;
    }
    15% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    22.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    23% {
      opacity: 0;
      text-shadow: none;
    }
    24.9% {
      opacity: 0;
      text-shadow: none;
    }
    25% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    34.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    35% {
      opacity: 0;
      text-shadow: none;
    }
    39.9% {
      opacity: 0;
      text-shadow: none;
    }
    40% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    42.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    43% {
      opacity: 0;
      text-shadow: none;
    }
    44.9% {
      opacity: 0;
      text-shadow: none;
    }
    45% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    54.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55% {
      opacity: 0;
      text-shadow: none;
    }
    69.4% {
      opacity: 0;
      text-shadow: none;
    }
    69.5% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    69.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    70% {
      opacity: 0;
      text-shadow: none;
    }
    79.4% {
      opacity: 0;
      text-shadow: none;
    }
    79.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }
    80% {
      opacity: 0;
      text-shadow: none;
    }
    89.8% {
      opacity: 0;
      text-shadow: none;
    }
    89.9% {
      opacity: 1;
      text-shadow: none;
    }
    90% {
      opacity: 0;
      text-shadow: none;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes text-flicker-out-glow {
    0% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    13.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    14% {
      opacity: 0;
      text-shadow: none;
    }
    14.9% {
      opacity: 0;
      text-shadow: none;
    }
    15% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    22.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    23% {
      opacity: 0;
      text-shadow: none;
    }
    24.9% {
      opacity: 0;
      text-shadow: none;
    }
    25% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    34.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    35% {
      opacity: 0;
      text-shadow: none;
    }
    39.9% {
      opacity: 0;
      text-shadow: none;
    }
    40% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    42.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    43% {
      opacity: 0;
      text-shadow: none;
    }
    44.9% {
      opacity: 0;
      text-shadow: none;
    }
    45% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    54.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55% {
      opacity: 0;
      text-shadow: none;
    }
    69.4% {
      opacity: 0;
      text-shadow: none;
    }
    69.5% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    69.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    70% {
      opacity: 0;
      text-shadow: none;
    }
    79.4% {
      opacity: 0;
      text-shadow: none;
    }
    79.9% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }
    80% {
      opacity: 0;
      text-shadow: none;
    }
    89.8% {
      opacity: 0;
      text-shadow: none;
    }
    89.9% {
      opacity: 1;
      text-shadow: none;
    }
    90% {
      opacity: 0;
      text-shadow: none;
    }
    100% {
      opacity: 0;
    }
  }
`

const Error = () => {
  return (
    <Layout>
      <Wrapper>
        <h1 className="text-flicker-out-glow">404</h1>

        <code>
          It seems you've tried visiting a page that doesn't exist. <br />
          ...we recommend you skim through our <Link to="/blogs">blogs</Link> 😉
        </code>
      </Wrapper>
    </Layout>
  )
}

export default Error
