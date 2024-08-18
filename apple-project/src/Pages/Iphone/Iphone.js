import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./Iphone.module.css"
import { Link } from 'react-router-dom'

function Iphone() {
    const [products,setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:1122/iphones").then(response => {
            // console.log(response.data);
            setProducts(response.data)
    }).catch((err) => console.log(err))
    },[])
    // console.log(products)
  return (
    <>
        <div className={styles.iphoneWrapper}>
            {
                products?.map((product,i) => {
                    
                    // console.log(product)
                    return(
                        <div key={i} className={styles.productWrapper}>
                            <div>
                                <img src="https://images.unsplash.com/photo-1692579278109-ce12cafba3d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product img"/>
                            </div>
                            <div>
                                <p>{product.product_name}</p>
                                <p>{product.product_brief_desc}</p>
                                {/* <p>{product.product_desc}</p> */}
                                <p>{product.product_price}</p>
                                <Link to={product.product_url}>Learn More</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>   
    </>
  )
}

export default Iphone
