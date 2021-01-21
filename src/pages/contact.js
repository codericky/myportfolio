import React from "react"
import Layout from "../components/layout"
import {Col, Row, Container} from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
export default function contact({data}) {
  return <div>
    <Layout>
      <br />
      <br />
      <br />
      <h1 className="text-center">Halaman Contact</h1>
        <br />
        <Container>
        <Row>
        <Col>
        <Img fluid={data.buahGatsbyImage.childImageSharp.fluid} className=" rounded" />
        </Col>
        <Col>
        <p>jika anda berminat anda bisa hubungi saya di beberapa cara</p>
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