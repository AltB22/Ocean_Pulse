import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Row } from 'react-bootstrap';
import Image1 from '../images/image1.jpeg';
import Image2 from '../images/image2.jpeg';
import Image3 from '../images/image3.jpeg';
import Image4 from '../images/image4.jpg';
import Image5 from '../images/image.card1.webp';
import Image6 from '../images/image.card2.jpeg';
import Image7 from '../images/image.card3.jpg';
import Image8 from '../images/image.card4.jpeg';


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
              src={Image1} max-width="100%" height="345%"
              alt="ocean"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
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
            <Card.Img variant="top" src="holder.js/100px160" />
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
            <Card.Img variant="top" src="holder.js/100px160" />
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
            <Card.Img variant="top" src="holder.js/100px160" />
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
            <Card.Img variant="top" src="holder.js/100px160" />
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
   <section>
   
   </section>
      </>
  )
  }

export default Home;