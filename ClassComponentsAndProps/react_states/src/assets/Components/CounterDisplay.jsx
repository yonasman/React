import { Component } from "react";
import propTypes from "prop-types"
class CounterDisplay extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <p>Counter: {this.props.counter}</p>
        )
    }
    
}
CounterDisplay.propTypes = {
    counter : propTypes.number.isRequired
}
export default CounterDisplay