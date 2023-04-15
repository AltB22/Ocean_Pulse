import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
    return (
        <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>- Add something about the page...</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>Add the reason for create this website...</p>
        </Col>
        <Col md={6}>
          <h2>Our Vision</h2>
          <p> Explain what we are expecting with this site...</p>
        </Col>
      </Row>
    </Container>
    );
};

export default About;