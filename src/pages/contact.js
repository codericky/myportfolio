import React from "react"
import Layout from "../components/layout"
import contactStyles from "../components/contact.module.scss"
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
        <Img fluid={data.contactGatsbyImage.childImageSharp.fluid} className={contactStyles.gambar} />
        </Col>
        <Col>
<<<<<<< HEAD
        <p className={contactStyles.p}>if you need to build a modern and superior seo website, you can contact me at that contact .</p>
=======
        <p className={contactStyles.p}>if you need to build a modern and superior seo website, you can contact me at that contact</p>
>>>>>>> 79b6b0242b7ef2da645c282a79ec98a4c4ebfad6
        </Col>
      </Row>
      </Container>
            </Layout>
      </div>
}

export const query = graphql`
query {
  contactGatsbyImage:file(relativePath: {eq: "contact.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`