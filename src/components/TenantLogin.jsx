

import React, { useState } from 'react';
import { Form, Button, Container, Alert, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { tenantLogin } from '../services/api.jsx'; // Updated import to include .jsx extension

function TenantLogin({ setTenant }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await tenantLogin({ id, password });
      setTenant(response.data.tenant);
      setError('');
      alert('Login successful');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mb-5 min-vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">Tenant Login</Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicId">
                  <Form.Label>Tenant ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Login
                </Button>
              </Form>

              {/* Add the "Register" link below the form */}
              <div className="text-center mt-3">
                <p>
                  Don't have an account? <Link to="/tenant/register">Register here</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TenantLogin;
