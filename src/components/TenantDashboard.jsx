


import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert, ListGroup, Table, Row, Col, Card } from 'react-bootstrap';
import { updateTenant, getTenantDetails, sendMessage, getMessages } from '../services/api';
import Payment from './Payment';
import Messaging from './Messaging';

function TenantDashboard({ tenant }) {
  const [name, setName] = useState(tenant.name);
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);
  const [payments, setPayments] = useState([]);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    async function fetchTenantDetails() {
      try {
        const response = await getTenantDetails(tenant.id);
        setMessages(response.data.messages);
        setPayments(response.data.payments);
      } catch (err) {
        setError('Error fetching tenant details');
      }
    }
    fetchTenantDetails();
  }, [tenant.id]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await getMessages(tenant.id);
        setMessages(response.data);
      } catch (err) {
        setError('Error fetching messages');
      }
    }
    fetchMessages();
  }, [tenant.id]);

  const handleUpdateDetails = async () => {
    try {
      await updateTenant({ id: tenant.id, name, password });
      setSuccess('Details updated successfully');
      setError('');
    } catch (err) {
      setError('Error updating details');
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage) return;
    try {
      await sendMessage({ sender: tenant.id, receiver: 'landlord', message: newMessage });
      setSuccess('Message sent successfully');
      setNewMessage('');
      // Refresh messages
      const response = await getMessages(tenant.id);
      setMessages(response.data);
    } catch (err) {
      setError('Error sending message');
    }
  };

  return (
    <div className="mb-5">
    <Container className="mt-5 mb-5">
      <h2 className="mb-4">Tenant Dashboard</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Row className="mb-4">
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <Card.Title>Update Details</Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdateDetails}>
                Update Details
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <Payment tenant={tenant} />

      <Row className="mb-4">
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <Card.Title>Message History</Card.Title>
            <ListGroup variant="flush">
              {messages.map((msg, index) => (
                <ListGroup.Item key={index} variant={msg.sender === tenant.id ? 'light' : 'info'}>
                  <strong>{msg.sender === tenant.id ? 'You' : 'Landlord'}</strong>: {msg.message}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Form className="mt-3">
              <Form.Group className="mb-3">
                <Form.Label>New Message</Form.Label>
                <Form.Control
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleSendMessage}>
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card className="p-4 shadow-sm mb-5">
            <Card.Title>Payment History</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index}>
                    <td>{new Date(payment.date).toLocaleDateString()}</td>
                    <td>${payment.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default TenantDashboard;
