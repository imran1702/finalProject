import React from 'react'
import Container from '../Container'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, productRemove } from '../slices/productSlice'
import { Link } from 'react-router-dom'
import cart from "../../assets/Adobe Express - file (2).png"

const Cart = () => {
  let data = useSelector((state) => state.product.cartItem)
  let dispatch = useDispatch()
  let { totalPrice, totalQuantity } = data.reduce((acc, item) => {
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun
    return acc;
  }, { totalPrice: 0, totalQuantity: 0 })
  let discount = totalPrice * 5 / 100

  return (
    <section>
      <Container>
        <div className="">
          <div class="mt-6">
            {data.length > 0 ?
              <>
                {data.map((item, i) => (
                  <div class="mx-auto my-4 w-full">
                    <div class="space-y-6">
                      <div class="rounded-lg border border-gray-200 bg-[#F5F5F3] shadow-sm dark:border-gray-700 md:p-6">
                        <div class="md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <img className='h-[150px]' src={item.thumbnail} alt="" />
                          <label for="counter-input" class="sr-only">Choose quantity:</label>
                          <div class="flex items-center justify-between md:order-3 md:justify-end">
                            <div class="flex items-center">
                              <button onClick={() => dispatch(decrement(i))} type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                              </button>
                              <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" placeholder="" value={item.qun} required />
                              <button onClick={() => dispatch(increment(i))} type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                              </button>
                            </div>
                            <div class="text-end md:order-4 md:w-32">
                              <p class="text-base font-bold text-gray-900">{(item.price * item.qun).toFixed(2)} TK</p>
                            </div>
                          </div>
                          <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a href="#" class="text-base font-medium text-gray-900 hover:underline">{item.title}</a>
                            <div class="flex items-center gap-4">
                              <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                </svg>
                                Add to Favorites
                              </button>
                              <button onClick={() => dispatch(productRemove(i))} type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="justify-end flex">
                  <table>
                    <tr>
                      <td>Sub-Total :</td>
                      <td>{totalPrice.toFixed(2)} TK</td>
                    </tr>
                    <tr>
                      <td>Less Discount:</td>
                      <td>{discount.toFixed(2)} TK</td>
                    </tr>
                    <tr>
                      <td>total:</td>
                      <td>{(totalPrice - discount).toFixed(2)} TK</td>
                    </tr>
                  </table>
                </div>
              </>
              :
              <div className="text-center">
                <div className="">
                  <h1 className='text-[48px] font-dm'>Your Cart is Empty</h1>
                  <div className="w-[300px] mx-auto">
                    <img className='w-full' src={cart} alt="" />
                  </div>
                </div>
                <Link to="/products">
                  <button className='bg-[#606afb] py-2 px-4 rounded-2xl cursor-pointer font-dm text-[#fff]'>Continue Shopping</button>
                </Link>
              </div>
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Cart