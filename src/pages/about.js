import React from "react"
import Layout from "../components/layout"
import {Col, Row, Container} from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import aboutStlyes from "../components/about.module.scss"
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
        <p className={aboutStlyes.p}>I am someone who likes to share and also likes updates about the latest technology and likes the world of networking, programming and business</p>
        </Col>
        <Col>
        <Img fluid={data.aboutGatsbyImage.childImageSharp.fluid} className={aboutStlyes.gambar} />
        </Col>
      </Row>
      </Container>
            </Layout>
      </div>
}

export const query = graphql`
query {
<<<<<<< HEAD
  aboutGatsbyImage:file(relativePath: {eq: "about.jpg"}) {
=======
  buahGatsbyImage:file(relativePath: {eq: "buah.jpg"}) {
>>>>>>> f524bca2dbdc6c054181a5870701b882837db762
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`