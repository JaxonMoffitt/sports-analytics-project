import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function WR_tile() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div className="card">
        <p>Predicted Approximate Value:</p>
        <div className="container">
          <h4><b>14</b></h4>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Receptions</Form.Label>
                <Form.Control type="number" placeholder="Enter receptions" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Vertical</Form.Label>
                <Form.Control type="number" placeholder="Enter vertical" />
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="number" placeholder="Enter weight" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default WR_tile;