import React from "react"
import footerStyles from "../components/footer.module.scss"
import {Col, Row} from "react-bootstrap"
import {graphql, useStaticQuery} from "gatsby"
export default function Footer() {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
  `)
  return <div>
<footer className={footerStyles.footer}>
  <h2 className="text-center"><Row>
    <Col>
    <p className={footerStyles.logo}>{data.site.siteMetadata.title}
</p>
    </Col>
    <Col>
    <p className={footerStyles.text}>text bawah</p>
    <p className={footerStyles.text}>text bawah</p>
    </Col>
    <Col><p className={footerStyles.social}>Follow Us On Social Media</p>
    <p>satu</p>
    <p>dua</p>
    <p>tigas</p>
    </Col>
    </Row>
    </h2>
    <br />
    <h5 className={footerStyles.copyright}>{data.site.siteMetadata.author}
</h5>
<h4 className={footerStyles.years}>Copyright@2021</h4>
  </footer>   

  </div>
}


