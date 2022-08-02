import React, { useState } from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import { Col, Container, Row } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { GET_TOKEN } from "../apollo/queries";
import { AUTH_TOKEN } from "../constants";


const Login = () => {
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    name: ""
  });
  const [errorName, setErrorName] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const setUser = user =>
    window.localStorage.setItem("siteUser", JSON.stringify(user))

  const [login, { data, loading, error }] = useMutation(GET_TOKEN, {
    variables: {
      username: formState.email,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      console.log(login);
      setUser({
        username: login.user.username,
        name: login.user.name,
        email: login.user.email,
      })
      localStorage.setItem(AUTH_TOKEN, login.authToken);
      navigate("/");
    },
    onError(err) {
      console.log(err);
    }

  });


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Авторизация
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
              <h1 className={error ? "error" : ""}>
                {formState.login ? "Login" : "Sign Up"} {loading ? <span className={"spinner"}></span> : ""}
              </h1>
              <div className="flex flex-column">
                {!formState.login && (
                  <input
                    value={formState.name}
                    className={errorName ? "error" : ""}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        name: e.target.value
                      })
                    }
                    type="text"
                    placeholder="Your name"
                  />
                )}
                <input
                  value={formState.email}

                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value
                    })
                  }
                  type="text"
                  placeholder="Your email address"
                />
                <input
                  value={formState.password}
                  className={errorPass ? "error" : ""}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      password: e.target.value
                    })
                  }
                  type="password"
                  placeholder="Choose a safe password"
                />
              </div>
              <div className="flex mt3">
                <button
                  className="pointer mr2 button"
                  onClick={formState.login ? login : null}
                >
                  {formState.login ? "login" : "create account"}
                </button>
                <button
                  className="pointer button"
                  onClick={(e) =>
                    setFormState({
                      ...formState,
                      login: !formState.login
                    })
                  }
                >
                  {formState.login
                    ? "need to create an account?"
                    : "already have an account?"}
                </button>
              </div>
              <div>
                {error ? error.graphQLErrors.map(({ message }, i) => {
                  switch (message) {
                    case "empty_username":
                      return (<span key={i}>Имя пользователя не заполнено</span>);
                    case "empty_password" :
                      return (<span key={i}>Пароль не указан</span>);
                    case "invalid_username" :
                      return (<span key={i}>Пользователь не найден</span>);
                    case "incorrect_password" :
                      return (<span key={i}>Пароль не верный</span>);
                  }
                }) : ""}
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>


    </div>
  );
};

export default Login;