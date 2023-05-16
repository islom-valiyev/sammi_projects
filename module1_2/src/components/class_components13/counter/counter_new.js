import React, { Component } from 'react';
import './counter_new.css'

class CounterNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    clickHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }
    clickHandlerIdc = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }));
    }
    clickHandlerZero = () => {
        this.setState(prevState => ({
            counter: 0
        }));
    }

    render() {
        return (
            <div className="wrapper">
                <h2 className="title">Counter</h2>
                <div className="counterContainer">
                    <button className="btn btn-success" onClick={this.clickHandler}>Increase</button>
                    <button className="btn btn-danger" onClick={this.clickHandlerIdc}>Decrease</button>
                    <button className="btn btn-success" onClick={this.clickHandlerZero}>Restart</button>

                    <p className="counter">{this.state.counter}</p>
                </div>
            </div>
        );
    }
}

export default CounterNew;
