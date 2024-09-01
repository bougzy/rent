// src/components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon from react-icons
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'; // Import necessary React-Bootstrap components

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number
  const message = 'Hello! How can I assist you?'; // Default message

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <OverlayTrigger
      placement="left"
      overlay={<Tooltip id="tooltip-left">Chat with us on WhatsApp</Tooltip>}
    >
      <Button
        variant="success"
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '10px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaWhatsapp size={30} color="white" />
      </Button>
    </OverlayTrigger>
  );
};

export default WhatsAppButton;
