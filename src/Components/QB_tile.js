import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function QB_tile() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div className="card">
        <p>Predicted Approximate Value:</p>
        <div className="container">
          <h3><b>13</b></h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Passing Yards</Form.Label>
                <Form.Control type="number" placeholder="Enter passing yards" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Adjusted Pass Yards Per Attempt</Form.Label>
                <Form.Control type="number" placeholder="Enter adjusted pass yards per attempt" />
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Pass Yards Per Attempt</Form.Label>
                <Form.Control type="number" placeholder="Enter pass yards per attempt" />
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

export default QB_tile;