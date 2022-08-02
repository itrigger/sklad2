import * as React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "../apollo/queries";
import { Link, navigate } from "gatsby";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AUTH_TOKEN } from "../constants";
import { getUser } from "../services/auth";


export default function Header() {
  const [telCall, setTelCall] = useState("");
  const [telWt, setTelWt] = useState("");
  const { data: data2 } = useQuery(GET_CONTENT);

  const authToken = localStorage.getItem(AUTH_TOKEN);

  useEffect(() => {
    if (data2) {
      setTelCall(data2.posts.nodes[0].front_page.telcall);
      setTelWt(data2.posts.nodes[0].front_page.telwt);
    }
  }, [data2]);


  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav><Link to={"/"}>Home</Link></Nav>

            {/* <PrivateRoute path="/app/profile" component={Profile} />*/}

            {authToken ? (
              <>
                <Nav>
                  Привет, <Link
                  to="/profile"
                  className="ml1 no-underline black"
                >
                  {
                    getUser().username
                  }
                </Link>
                  <Button variant="dark" size="sm"
                          className="ml1 pointer black"
                          onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN);
                            localStorage.removeItem("siteUser");
                            navigate(`/`);
                          }}
                  >
                    Выйти
                  </Button>
                </Nav>
              </>
            ) : (
              <Nav> <Link
                to="/login"
                className="ml1 no-underline black"
              >
                login
              </Link></Nav>
            )}
          </Nav>


        </Container>
      </Navbar>
    </header>
  );
}
