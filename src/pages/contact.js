import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const Wrapper = styled.section`
  min-height: calc(100vh - (6rem + 4rem));
`

const Contact = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>en theos</h1>
      </Wrapper>
    </Layout>
  )
}

export default Contact
