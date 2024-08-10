import { Component } from "react";

class InitializeState extends Component {
    // constructor() {
    //     super()
        state = {
            state1: 0,
            state2:"Hello There,How you doing?"
        }
    // }
    render() {
        return (<>
                    <h1>{this.state.state2}</h1>
                </>)
    }
}
export default InitializeState;