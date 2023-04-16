import React, { useState, useEffect } from "react";
import { Card, Row, Col, Dropdown } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../utils/queries";


const styles = {

  heading: {
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '2.5rem',
    padding: '10px',
    textAlign: 'center',
    margin: 30,
    backgroundColor: " #2f7bff"
  },
};

const Locations = () => {
  const { loading, data } = useQuery(GET_LOCATIONS);

  const locationData = data?.locations || [];
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [currentConditions, setCurrentConditions] = useState([]);
  // const [defaultConst, defaultCase] = useState(null)

  useEffect(() => {
    const GetCurrentConditions = async (selectedSpot) => {
      switch (selectedSpot?.surf_spot) {
        case 'Ocean Beach':
          let lat = 1
          let lng = 1
          const surfReport = await GetSurfReport(selectedSpot.surf_spot, lat , lng );
        
          setCurrentConditions(surfReport);
          break;
        default:
          setCurrentConditions("No conditions available");
      }
    };

    GetCurrentConditions();
  }, [selectedSpot]);

  const handleDropdownSelect = async (eventKey, spot) => {
    const selectedSpot = locationData[eventKey];
    setSelectedSpot(selectedSpot);
    const surfReport = await GetSurfReport(selectedSpot.surf_spot, selectedSpot.lat, selectedSpot.lng);
    setCurrentConditions(surfReport);
   console.log(currentConditions)
  }

async function GetSurfReport(selectedSpot,lat, lng) {//function that accepts the 3 parameters from above and fetches data based on their values (lat & lng are the functionals here) plus other defined vars params & source
  if (selectedSpot === "Ocean Beach") {
     lat = 37.75545
     lng = -122.5292
  }
  if (!lat || !lng) {
    console.error("Lat and lng must be defined to fetch surf report.");
    return;
  }
    let params = "swellHeight,swellPeriod,swellDirection,windSpeed,windDirection";
    let source = "noaa"
    const response = await fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&source=${source}`,
  
      {
        headers: {
          Authorization:
            "5c5365e4-a940-11ed-a138-0242ac130002-5c53665c-a940-11ed-a138-0242ac130002",//API key
        },
      }
    );
  
    const surfReport = await response.json();//defining api response as json object
    const surfReportArr = [surfReport.hours] || []
    console.log([surfReportArr])
    //  const surfReportArr = [surfReport]
  
    return surfReportArr;

  }
 

  

  // console.log(surfReportArr)
  // // currentSurfSpot = surfSpot; // Assign the value of surfSpot to currentSurfSpot
  // // setCurrentConditions(surfReport);//passes data to renderSurfForecast
  // return surfReportArr;





  

  return (
    <div className="Location">
      <Dropdown onSelect={handleDropdownSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Search Locations
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {locationData.map((spot, i) => (
            <Dropdown.Item href="#/action-1" key={i} eventKey={i}>
              {spot?.surf_spot}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <h1 style={styles.heading}>{selectedSpot?.surf_spot}</h1>

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
                <Card.Title>Current Swell & Wind Conditions for {[selectedSpot.surf_spot]}</Card.Title>
                <Card.Text>
  {currentConditions !==null ? (
    <>
      <span>Swell Height: {currentConditions[0].swellHeight}</span>
      <br />
      <span>Swell Period: {currentConditions[0].swellPeriod}</span>
      <br />
      <span>Swell Direction: {currentConditions[0].swellDirection}</span>
      <br />
      <span>Wind Speed: {currentConditions[0].windSpeed}</span>
      <br />
      <span>Wind Direction: {currentConditions[0].windDirection}</span>
    </>
  ) : (
    "No current conditions available."
  )}
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