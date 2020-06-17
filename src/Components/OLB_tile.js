import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function OLB_tile() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}>
      <h1>Offensive Linebacker</h1>
      <div className="card">
        <p>Predicted Approximate Value:</p>
        <div className="container">
          <h3><b>12</b></h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tackles for Loss</Form.Label>
                <Form.Control type="number" placeholder="Enter tackles for loss" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Pass Deflections</Form.Label>
                <Form.Control type="number" placeholder="Enter pass deflections" />
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Solo Tackles</Form.Label>
                <Form.Control type="number" placeholder="Enter solo tackles" />
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

export default OLB_tile;