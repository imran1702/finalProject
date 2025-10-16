import React from 'react'
import Container from '../Container'
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {
  let navigate = useNavigate()
  let handleshop = ()=>{
    navigate("/products")
  }
  return (
   <section>
    <Container>
      <div className="">
       <div class="bg-purple-50 sm:px-8 px-4 py-6">
        <div class="max-w-screen-xl max-lg:max-w-xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-y-12 gap-8">
                <div class="max-w-4xl w-full h-max rounded-md">
                    <form>
                        <div>
                            <h2 class="text-xl text-slate-900 font-semibold mb-6">Delivery Details</h2>
                            <div class="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">First Name</label>
                                    <input type="text" placeholder="Enter First Name"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">Last Name</label>
                                    <input type="text" placeholder="Enter Last Name"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">Email</label>
                                    <input type="email" placeholder="Enter Email"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">Phone No.</label>
                                    <input type="number" placeholder="Enter Phone No."
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">Address Line</label>
                                    <input type="text" placeholder="Enter Address Line"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">City</label>
                                    <input type="text" placeholder="Enter City"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">State</label>
                                    <input type="text" placeholder="Enter State"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">Zip Code</label>
                                    <input type="text" placeholder="Enter Zip Code"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                            </div>
                        </div>


                        <div class="mt-10">
                            <h2 class="text-xl text-slate-900 font-semibold mb-6">Payment</h2>
                            <div class="flex flex-wrap gap-y-6 gap-x-12 mt-4 mb-8">
                                <div class="flex items-center">
                                    <input type="radio" name="pay-method" class="w-5 h-5 cursor-pointer" id="card" checked />
                                    <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                                        <img src="https://readymadeui.com/images/visa.webp" class="w-12" alt="card1" />
                                        <img src="https://readymadeui.com/images/american-express.webp" class="w-12" alt="card2" />
                                        <img src="https://readymadeui.com/images/master.webp" class="w-12" alt="card3" />
                                    </label>
                                </div>
                                <div class="flex items-center">
                                    <input type="radio" name="pay-method" class="w-5 h-5 cursor-pointer" id="paypal" />
                                    <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                                        <img src="https://readymadeui.com/images/paypal.webp" class="w-20" alt="paypalCard" />
                                    </label>
                                </div>
                            </div>
                            <div class="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">Cardholder's Name</label>
                                    <input type="text" placeholder="Enter Cardholder's Name"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">Card Number</label>
                                    <input type="text" placeholder="Enter Card Number"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">Expiry</label>
                                    <input type="text" placeholder="Enter EXP."
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                                <div>
                                    <label class="text-sm text-slate-900 font-medium block mb-2">CVV</label>
                                    <input type="text" placeholder="Enter CVV"
                                        class="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                </div>
                            </div>
                            <div onClick={handleshop} class="flex gap-4 max-lg:flex-col mt-8">
                                <button type="button" class="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-200 hover:bg-gray-300 border border-gray-300 text-slate-900 max-lg:order-1 cursor-pointer">Continue Shopping</button>
                                <button type="button" class="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">Complete Purchase</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="max-lg:-order-1">
                    <h2 class="text-xl text-slate-900 font-semibold mb-6">Order Summary</h2>
                    <div class="relative bg-white border border-gray-300 rounded-md">
                        <div class="px-6 py-8 md:overflow-auto">
                            <div class="space-y-4">
                                <div class="flex gap-4 max-sm:flex-col">
                                    <div class="w-24 h-24 shrink-0 bg-purple-50 p-2 rounded-md">
                                        <img src='https://readymadeui.com/images/product14.webp' class="w-full h-full object-contain" />
                                    </div>
                                    <div class="w-full flex justify-between gap-4">
                                        <div>
                                            <h3 class="text-sm font-medium text-slate-900">Velvet Sneaker</h3>
                                            <p class="text-sm font-medium text-slate-500 mt-2">Black/White</p>
                                            <h6 class="text-[15px] text-slate-900 font-semibold mt-4">$18.00</h6>
                                        </div>
                                        <div class="flex flex-col justify-between items-end gap-4">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                                </svg>
                                            </div>
                                            <div
                                                class="flex items-center px-2.5 py-1.5 border border-gray-400 text-slate-900 text-xs font-medium outline-0 bg-transparent rounded-md">
                                                <button type="button" class="cursor-pointer border-0 outline-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                                                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                    </svg>
                                                </button>
                                                <span class="mx-3">1</span>
                                                <button type="button" class="cursor-pointer border-0 outline-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
                                                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr class="border-gray-300" />

                                <div class="flex gap-4 max-sm:flex-col">
                                    <div class="w-24 h-24 shrink-0 bg-purple-50 p-2 rounded-md">
                                        <img src='https://readymadeui.com/images/watch5.webp' class="w-full h-full object-contain" />
                                    </div>
                                    <div class="w-full flex justify-between gap-4">
                                        <div>
                                            <h3 class="text-sm font-medium text-slate-900">Smart Watch Timex</h3>
                                            <p class="text-sm font-medium text-slate-500 mt-2">Gray</p>
                                            <h6 class="text-[15px] text-slate-900 font-semibold mt-4">$90.00</h6>
                                        </div>
                                        <div class="flex flex-col justify-between items-end gap-4">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                                </svg>
                                            </div>
                                            <div
                                                class="flex items-center px-2.5 py-1.5 border border-gray-400 text-slate-900 text-xs font-medium outline-0 bg-transparent rounded-md">
                                                <button type="button" class="cursor-pointer border-0 outline-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                                                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                    </svg>
                                                </button>
                                                <span class="mx-3">1</span>
                                                <button type="button" class="cursor-pointer border-0 outline-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
                                                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr class="border-gray-300" />

                                <div class="flex gap-4 max-sm:flex-col">
                                    <div class="w-24 h-24 shrink-0 bg-purple-50 p-2 rounded-md">
                                        <img src='https://readymadeui.com/images/dark-green-tshirt-2.webp' class="w-full h-full object-contain" />
                                    </div>
                                    <div class="w-full flex justify-between gap-4">
                                        <div>
                                            <h3 class="text-sm font-medium text-slate-900">T-shirt</h3>
                                            <p class="text-sm font-medium text-slate-500 mt-2">Dark Green</p>
                                            <h6 class="text-[15px] text-slate-900 font-semibold mt-4">$20.00</h6>
                                        </div>
                                        <div class="flex flex-col justify-between items-end gap-4">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <div
                                                    class="flex items-center px-2.5 py-1.5 border border-gray-400 text-slate-900 text-xs font-medium outline-0 bg-transparent rounded-md">
                                                    <button type="button" class="cursor-pointer border-0 outline-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                                                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                        </svg>
                                                    </button>
                                                    <span class="mx-3">1</span>
                                                    <button type="button" class="cursor-pointer border-0 outline-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
                                                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="border-gray-300 my-6" />
                            <div>
                                <ul class="text-slate-500 font-medium space-y-4">
                                    <li class="flex flex-wrap gap-4 text-sm">Subtotal <span class="ml-auto font-semibold text-slate-900">$102.00</span></li>
                                    <li class="flex flex-wrap gap-4 text-sm">Shipping <span class="ml-auto font-semibold text-slate-900">$6.00</span></li>
                                    <li class="flex flex-wrap gap-4 text-sm">Tax <span class="ml-auto font-semibold text-slate-900">$5.00</span></li>
                                    <hr class="border-slate-300" />
                                    <li class="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">Total <span class="ml-auto">$113.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    </Container>
   </section>
  )
}

export default CheckOut