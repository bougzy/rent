// src/components/Payment.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Payment({ tenant }) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/tenant/payment', {
        tenantID: tenant.id,
        amount
      });

      setMessage(`Payment successful! Rent ends on ${new Date(response.data.rentEnd).toLocaleDateString()}`);
    } catch (error) {
      setMessage('Payment failed. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Make Payment</h2>
      <Form onSubmit={handlePayment}>
        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Pay Now
        </Button>
      </Form>
      {message && <Alert variant="info" className="mt-3">{message}</Alert>}
    </Container>
  );
}

export default Payment;
