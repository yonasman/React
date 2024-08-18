import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Four04 from "../Four04"

function Product() {
    const [product, setSingleProduct]= useState([])
    const {productId} = useParams();

    useEffect(()=> {
        fetch("http://localhost:1122/iphones").then((res) => 
            res.json()).then((productList) => {
            // console.log(data)
            const singleProduct = productList.filter((product) => product.product_url === productId)
                // console.log(singleProduct)
            setSingleProduct(singleProduct);
        }).catch((err) => {
            console.log(err);
        })
    },[productId])

    if(product.length) {
        return (
            <div>
                {
                product?.map((singlePro, i) => {
                    return (
                        <div key={i}>
                            <p>{singlePro.product_name}</p>
                            <p>{singlePro.product_desc}</p>
                        </div>
                    )
                })
                }
            </div>
        )
    } else {
        return <Four04/>
    }
}

export default Product
