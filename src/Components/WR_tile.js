import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class WR_tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forty: 0,
            recAtt: 0,
            recYds: 0,
            approximateValue: 0,
            intercept: -53.283054,
            fortyCoeff: 12.316933,
            recAttCoeff: -0.059334,
            recYdsCoeff: 0.011772,
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
            (this.state.fortyCoeff * parseInt(this.state.forty)) + 
            (this.state.recAttCoeff * parseInt(this.state.recAtt)) + 
            (this.state.recYdsCoeff * parseInt(this.state.recYds));

        //Rounds AV to nearest integer
        av = av.toFixed(2);

        //Sets updated AV value
        this.setState({
            approximateValue: av
        });
        e.preventDefault();
    }

    render() {
        return (
            <span>
                <h1 className="center">Wide Receiver</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35em'}}>
                    <div className="card">
                        <br/>
                        <p>Predicted Approximate Value:</p>
                        <div className="container">
                            <h2><b>{this.state.approximateValue}</b></h2>
                            <p>Per Game</p>
                            <br/>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Forty Yard Time</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='forty' 
                                        placeholder="Enter Forty Time"
                                        value={this.state.forty}
                                        onChange={e => this.handleChange(e)} 
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Reception Attempts</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='recAtt' 
                                        placeholder="Enter Reception Attempts"
                                        value={this.state.recAtt}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Receiving Yards</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='recYds' 
                                        placeholder="Enter Receiving Yards"
                                        value={this.state.recYds}
                                        onChange={e => this.handleChange(e)} 
                                    />
                                </Form.Group>

                                <Button variant="primary" onClick={this.handleSubmit}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <p>Intercept: {this.state.intercept}</p>
                        <p>Forty Coefficient: {this.state.fortyCoeff}</p>
                        <p>Reception Attempts Coefficient: {this.state.recAttCoeff}</p>
                        <p>Receiving Yards Coefficient: {this.state.recYdsCoeff}</p>
                    </div>
                </div>
            </span>
        );
    }
}