import { createContext } from "react"
import Component2 from "./Component2";

const NewContext = createContext();
function Component1() {
    return (
        <>
            <NewContext.Provider value="Hello from comp 2">
                <Component2/>
            </NewContext.Provider>
        </>
    )
}
export {Component1,NewContext}