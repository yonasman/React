import { Component } from "react";

class PassProps extends Component {
    render() {
        return (
            <>
                <h1>Hello</h1>
                <button onClick={this.props}>Reset from Props</button>
            </>
        )
    }
}
export default PassProps;