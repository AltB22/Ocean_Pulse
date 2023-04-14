import React, { useState } from "react";
import { Card, Row, Col, Dropdown } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../utils/queries";



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

// import CommentForm from '../components/commentForm';
// import {ADD_COMMENT} from "../../utils/mutations";
// import {REMOVE_COMMENT} from "../../utils/mutations"
// import Auth from "../../utils/auth";


const Locations = () => {
    const { loading, data } = useQuery(GET_LOCATIONS);
    
    const locationData = data?.locations || [];
    const [selectedSpot, setSelectedSpot] = useState(null);

    const handleDropdownSelect = (eventKey) => {
      setSelectedSpot(locationData[eventKey]);

    };

    return (

        <div className="Location">
            {/* create a dropdown in jsx with the data from locationData.surf_spot */}
            <Dropdown onSelect={handleDropdownSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Search Locations
                </Dropdown.Toggle>

                <Dropdown.Menu>
                   {locationData.map((spot, i)=>(
                     <Dropdown.Item href="#/action-1" key={i} eventKey={i}>
                        {spot.surf_spot}
                     </Dropdown.Item>
                   ))}
                </Dropdown.Menu>
            </Dropdown>

            <h1 style={styles.heading} >{selectedSpot.surf_spot}</h1>
            {selectedSpot && (
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="AboutLocation">
              <Card.Body>
                <Card.Title>About {selectedSpot.surf_spot}</Card.Title>
                <Card.Text>{selectedSpot.optimal_swell_direction}</Card.Text>
                <Card.Text>{selectedSpot.optimal_swell_size}</Card.Text>
                <Card.Text>{selectedSpot.optimal_tide}</Card.Text>
                <Card.Text>{selectedSpot.optimal_wind}</Card.Text>
                <Card.Text>{selectedSpot.type}</Card.Text>

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
      )}
    </div>
  );
};

export default Locations;