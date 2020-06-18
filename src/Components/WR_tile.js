import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class WR_tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receptions: 0,
            vertical: 0,
            weight: 0,
            approximateValue: 0,
            intercept: -6.198266,
            recCoeff: 0.058225,
            verticalCoeff: 0.059266,
            weightCoeff: 0.019352,
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
            (this.state.recCoeff * parseInt(this.state.receptions)) + 
            (this.state.weightCoeff * parseInt(this.state.weight)) + 
            (this.state.verticalCoeff * parseInt(this.state.vertical));

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
                                    <Form.Label>Receptions</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='receptions' 
                                        placeholder="Enter receptions"
                                        value={this.state.receptions}
                                        onChange={e => this.handleChange(e)} 
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Vertical</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='vertical' 
                                        placeholder="Enter vertical"
                                        value={this.state.vertical}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Weight</Form.Label>
                                    <Form.Control 
                                        type="number" 
                                        step=".01" 
                                        name='weight' 
                                        placeholder="Enter weight in pounds"
                                        value={this.state.weight}
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