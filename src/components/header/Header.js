import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Inventory House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            {user ? (
              <div>
                {user.photoURL ? (
                  <img src={user.photoURL} className="user_img" alt="" />
                ) : (
                  ""
                )}

                <Button variant="secondary" onClick={() => signOut(auth)}>
                  Logout
                </Button>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
