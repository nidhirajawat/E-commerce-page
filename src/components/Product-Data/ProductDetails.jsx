import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'

const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
    const filterProduct = items.filter((product)=>product.id == id)
    //console.log(filterProduct)
    setProduct(filterProduct[0])
}, [id])
  return (
    <>
        <div className="container con">
            <div className="img">
                <img src={product.imgSrc} alt="" />
            </div>
            <div className='text-center'>
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">{product.description}</p>
            <button className='btn btn-primary mx-3'>{product.price}{" "}₹</button>
            <button className='btn btn-warning'>Add To Cart</button>
            </div>
        </div>
    </>
  )
}

export default ProductDetails
