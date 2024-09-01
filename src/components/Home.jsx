// src/components/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to the Apartment Management System</h1>
      <p>Select your role to proceed:</p>
      <div className="mt-4">
        <Link to="/tenant/login">
          <Button variant="primary" className="me-3">
            Tenant Login
          </Button>
        </Link>
        <Link to="/landlord/login">
          <Button variant="secondary">
            Landlord Login
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
