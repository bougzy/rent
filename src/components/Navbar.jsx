import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function NavbarComponent({ user, isAdmin, handleLogout }) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Updated handleLogout function to navigate to home page after logging out
  const onLogout = () => {
    handleLogout();
    navigate('/'); // Redirect to home page
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
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
                    <Nav.Link onClick={onLogout}>Logout</Nav.Link> {/* Updated logout link */}
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/tenant/dashboard">
                      Dashboard
                    </Nav.Link>
                    <Nav.Link onClick={onLogout}>Logout</Nav.Link> {/* Updated logout link */}
                  </>
                )}
              </>
            ) : (
              <>
                {/* Show these links only when the user is not logged in */}
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
