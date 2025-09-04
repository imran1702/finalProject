import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../Container'
import { FaCartShopping, FaHeart } from 'react-icons/fa6'
import { IoIosGitCompare } from 'react-icons/io'

const ProductDetails = () => {
  let productId = useParams()
  let [singleProduct, setSingleProduct] = useState([])
  let getProductId = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleProduct(response.data)
    })
  }

  useEffect(() => {
    getProductId()
  }, [])
  console.log(singleProduct);


  return (
    <section className='py-5'>
      <Container>
        <div className="">
          <div className="flex">
            <div className="">
              <img src={singleProduct.thumbnail} alt="" />
            </div>
            <div className="">
              <h2 className='font-dm text-[32px] text-[#606afb]'>{singleProduct.title}</h2>
              <div className="flex gap-4">
                <span className='bg-[#abfcfd88] py-2 px-3 rounded-2xl font-dm text-[14px]'>Price: <strong>{singleProduct.price}TK</strong></span>
                <span className='bg-[#abfcfd88] py-2 px-3 rounded-2xl font-dm text-[14px]'>Discount: <strong>{singleProduct.discountPercentage}%</strong></span>
                <span className='bg-[#abfcfd88] py-2 px-3 rounded-2xl font-dm text-[14px]'>Stock: <strong>{singleProduct.availabilityStatus}</strong></span>
                <span className='bg-[#abfcfd88] py-2 px-3 rounded-2xl font-dm text-[14px]'>Brand: <strong>{singleProduct.brand}</strong></span>
              </div>
              <div className="leading-8">
                <p className='capitalize font-dm'><strong>Category: </strong>{singleProduct.category}</p>
                <p className='capitalize font-dm'><strong>Available Stock: </strong>{singleProduct.stock}</p>
                <p className='capitalize font-dm'><strong>Weight: </strong>{singleProduct.weight}</p>
                <p className='capitalize font-dm'><strong>shipping Information: </strong>{singleProduct.shippingInformation}</p>
                <p className='capitalize font-dm'><strong>minimum Order Quantity : </strong>{singleProduct.minimumOrderQuantity}</p>
                <p className='capitalize font-dm'><strong>return Policy: </strong>{singleProduct.returnPolicy}</p>
                <p className='capitalize font-dm'><strong>warranty: </strong>{singleProduct.warrantyInformation}</p>
              </div>
              <div className="flex gap-4">
                <button className='bg-[#606afb] py-2 px-4 rounded-2xl cursor-pointer'>Buy Now</button>
                <button className='bg-[#606afb] py-2 px-4 rounded-2xl cursor-pointer'>Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductDetails