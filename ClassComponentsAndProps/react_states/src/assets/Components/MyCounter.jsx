import {Component} from "react";
import CounterDisplay from "./CounterDisplay";
import EvenCounterDisplay from "./EvenCounterDisplay";


class MyCounter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0,
            prevCount : null
        }
    }
    allClicksCounter() {
        this.setState((state) => {
            return {
                counter : state.counter + 1
            }
        })
        
    }
    componentDidUpdate(prevPros,prevState) {
        if(prevState.counter !== this.state.counter) {
            this.setState({prevCount : prevState.counter})
        }
    }
    
    render() {
        return(
            <>
                <button onClick={() => {this.allClicksCounter()}}>Increase</button>
                <CounterDisplay counter = {this.state.counter}/>
                {this.state.counter % 2 == 0 ? <EvenCounterDisplay evenCounter = {this.state.counter} /> :<EvenCounterDisplay evenCounter =  {this.state.prevCount}/>}
            </>
        )
    }
}
export default MyCounter