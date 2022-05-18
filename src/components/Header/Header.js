import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
import logo from "../../images/Logo/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <>
    <Navbar className="header" collapseOnSelect expand="lg" sticky="top">
        <Container className="header-nav">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height={30} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="" as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="inventoryItems">
                Inventory Items
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="addItems">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="manageInventory">
                    Manage Inventory
                  </Nav.Link>
                  <Nav.Link as={Link} to="myItems">
                    My Items
                  </Nav.Link>
                </>
              )}

              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>

              
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">
                About Us
              </Nav.Link>
              {user ? (
                <button
                  className="signOut-button btn btn-link text-white fw-bold text-decoration-none ms-3 me-3 mb-1"
                  onClick={handleSignout}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
              {user ? (
                ""
              ) : (
                <Nav.Link as={Link} to="signup">
                  Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Header;
