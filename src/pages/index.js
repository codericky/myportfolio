import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import indexStyles from "../components/index.module.scss"
import { graphql } from "gatsby"
import { Jumbotron, Row, Col, Container} from "react-bootstrap";
import Background from "../components/background"
export default function Home ({data}) {
  return <div>
    <Layout>
      <br />
      <br />
      <Background />
     <br />
      <Jumbotron className={indexStyles.jumbotron}>
      Kampus IT dan Bisnis dengan Metode Belajar 90% Praktek 10% Teori 
<<<<<<< HEAD
      Full Praktek Langsung Kerja dan buka Bisnis.
=======
      Full Praktek Langsung Kerja dan buka Bisnis
>>>>>>> 79b6b0242b7ef2da645c282a79ec98a4c4ebfad6
      </Jumbotron>
      <Container>
      <h3 className="text-center">Activity</h3>
      <br />
      <Row>
        <Col>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col>
        <Img fluid={data.pertamaGatsbyImage.childImageSharp.fluid} className="rounded" />
        </Col>
      </Row>
      < br />
      < br />
      <Row>
        <Col>
        <Img fluid={data.keduaGatsbyImage.childImageSharp.fluid} className="rounded" />
        </Col>
        <Col>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
      <br />
      <br />
      <h3 className="text-center">Team Work</h3>
      <Row>
        <Col>
        <Img fluid={data.codingGatsbyImage.childImageSharp.fluid} className="rounded" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col>
        <Img fluid={data.codingGatsbyImage.childImageSharp.fluid} className="rounded" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col>
        <Img fluid={data.codingGatsbyImage.childImageSharp.fluid} className="rounded" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
      </Container>
  </Layout>
  </div>
 
}
export const query = graphql`
query {
  collegeGatsbyImage:file(relativePath: {eq: "college.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 79b6b0242b7ef2da645c282a79ec98a4c4ebfad6
    codingGatsbyImage:file(relativePath: {eq: "coding.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  pertamaGatsbyImage:file(relativePath: {eq: "pertama.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  keduaGatsbyImage:file(relativePath: {eq: "kedua.jpg"}) {
<<<<<<< HEAD
=======
=======
    buahGatsbyImage:file(relativePath: {eq: "buah.jpg"}) {
>>>>>>> f524bca2dbdc6c054181a5870701b882837db762
>>>>>>> 79b6b0242b7ef2da645c282a79ec98a4c4ebfad6
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`