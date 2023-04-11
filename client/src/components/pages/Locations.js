import React from "react";
import { Card, Row, Col} from 'react-bootstrap';


const styles = {
    card: {
        margin: 40,
        backgroundColor: "lightblue",
    },
    heading: {
        minHeight: 50,
        lineheight: 3.5,
        fontSize: '2.5rem',
        padding: '15px',
        textAlign: 'center',
    },
    card: {
        justifyContent: 'space-between',

    }
};


const Locations = () => {
    return (

        <div className="Location">
            <h1 style={styles.heading}>Surf-Location</h1>
            

            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
                        <Card>
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
                ))}
            </Row>

        </div>
    );
};

export default Locations;