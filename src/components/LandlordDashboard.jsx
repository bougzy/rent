import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, ListGroup, Alert, Card, Row, Col } from 'react-bootstrap';
import { getApartments, updateRent, getMessages, getTenantDetails, sendMessage, updateTenantRentStatus } from '../services/api';

function LandlordDashboard() {
  const [apartments, setApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch all apartments on component mount
    const fetchApartments = async () => {
      try {
        const response = await getApartments();
        setApartments(response.data);
      } catch (err) {
        console.error('Error fetching apartments:', err);
      }
    };
    fetchApartments();
  }, []);

  const handleTenantRentStatusToggle = async (tenantID) => {
    try {
      const response = await updateTenantRentStatus({ tenantID });
      setSuccess('Tenant rent status updated successfully');
      setError('');

      // Update rent status in state
      setApartments((prevApartments) =>
        prevApartments.map((apt) => ({
          ...apt,
          tenants: apt.tenants.map((tenant) =>
            tenant.id === tenantID ? { ...tenant, rentPaid: response.data.tenant.rentPaid } : tenant
          ),
        }))
      );
    } catch (err) {
      setError('Error updating tenant status');
    }
  };

  const handleSelectApartment = async (apartmentID) => {
    try {
      const apartment = apartments.find((apt) => apt.apartmentID === apartmentID);
      if (apartment) {
        setSelectedApartment(apartment);
        const details = await getTenantDetails({ tenantID: apartment.tenants[0].id }); // Example for the first tenant
        setMessages(details.data.messages);
      }
    } catch (err) {
      console.error('Error fetching apartment details:', err);
    }
  };

  const handleSendMessage = async () => {
    try {
      await sendMessage({ sender: 'landlord', receiver: selectedApartment.tenants[0].id, message: newMessage });
      setSuccess('Message sent successfully');
      setError('');
      setNewMessage('');
      // Refresh messages
      const details = await getTenantDetails({ tenantID: selectedApartment.tenants[0].id });
      setMessages(details.data.messages);
    } catch (err) {
      setError('Error sending message');
    }
  };

  return (
    <Container>
      <h1 className="my-4">Landlord Dashboard</h1>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Card className="mb-4">
        <Card.Header as="h5">Apartment Overview</Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Apartment ID</th>
                <th>Tenant Name</th>
                <th>Rent Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {apartments && apartments.length > 0 ? (
                apartments.map((apt) => (
                  <React.Fragment key={apt.apartmentID}>
                    {apt.tenants && apt.tenants.length > 0 && apt.tenants.map((tenant) => (
                      <tr key={tenant.id}>
                        <td>{apt.apartmentID}</td>
                        <td>{tenant.name}</td>
                        <td>{tenant.rentPaid ? 'Paid' : 'Not Paid'}</td>
                        <td>
                          <Button
                            variant="info"
                            className="me-2"
                            onClick={() => handleSelectApartment(apt.apartmentID)}
                          >
                            View Details
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => handleTenantRentStatusToggle(tenant.id)}
                          >
                            {tenant.rentPaid ? 'Mark as Unpaid' : 'Mark as Paid'}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No apartments available</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {selectedApartment && (
        <Card>
          <Card.Header as="h5">Messages for Tenant</Card.Header>
          <Card.Body>
            <ListGroup className="mb-3">
              {messages && messages.length > 0 ? (
                messages.map((msg, index) => (
                  <ListGroup.Item key={index}>
                    <strong>{msg.sender}:</strong> {msg.message}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>No messages available</ListGroup.Item>
              )}
            </ListGroup>

            <Form>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Send a message</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" className="mt-2" onClick={handleSendMessage}>
                Send
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default LandlordDashboard;
