import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: red;
    &:hover {
      color: cyan;
    }
  }
`;

function Navigation() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contacts">Contacts</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="primary" className="mr-2" onClick={handleShow}>
                  Log In
                </Button>
                <Button variant="primary" onClick={handleShow}>
                  Sign Out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">Descpriptioned </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
              <Form.Text className="text-muted">Descpriptioned </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Control type="checkbox" placeholder="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;