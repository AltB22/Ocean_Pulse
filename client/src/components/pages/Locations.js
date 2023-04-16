import React, { useState, useEffect } from "react";
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

const getCurrentConditions = (selectedSpot) => {
  switch (selectedSpot.surf_spot) {
    case 'Ocean Beach':
      getSurfReport(selectedSpot.surf_spot, 37.75545, -122.5292);
     break;
    default:
      return 'No current conditions available.';
  }
};

async function getSurfReport(selectedSpot,lat,lng) {//function that accepts the 3 parameters from above and fetches data based on their values (lat & lng are the functionals here) plus other defined vars params & source
 
  let params = "swellHeight,swellPeriod,swellDirection,windSpeed,windDirection";
  const response = await fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&source=noaa`,

      {
          headers: {
              Authorization:
                  "5c5365e4-a940-11ed-a138-0242ac130002-5c53665c-a940-11ed-a138-0242ac130002",//API key
          },
      }
  );

  const surfReport = await response.json();//defining api response as json object
  console.log(surfReport)
  // currentSurfSpot = surfSpot; // Assign the value of surfSpot to currentSurfSpot
  // renderSurfForecast(surfReport);//passes data to renderSurfForecast
  return surfReport;
}
const Locations = () => {
    const { loading, data } = useQuery(GET_LOCATIONS);

    const locationData = data?.locations || [];
    const [selectedSpot, setSelectedSpot] = useState(null);
    // const [currentConditions, setCurrentConditions] = useState(null);

    const handleDropdownSelect = (eventKey) => {

     setSelectedSpot(locationData[eventKey]);
      // console.log(selectedSpot.city);
      // setCurrentConditions([locationData.city]);
    
    
  }

    return (

        <div className="Location">
            {/* create a dropdown in jsx with the data from locationData.surf_spot */}
            <Dropdown onSelect={handleDropdownSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Search Locations
                </Dropdown.Toggle>
                {/* {data && data.location && data.location.surf_spot && <h2>{data.location.surf_spot}</h2>} */}

                <Dropdown.Menu>
                   {locationData.map((spot, i)=>(
                     <Dropdown.Item href="#/action-1" key={i} eventKey={i}>
                        {spot?.surf_spot}
                     </Dropdown.Item>
                   ))}
                </Dropdown.Menu>
            </Dropdown>
            
            <h1 style={styles.heading} >{selectedSpot?.surf_spot}</h1>
            {selectedSpot && (
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="AboutLocation">
              <Card.Body>
                <Card.Title>About {selectedSpot.surf_spot}</Card.Title>
                <Card.Text>Type of Break: {selectedSpot.type}</Card.Text>
                <Card.Text>Best Swell Size: {selectedSpot.optimal_swell_size}</Card.Text>
                <Card.Text>Best Swell Direction(s): {selectedSpot.optimal_swell_direction}</Card.Text>
                <Card.Text>Best Wind Direction: {selectedSpot.optimal_wind}</Card.Text>
                <Card.Text>Best Tide: {selectedSpot.optimal_tide}</Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="CurrentConditions">
              <Card.Body>
                <Card.Title>Current Swell & Wind Conditions</Card.Title>
                <Card.Text>{getCurrentConditions(selectedSpot)}</Card.Text>
                {/* <Card.Text> {selectedSpot.surf_spot}</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
            }

export default Locations;