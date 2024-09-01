import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { tenantRegister } from '../services/api';

function TenantRegistration() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [apartmentID, setApartmentID] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isCopied, setIsCopied] = useState(false); // State to track if ID is copied
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await tenantRegister({ name, password });
      setApartmentID(response.data.apartmentID);
      setSuccess('Tenant registered successfully!');
      setError('');
    } catch (err) {
      setError('Error registering tenant');
      setSuccess('');
    }
  };

  const handleCopy = () => {
    if (apartmentID) {
      navigator.clipboard.writeText(apartmentID); // Copy the apartment ID to the clipboard
      setIsCopied(true); // Set copied state to true
      navigate('/tenant/login'); // Navigate to login page after copying
    }
  };

  return (
    <Container className="mt-5 mb-5 d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={8} lg={6} className="mx-auto">
          <Card className="p-4 shadow-sm">
            <Card.Header as="h3" className="text-center mb-4">
              Tenant Registration
            </Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && (
                <Alert variant="success" className="d-flex justify-content-between align-items-center">
                  <div>
                    {success} Your Apartment ID is <strong>{apartmentID}</strong>
                  </div>
                  <Button
                    variant="outline-success"
                    onClick={handleCopy}
                    disabled={!apartmentID || isCopied} // Disable button if no ID or already copied
                    className="ml-2"
                  >
                    {isCopied ? 'Copied!' : 'Copy ID'}
                  </Button>
                </Alert>
              )}
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TenantRegistration;
