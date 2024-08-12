import { useContext } from "react"
import { NewContext } from "./Component1"

function Component2() {
    const newValue = useContext(NewContext);
    return(
        <> 
            {/* <NewContext.Consumer>
                {
                    (data) => {
                        return <h1>{data}</h1>
                    }
                }
            </NewContext.Consumer> */}
            {newValue}
        </>
    )
}
export default Component2