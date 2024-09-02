import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="py-3">
      <Container>
        <Row className="w-100">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <Navbar.Brand href="/">Apartment Management System</Navbar.Brand>
            <Nav className="mt-2">
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
              <Nav.Link href="/terms">Terms of Service</Nav.Link>
            </Nav>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <small>&copy; {new Date().getFullYear()} MyApp. All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
