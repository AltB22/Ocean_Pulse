import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Row, Container, Image } from 'react-bootstrap';
import Image1 from '../images/image1.jpeg';
import Image2 from '../images/image2.jpeg';
import Image3 from '../images/image3.jpeg';
import Image4 from '../images/image4.jpg';
import Image5 from '../images/image.card1.webp';
import Image6 from '../images/image.card2.jpeg';
import Image7 from '../images/image.card3.jpg';
import Image8 from '../images/image.card4.jpeg';
import Safety from '../images/Surf_safety.png';


const Home = () => {
  return (
    <>
      <div className="Main" >
        <h1>The Ocean Pulse</h1>
        <p > - The Ocean Pulse is a website about the ocean and surfing places to go with your family or friends, also have an awesome day enjoying the beauties of nature!!</p>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image1} height="500px" width="100%"
              alt="ocean"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image2} height="500px" width="100%"
              alt="ocean"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image3} height="500px" width="100%"
              alt="beach-pic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image4} height="500px" width="100%"
              alt="ocean"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br>
      </br>

      <aside className="Sidebar">

        <h1>Featured Locations</h1>

        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={Image7} height="275px" width="100%" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Image6} height="275px" width="100%" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Image8} height="275px" width="100%" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={Image5} height="275px" width="100%" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </aside>
      <br>
      </br>
      <section className="SafetyVideo">
        <div className="Text">
          <h1>Surfing Safety</h1>
          <p> - Surfing is a great way to get exercise and enjoy the outdoors. But it can also be dangerous. If you're a beginner, you should learn how to surf safely. If you're an experienced surfer, you should still be careful. Here are some tips to help you stay safe while surfing.</p>
        </div>
        <iframe title="This is a unique title" width="420" height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        <Container className="SafetyImage">
          <Row xs={1} md={2} className="g-4">
            <Card.Img variant="down" src={Safety} height="275px" width="100%" />
            <Card.Body className="Info">
              <Card.Title>Surf Tips</Card.Title>
                <span>
                 <ul>
                  <li>Always surf with a buddy.</li>
                  <li>Never surf alone.</li>
                  <li>Always wear a leash.</li>
                  <li>Always wear a life jacket.</li>
                  <li>Always wear a wetsuit.</li>
                  <li>Always wear a rash guard.</li>
                </ul>
                <p>- For more Instructions access the link below!!!</p>
                <a href="https://www.academyofsurfing.com/sports/surfing/learn-to-surf/surfing-safety">Surf Safety Tips</a> 
                </span>
            </Card.Body>
          </Row>
        </Container>
      </section>
      <footer className="footer">
      </footer>

    </>
  )
}

export default Home;