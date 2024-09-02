import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent({ user, isAdmin, handleLogout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg"> {/* Updated bg and variant to dark */}
      <Container>
        <Navbar.Brand as={Link} to="/">
          Apartment Management System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                {isAdmin ? (
                  <>
                    <Nav.Link as={Link} to="/landlord/dashboard">
                      Dashboard
                    </Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/tenant/dashboard">
                      Dashboard
                    </Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                  </>
                )}
              </>
            ) : (
              <>
                {/* Show these links only when user is not logged in */}
                <Nav.Link as={Link} to="/tenant/login">
                  Tenant Login
                </Nav.Link>
                <Nav.Link as={Link} to="/tenant/registration">
                  Tenant Registration
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
