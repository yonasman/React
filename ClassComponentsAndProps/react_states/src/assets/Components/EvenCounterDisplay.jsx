import { Component } from "react";
import propsTypes from "prop-types";

class EvenCounterDisplay extends Component {
    render() {
        return (
            <p>EvenCount: {this.props.evenCounter}</p>
        )
    }
}

EvenCounterDisplay.propTypes = {
    evenCounter : propsTypes.number.isRequired
}
export default EvenCounterDisplay;