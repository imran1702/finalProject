import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Container from '../Container'
import { useDispatch } from 'react-redux';
import { addCart } from '../slices/productSlice';

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

  let navigate = useNavigate()
  let dispatch = useDispatch()

  let handleCart = (singleProduct) => {
    dispatch(addCart({...singleProduct, qun: 1}))
    toast("Add to Cart Successfully Done");
    setTimeout(() => {
      navigate("/cart")
    }, 2000)
  }


  return (
    <section className='py-5'>
      <Container>
        <div className="">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
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
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <div className="flex gap-4">
                <button className='bg-[#606afb] py-2 px-4 rounded-2xl cursor-pointer'>Buy Now</button>
                <button onClick={()=>handleCart(singleProduct)} className='bg-[#606afb] py-2 px-4 rounded-2xl cursor-pointer'>Add Cart</button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <ul className='flex gap-5'>
                <li className='bg-[#baf9eb] p-2 rounded-2xl'>
                  <button>Specification</button>
                </li>
                <li className='bg-[#baf9eb] p-2 rounded-2xl'>
                  <button>Description</button>
                </li>
                <li className='bg-[#baf9eb] p-2 rounded-2xl'>
                  <button>Review</button>
                </li>
              </ul>
            </div>
            <div className="">
              <h5>Description</h5>
              <p>{singleProduct.description}</p>
            </div>
            <div className="">
              <h5>Review</h5>
              <p>Get specific details about this product from customers who own it.</p>
              <p>{singleProduct.rating}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductDetails