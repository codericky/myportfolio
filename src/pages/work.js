import React from "react"
import Layout from "../components/layout"
import {Container} from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
export default function work({data}) {
  return <div>
    <Layout>
      <br />
      <br />
      <br />
      <h1 className="text-center">Halaman Work</h1>
        <br />
        <Container>
        <Img fluid={data.buahGatsbyImage.childImageSharp.fluid} className=" rounded"/>
      </Container>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Layout>
      </div>
}

export const query = graphql`
query {
  buahGatsbyImage:file(relativePath: {eq: "buah.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`