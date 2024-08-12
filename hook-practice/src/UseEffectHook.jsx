import { useEffect, useState } from "react"
// import { useState } from "react";

function UseEffectHook() {
    const [count, setCount] = useState(0);


    const countUpdate = () => {
        setCount((count) => count + 1)
    }
    // use effect
    useEffect(() => {
        console.log("count updated")
    },[count])


    return (
        <>
            <h1>Hello</h1>
            <p>count : {count}</p>
            <button onClick={countUpdate}>Increase</button>
        </>
    )
}
export default UseEffectHook