import { Component } from "react";
// import Login from "./Login";
// import Logout from "./Logout";
// import PassProps from "./PassProps";

class InitializeState extends Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            state2:"",
            currentState: false
        }
        // this.increment = this.increment.bind(this)
    }
    // react life cycles
    componentDidMount () {
        // console.log("mount")
        this.setState((state) => {
            return {
                state2 : state.state2 = "Loading..."
            }
        })
    }
    // update
    componentDidUpdate(prevProp, prevState) {
        if(prevState !== this.state.value) {
            document.title = this.state.value
        }
    }
    // componentWillUnmount() {
    //     alert("Sure to leave?")
    // }
    increment = () =>{
        this.setState((state) => {
            return {
                value : state.value + 1
            }
        })
    }
    
    // decrease the value
    decrement = () => {
    this.setState((state) => {
        return {
            value : state.value - 1
        }
    })
    }
    // reset the value
    reset = () =>{
        this.setState((state) => {
            return {
            value : state.value = 0
        }
        })
    }
    // **************************
    updateState = () => {
        this.setState((state)=> {
            return {
                currentState : !state.currentState
            }
        })
    }
    render() {
        return (<>
                    <h1>{this.state.value}</h1>
                    <button onClick={this.increment}>Rate Up</button>
                    <button onClick={this.decrement}>Rate Down</button>
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.updateState}>UpdateState</button>
                    {this.state.currentState ? <img src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=1024x1024&w=is&k=20&c=8mgK2Kq73o8DIjazvLmEGkhx2p_7P5r3mvpbIM6q5cA="></img>: <img src = "https://media.istockphoto.com/id/1649298438/photo/joyful-retired-couple-hiking.jpg?s=1024x1024&w=is&k=20&c=Tvozx6SuW5hxS9gpED6g-mKL5pyoywteOgOec-o0Ro4="></img>}
                </>)
    }
}
export default InitializeState;