

import React, { useState, useEffect } from "react";
import { Card, Row, Col, Dropdown } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../utils/queries";
import { REACT_APP_STORMGLASS_API_KEY } from "./apiKey";



//This function defines ranges of the numerical points of the compass and converts them to the 16 cardinal directions for use in the wind and swell directions as returned by the stormglass api.  For example, I didn't want the user to get back Wind Direction: 288...I wanted that to say NW instead -Billy
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
//defines styling for the component.
const styles = {

  heading: {
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '2.5rem',
    padding: '10px',
    textAlign: 'center',
    margin: 30,
    backgroundColor: " #2f7bff",
  },
};

const Locations = () => {
  const { loading, data } = useQuery(GET_LOCATIONS);

  const locationData = data?.locations || [];
  const [selectedSpot, setSelectedSpot] = useState('');
  let [arr, setArr] = useState([])

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

      lat = 37.73063042319432
      lon = -122.63783724680127
    }
    if (selectedSpot === "Mavericks") {
      lat = 37.509978556665104
      lon = -122.5534502689891
    }
    if (selectedSpot === "Malibu") {
      lat = 33.9699
      lon = -118.7648
    }
    if (selectedSpot === "The Wedge") {
      lat = 33.574190670682526
      lon = -117.90399224601771
    }
    if (selectedSpot === "Pismo Beach Pier") {
      lat = 35.124497578676426
      lon = -120.79827316994256
    }
    if (selectedSpot === "Rincon") {
      lat = 34.30113404685083
      lon = -119.80710697995346
    }
    if (selectedSpot === "Huntington Beach Pier") {
      lat = 33.55514116601666
      lon = -118.08233709280819
    }
    if (selectedSpot === "San Onofre Beach") {
      lat = 33.35128285053784
      lon = -117.60410957753254
    }
    if (selectedSpot === "Asilomar Beach") {
      lat = 36.61988600976913
      lon = -121.94843463491648
    }
    if (selectedSpot === "Cardiff Reef") {
      lat = 33.00960624984056
      lon = -117.28992972995269
    }
    if (selectedSpot === "Oceanside Pier") {
      lat = 33.19076840433912
      lon = -117.39056770233421
    }
    if (selectedSpot === "Doheny Beach") {
      lat = 33.44492676305343
      lon = -117.70867232115556
    }
    if (selectedSpot === "Lower Trestles") {
      lat = 33.38325335472108
      lon = -117.6075561464269
    }
    if (selectedSpot === "Blacks Beach") {
      lat = 32.892573073666696
      lon = -117.28268378738454
    }
    if (selectedSpot === "Windandsea Beach") {
      lat = 32.8303
      lon = -117.2984
    }
    if (selectedSpot === "Swamis") {
      lat =  33.033085394982464
      lon = -117.30427078032395
    }
    if (selectedSpot === "Steamer Lane") {
      lat = 36.92156952230218
      lon = -121.9791057821476
    }
    if (selectedSpot === "Pleasure Point") {
      lat = 36.92156952230218
      lon = -121.9791057821476
    }
    if (selectedSpot === "Ventura Point") {
      lat = 34.265489186445244
      lon =  -119.34219155558733
    }
    if (selectedSpot === "Pacifica / Linda Mar Beach") {
      lat = 37.6053466863336
      lon = -122.51270129302262
    }
    // const REACT_APP_STORMGLASS_API = REACT_APP_STORMGLASS_API_KEY
    
    let params = "swellHeight,swellPeriod,swellDirection,windSpeed,windDirection";
    let source = "noaa";
    // GetSurfReport(selectedSpot.surf_spot, selectedSpot.lat, selectedSpot.lng);
    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${params}&source=${source}`,
      {
        headers: {
          Authorization://This needs to be hidden.  We've tried multiple ways but haven't figured out. process.env.REACT_APP_STORMGLASS_API isn't working neither is referencing the const from apiKey.js
          "5c5365e4-a940-11ed-a138-0242ac130002-5c53665c-a940-11ed-a138-0242ac130002"
          // REACT_APP_STORMGLASS_API
           ,//API key
        },
      }).then((response) => {
        return response.json()
      }).then((data) => {
        // console.log(data.hours[0].swellHeight.noaa)
        setArr(data.hours)
      })

  }, [selectedSpot]);

  console.log(arr)


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