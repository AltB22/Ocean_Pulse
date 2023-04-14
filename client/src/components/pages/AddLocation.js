import React, { useState } from "react";
import { Card, Form, Button, ListGroup, InputGroup } from "react-bootstrap";

function AddLocationCard() {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState("");

  const handleAddLocation = () => {
    setLocations([...locations, newLocation]);
    setNewLocation("");
  };

  const handleRemoveLocation = (index) => {
    const newLocations = [...locations];
    newLocations.splice(index, 1);
    setLocations(newLocations);
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
          {locations.map((location, index) => (
            <ListGroup.Item key={index}>
              {location}
              <Button
                variant="danger"
                className="float-right"
                onClick={() => handleRemoveLocation(index)}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default AddLocationCard;

