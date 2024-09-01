// src/components/Messages.js
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup, Alert } from 'react-bootstrap';
import axios from 'axios';

function Messages({ user }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [fetchError, setFetchError] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/messaging', {
        sender: user.id,
        receiver: user.role === 'tenant' ? 'landlord' : 'tenant',
        message
      });
      setMessage('');
      fetchMessages();
    } catch (error) {
      setFetchError('Failed to send message. Please try again.');
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/messages', {
        params: { user: user.id }
      });
      setMessages(response.data);
    } catch (error) {
      setFetchError('Failed to fetch messages.');
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [user]);

  return (
    <Container className="mt-5">
      <h2>Messages</h2>
      <Form onSubmit={handleSendMessage} className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
      {fetchError && <Alert variant="danger">{fetchError}</Alert>}
      <ListGroup>
        {messages.map((msg, index) => (
          <ListGroup.Item key={index}>
            <strong>{msg.sender}: </strong>{msg.message} <br />
            <small className="text-muted">{new Date(msg.date).toLocaleString()}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Messages;
