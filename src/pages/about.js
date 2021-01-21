import React from "react"
import Layout from "../components/layout"
import {Col, Row, Container} from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
export default function about({data}) {
  return <div>
    <Layout>
      <br />
      <br />
      <br />
      <h1 className="text-center">Halaman about</h1>
        <br />
        <Container>
        <Row>
        <Col>
        <p>hey</p>
        </Col>
        <Col>
        <Img fluid={data.buahGatsbyImage.childImageSharp.fluid} className=" roundedCircle" />
        </Col>
      </Row>
      </Container>
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