import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class OLB_tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tacklesForLoss: 0,
            passDeflections: 0,
            soloTackles: 0,
            approximateValue: 0,
            intercept: -0.368385,
            tackleCoeff: 0.102624,
            passDeflectionsCoeff: 0.327172,
            soloTacklesCoeff: -0.016485,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        //Calculates AV based on input
        let av = 
            this.state.intercept +
            (this.state.tackleCoeff * parseInt(this.state.tacklesForLoss)) + 
            (this.state.soloTacklesCoeff * parseInt(this.state.soloTackles)) + 
            (this.state.passDeflectionsCoeff * parseInt(this.state.passDeflections));

        //Rounds AV to nearest integer
        av = Math.round(av);

        //Sets updated AV value
        this.setState({
            approximateValue: av
        });
        e.preventDefault();
    }

    render() {
        return (
            <span>
                <h1 className="center">Outside Linebacker</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                    <div className="card">
                        <br />
                        <p>Predicted Approximate Value:</p>
                        <div className="container">
                            <h2><b>{this.state.approximateValue}</b></h2>
                            <p>Per Game</p>
                            <br />
                            <Form>
                                <Form.Group>
                                    <Form.Label>Tackles For Loss</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='tacklesForLoss' 
                                        placeholder="Enter tackles for loss"
                                        value={this.state.tacklesForLoss}
                                        onChange={e => this.handleChange(e)} 
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Pass Deflections</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='passDeflections' 
                                        placeholder="Enter pass deflections"
                                        value={this.state.passDeflections}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Solo Tackles</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='soloTackles' 
                                        placeholder="Enter solo tackles"
                                        value={this.state.soloTackles}
                                        onChange={e => this.handleChange(e)} 
                                    />
                                </Form.Group>

                                <Button variant="primary" onClick={this.handleSubmit}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}