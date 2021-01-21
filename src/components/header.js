import React from "react"
import {Link} from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from "react-bootstrap"
import {graphql, useStaticQuery} from "gatsby"
export default function Header() {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  return <div>
      <Navbar fixed="top" bg="info" expand="lg" variant="dark" >
    <Container>
      <Navbar.Brand classNa href="/">{data.site.siteMetadata.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive" >

      <Container>
        <Nav as="ul" className="ml-auto" >
        <Nav.Item as="li" className="ml-auto" >
          <Link to="/" className="nav-link" activeClassName="active">Home</Link>
          </Nav.Item>
          <Nav.Item as="li" className="ml-auto">
          <Link to="/about" className="nav-link" activeClassName="active">About</Link>
          </Nav.Item>
          <Nav.Item as="li" className="ml-auto">
          <Link to="/work" className="nav-link" activeClassName="active">Work</Link>
          </Nav.Item>
          <Nav.Item as="li" className="ml-auto">
          <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
          </Nav.Item>
         
        </Nav>
        </Container>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
}
