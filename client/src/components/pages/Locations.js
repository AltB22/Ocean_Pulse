import React, { useState, useEffect } from "react";
import { Card, Row, Col, Dropdown } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../utils/queries";

function getCardinalDirection(degrees) {
  const degreeRanges = [
    { direction: "N", range: [0, 11.25] },
    { direction: "NNE", range: [11.25, 33.75] },
    { direction: "NE", range: [33.75, 56.25] },
    { direction: "ENE", range: [56.25, 78.75] },
    { direction: "E", range: [78.75, 101.25] },
    { direction: "ESE", range: [101.25, 123.75] },
    { direction: "SE", range: [123.75, 146.25] },
    { direction: "SSE", range: [146.25, 168.75] },
    { direction: "S", range: [168.75, 191.25] },
    { direction: "SSW", range: [191.25, 213.75] },
    { direction: "SW", range: [213.75, 236.25] },
    { direction: "WSW", range: [236.25, 258.75] },
    { direction: "W", range: [258.75, 281.25] },
    { direction: "WNW", range: [281.25, 303.75] },
    { direction: "NW", range: [303.75, 326.25] },
    { direction: "NNW", range: [326.25, 348.75] },
    { direction: "N", range: [348.75, 360] },
  ];

  for (let i = 0; i < degreeRanges.length; i++) {
    if (degrees >= degreeRanges[i].range[0] && degrees < degreeRanges[i].range[1]) {
      return degreeRanges[i].direction;
    }
  }
  return "N"; // default direction if degrees is not within any of the defined ranges
}

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
  const [selectedSpot, setSelectedSpot] = useState('');
  const [arr, setArr] = useState([])

  const handleDropdownSelect = async (e) => {
    const filteredLocationData = locationData.filter((location) => location.surf_spot === e)
    console.log(filteredLocationData[0])
    // const selectedSpot = locationData[eventKey];
    setSelectedSpot(filteredLocationData[0]);
  }

  useEffect(() => {
    let lat = 0;
    let lon = 0;
    if (selectedSpot === "Ocean Beach") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Mavericks") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Malibu") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "The Wedge") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Pismo Beach Pier") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Rincon") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Huntington Beach Pier") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "San Onofre Beach") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Asilomar Beach") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Cardiff Reef") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Oceanside Pier") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Doheny Beach") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Lower Trestles") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Blacks Beach") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Windandsea Beach") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Swamis") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Steamer Lane") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Pleasure Point") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Ventura Point") {
      lat = 37.75545
      lon = -122.5292
    }
    if (selectedSpot === "Pacifica / Linda Mar Beach") {
      lat = 37.75545
      lon = -122.5292
    }
    
    let params = "swellHeight,swellPeriod,swellDirection,windSpeed,windDirection";
    let source = "noaa";
    // GetSurfReport(selectedSpot.surf_spot, selectedSpot.lat, selectedSpot.lng);
    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${params}&source=${source}`,
      {
        headers: {
          Authorization:
            "5c5365e4-a940-11ed-a138-0242ac130002-5c53665c-a940-11ed-a138-0242ac130002",//API key
        },
      }).then((response) => {
        return response.json()
      }).then((data) => {
        // console.log(data.hours[0].swellHeight.noaa)
        setArr(data.hours)
      })

  }, [selectedSpot]);

  // console.log(arr)


  return (
    <div className="Location">
      <Dropdown onSelect={handleDropdownSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Search Locations
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {locationData?.map((spot, i) => (
            <Dropdown.Item eventKey={spot.surf_spot} key={i} >
              {spot.surf_spot}
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
                <Card.Title>Current Conditions for {[selectedSpot.surf_spot]}</Card.Title>
                <Card.Text>
                  {arr && arr.length > 0 ? (
                    <>
                      <span>Swell Height: {Math.round(arr[0].swellHeight.noaa * 3.28084)} ft.</span>
                      <br />
                      <span>Swell Period: {Math.round(arr[0].swellPeriod.noaa)} seconds</span>
                      <br />
                      <span>Swell Direction: {getCardinalDirection(arr[0].swellDirection.noaa)}</span>

                      <br />
                      <span>Wind Speed: {Math.round(arr[0].windSpeed.noaa)} mph</span>
                      <br />
                      <span>Wind Direction: {getCardinalDirection(arr[0].windDirection.noaa)}</span>
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