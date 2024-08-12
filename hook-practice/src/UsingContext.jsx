import { useContext } from "react"
import { MyContext } from "./App"


function UsingContext() {
    const data = useContext(MyContext)
        return (
            <>
                {/* <myContext.Consumer>{
                    (data) => {
                        return(
                            
                                <h1>{data}</h1>
                            
                        )
                    }
                } </myContext.Consumer> */}
                <h1>{data}</h1>
            </>
            
        )
}
export default UsingContext