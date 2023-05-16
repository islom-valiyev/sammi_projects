import { Component ,Fragment} from "react";

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
            <Fragment>
                <button onClick={() => this.handeClick(this.state.counter+ 1)}>             ++++++++++++++++++++</button>
                <button onClick={() => this.handeClick(this.state.counter-1)}>             ------------------- </button>
                <button onClick={() => this.handeClick(0)}> 0</button>
                <p> {this.state.counter}</p>
            </Fragment>
        )
    }
}
export default Counter
