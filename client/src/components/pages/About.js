import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
    return (
        <Container>
      <Row>
        <Col>
          <h1>About Ocean Pulse</h1>
          <p>This project was the creation of a full stack website that utilizes specific technologies to render a workable and polished website that responds to a real world problem with a intuitive solution. The Website functionality allows a user to view several API's data on surfing locations thought the Bay Area and California. The website utilized MongoDb and GraphQL on the back end to create a in-house database. The program utilizes Mutations and Queries as well as Resolvers and TypeDefs to organize and connect the data from back end to front end. The front end is created using REACT and is run through the Apollo server  A user API as well as a surf locations API were created to allow the the use of databases through router.get and router.put aspects.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>As a User, I want to be able to view the most righteous surf spots on the "Best" Coast So that I can find the ultimate wave. I also want to let the World know about my sweet secret surf spot so that others can share those sick waves by posting my own surfing locations and having them put on the website.</p>
        </Col>
      </Row>
    </Container>
    );
};

export default About;