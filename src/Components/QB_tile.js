import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class QB_tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passingYards: 0,
            adjustedPassYards: 0,
            passYardsPerAttempt: 0,
            approximateValue: 0,
            intercept: 0.5009,
            passYdsCoeff: 0.003276,
            passYACoeff: 13.27,
            passAYACoeff: -13.26,
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
            (this.state.passYdsCoeff * parseInt(this.state.passingYards)) + 
            (this.state.passAYACoeff * parseInt(this.state.adjustedPassYards)) + 
            (this.state.passYACoeff * parseInt(this.state.passYardsPerAttempt));

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
                <h1 className="center">Quarterback</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '75vh'}}>
                    <div className="card">
                        <p>Predicted Approximate Value:</p>
                        <div className="container">
                            <h2><b>{this.state.approximateValue}</b></h2>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Passing Yards</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='passingYards' 
                                        placeholder="Enter passing yards"
                                        value={this.state.passingYards}
                                        onChange={e => this.handleChange(e)} 
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Adjusted Pass Yards Per Attempt</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='adjustedPassYards' 
                                        placeholder="Enter adjusted pass yards per attempt"
                                        value={this.state.adjustedPassYards}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Pass Yards Per Attempt</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='passYardsPerAttempt' 
                                        placeholder="Enter pass yards per attempt"
                                        value={this.state.passYardsPerAttempt}
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