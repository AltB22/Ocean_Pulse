import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Card, Form, Button, ListGroup, InputGroup } from "react-bootstrap";
import { ADD_LOCATION } from "../../utils/mutations";

function AddLocationCard() {
  const [location, setLocation] = useState([]);
  const [newLocation, setNewLocation] = useState("");
  const [addLocation] = useMutation(ADD_LOCATION);

  const handleAddLocation = (event) => {
    event.preventDefault();
    setLocation([...location, newLocation]);
    setNewLocation("");
  };

  const handleRemoveLocation = (index) => {
    const newLocation = [...location];
    newLocation.splice(index, 1);
    setLocation(newLocation);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addLocation({
        variables: { location },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    
    <Card>
      <Card.Header>Add Locations</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicLocation">
            <Form.Label>Add Location</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter location"
                value={newLocation}
                onChange={(event) => setNewLocation(event.target.value)}
              />
              <InputGroup.Append>
                <Button variant="primary" onClick={handleAddLocation}>
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>

        <ListGroup>
          {location.map((location, index) => (
            <ListGroup.Item key={index}>
              {location}
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleRemoveLocation(index)}
              >
                X
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button
          variant="primary"
          className="float-right"
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </Card.Body>
    </Card>
  );

  // return (
  //   <Card>
  //     <Card.Header>Add Locations</Card.Header>
  //     <Card.Body>
  //       <Form>
  //         <Form.Group controlId="formBasicLocation">
  //           <Form.Label>Add Location</Form.Label>
  //           <InputGroup>
  //             <Form.Control
  //               type="text"
  //               placeholder="Enter location"
  //               value={newLocation}
  //               onChange={(event) => setNewLocation(event.target.value)}
  //             />
  //             <InputGroup.Append>
  //               <Button variant="primary" onClick={handleAddLocation}>
  //                 Add
  //               </Button>
  //             </InputGroup.Append>
  //           </InputGroup>
  //         </Form.Group>
  //       </Form>

  //       <ListGroup>
  //         {location.map((location, index) => (
  //           <ListGroup.Item key={index}>
  //             {location}
  //             <Button
  //               variant="danger"
  //               className="float-right"
  //               onClick={() => handleRemoveLocation(index)}
  //             >
  //               Remove
  //             </Button>
  //           </ListGroup.Item>
  //         ))}
  //       </ListGroup>
  //     </Card.Body>
  //   </Card>
  // );
}

export default AddLocationCard;