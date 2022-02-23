import React, { Component } from "react";
import { Link } from "react-router-dom"; // instead of using anchor tag we use react link for navigation
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbars.css";

export default class Navbars extends Component {
  render() {
    const path = window.location.pathname;
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="md"
          variant="dark"
          className="bg-dark fixed-top"
        >
          <Navbar.Brand href="#home" className="margin-padding">
            <span className="font-bold">Responsive4Pages</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav d-flex justify-content-center>
                <Nav.Link
                  as={Link}
                  to={"/#"}
                  className={`${path === "/" && "active font-bold"}`}
                >
                  FoodMunch
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/virtual"}
                  className={`${path === "/virtual" && "active font-bold"}`}
                >
                  Virtual Reality
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/ecommerce"}
                  className={`${path === "/ecommerce" && "active font-bold"}`}
                >
                  E-Commerce
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/portfolio"}
                  className={`${path === "/portfolio" && "active font-bold"}`}
                >
                  Portfolio
                </Nav.Link>
              </Nav>

              <Nav className="ml-auto">
                <img src="./r4p logo.png" alt="" className="r4p-logo" />
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
