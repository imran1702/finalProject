import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  let productId = useParams()
  console.log(productId);
  
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails