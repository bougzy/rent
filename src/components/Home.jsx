import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 // Import the custom CSS file

function Home() {
  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <div className="hero-section text-center text-white mb-5 py-5">
        <h1 className="display-4">Welcome to RentMe</h1>
        <p className="lead">Your Trusted Apartment Management System</p>
        <p>Find your perfect apartment or manage your property efficiently.</p>
        <Link to="/tenant/login">
          <Button variant="light" className="mt-3 hero-button">Get Started</Button>
        </Link>
      </div>

      {/* Card Section for Apartments */}
      <div className="card-section mb-5">
        <h2 className="text-center mb-4">Available Apartments</h2>
        <Row>
          {/* Card 1 */}
          <Col md={4} className="mb-4">
            <Card className="apartment-card shadow-sm">
              <Card.Img variant="top" src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Apartment 1" />
              <Card.Body>
                <Card.Title>Modern Apartment in City Center</Card.Title>
                <Card.Text>
                  A beautiful 2-bedroom apartment located in the heart of the city with stunning views.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Card 2 */}
          <Col md={4} className="mb-4">
            <Card className="apartment-card shadow-sm">
              <Card.Img variant="top" src="https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Apartment 2" />
              <Card.Body>
                <Card.Title>Cozy Suburban Home</Card.Title>
                <Card.Text>
                  A comfortable and spacious 3-bedroom home located in a quiet suburban neighborhood.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} className="mb-4">
            <Card className="apartment-card shadow-sm">
              <Card.Img variant="top" src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Apartment 3" />
              <Card.Body>
                <Card.Title>Luxury Penthouse Suite</Card.Title>
                <Card.Text>
                  Experience the height of luxury in this stunning penthouse suite with panoramic views.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Project Section */}
      <div className="project-section text-center py-4 bg-light" style={{marginBottom:"150px"}}>
        <h2>About Our Project</h2>
        <p>
          RentMe is dedicated to providing a seamless experience for tenants and landlords alike. 
          Our platform offers a comprehensive set of tools to manage your rental properties, communicate with tenants, and ensure smooth operations.
        </p>
        <Link to="#" className="mb-5">
          <Button variant="secondary" className="mt-3">Learn More</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
