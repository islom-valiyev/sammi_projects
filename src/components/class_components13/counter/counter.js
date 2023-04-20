import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            counter: 0
        };

    }
    handeClick = (val) => {
        this.setState({ counter: val })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handeClick(this.state.counter+ 1)}>             ++++++++++++++++++++</button>
                <button onClick={() => this.handeClick(this.state.counter-1)}>             ------------------- </button>
                <button onClick={() => this.handeClick(0)}> 0</button>
                <p> {this.state.counter}</p>
            </div>
        )
    }
}
export default Counter
