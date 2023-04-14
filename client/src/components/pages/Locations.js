import React from "react";
import { Card, Row, Col } from 'react-bootstrap';


const styles = {

    heading: {
        minHeight: 50,
        lineheight: 3.5,
        fontSize: '2.5rem',
        padding: '10px',
        textAlign: 'center',
        margin: 30,
        backgroundColor: " #2f7bff"
    },
};



//code for adding specific locations???-bax

// Import the `useParams()` hook
// import {useParams} from "react-router-dom";
// import {useQuery} from "@apollo/client";

// import CommentForm from '../components/commentForm';
// import {ADD_COMMENT} from "../../utils/mutations";
// import {REMOVE_COMMENT} from "../../utils/mutations"
// import Auth from "../../utils/auth";


const Locations = () => {

    
    return (

        <div className="Location">
            <h1 style={styles.heading}>Surf-Location</h1>


            <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className="AboutLocation">
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    City:
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="CurrentLocation">
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

        </div>
    );
};

export default Locations;


