import { useState } from "react"
import "./PracticeHook.css"


function PracticeHook() {
    const [car, setCar] = useState({
        name : "Toy123",
        brand : "Toyota",
        color : "red",
        image : "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
    })

    const updateCar = () => {
        setCar((prevState) => {
            let newColor = prevState.color == "red" ? "blue" : "red";
            const newImage = newColor == "blue" ? "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg" : "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg" 

            return ({
                ...prevState,
                color : newColor,
                image : newImage
            })
            
    })
    }
    return (
        <>
            <p>{car.name}</p>
            <p>{car.brand}</p>
            <p className={car.color}>{car.color}</p>
            <img src={car.image}/>
            <button onClick={updateCar}>Update car</button>
        </>
    )
}
export default PracticeHook