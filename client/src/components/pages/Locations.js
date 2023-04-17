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
  const [selectedSpot, setSelectedSpot] = useState('');
  const [currentConditions, setCurrentConditions] = useState(null);
  const [arr, setArr] = useState([])
  // const [defaultConst, defaultCase] = useState(null)


  // useEffect(() => {
  //   const GetCurrentConditions = async (selectedSpot) => {
  //     switch (selectedSpot?.surf_spot) {
  //       case '':
  //         let lat = 0
  //         let lng = 0
  //         const currentReport = await GetSurfReport(selectedSpot.surf_spot, lat, lng);

  //         setCurrentConditions(currentReport);
  //         break;
  //       default:
  //         setCurrentConditions("No conditions available");
  //     }
  //   };

  //   GetCurrentConditions(selectedSpot);
  // }, [selectedSpot]);

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
        console.log(data.hours[0].swellHeight.noaa)
       setArr(data.hours)
      })

  }, [selectedSpot]);


  // async function GetSurfReport(selectedSpot, lat, lng) {//function that accepts the 3 parameters from above and fetches data based on their values (lat & lng are the functionals here) plus other defined vars params & source
  //   if (!lat || !lng) {
  //     console.error("Lat and lng must be defined to fetch surf report.");
  //     return;
  //   }
  //   const response = await fetch(
  //     `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&source=${source}`,

  //     {
  //       headers: {
  //         Authorization:
  //           "5c5365e4-a940-11ed-a138-0242ac130002-5c53665c-a940-11ed-a138-0242ac130002",//API key
  //       },
  //     }
  //   );

  //   const surfReport = await response.json();//defining api response as json object
  //   console.log(arr)
  //   await setArr(surfReport.hours)
  //   //  const surfReportArr = [surfReport]

  //   // return surfReportArr;

  // }

  console.log(arr)
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
                      <span>Swell Height: {(arr[0].swellHeight.noaa * 3.28084).toFixed(2)} feet</span>

                      <br />
                      <span>Swell Period: {arr[0].swellPeriod.noaa}</span>
                      <br />
                      <span>Swell Direction: {arr[0].swellDirection.noaa}</span>
                      <br />
                      <span>Wind Speed: {arr[0].windSpeed.noaa}</span>
                      <br />
                      <span>Wind Direction: {arr[0].windDirection}</span>
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