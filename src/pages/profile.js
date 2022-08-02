import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Col, Container, Row } from "react-bootstrap";
import { getUser } from "../services/auth";
import { AUTH_TOKEN } from "../constants";
import { navigate } from "gatsby";


const Profile = () => {

  const authToken = localStorage.getItem(AUTH_TOKEN);

  if(!authToken) {
    navigate("/");
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Профиль
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
          href="/gatsby-starter-wordpress-homepage/public/favicon-32x32.png"
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
      <Layout>
        <Container>
          <Row>
            <Col>
              <h1>Your profile</h1>
              <ul>
                <li>Name: {getUser().name}</li>
                <li>E-mail: {getUser().email}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Profile;