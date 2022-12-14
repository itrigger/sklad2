import * as React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "react-bootstrap";

export default function Homepage() {


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Заявка на склад Суши Хиро
        </title>
        <link rel="canonical" href="https://sklad2.sushihiro.kz" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#F5DF4D" />
        <meta name="msapplication-TileColor" content="#F5DF4D" />
        <meta name="theme-color" content="#F5DF4D" />
      </Helmet>
      <Layout >
        <Container>
          <Row>
            <Col>
              <h1>Index page</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
