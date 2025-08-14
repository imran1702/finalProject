import React, { useContext, useEffect } from 'react'
import Container from '../Container'
import { ApiData } from '../ContextApi'
import { Link } from 'react-router-dom'
import { FaCartShopping, FaHeart } from 'react-icons/fa6'
import { IoIosGitCompare } from 'react-icons/io'

const Products = () => {
    let data = useContext(ApiData)
    console.log(data);
    
    return (
        <section className='py-5'>
            <Container>
                <div className="">
                    <div className="font-dm text-[48px] font-bold">
                        <h1>Products</h1>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-[24.5%] mt-15">
                            <div className="">
                                <div className="flex justify-between">
                                    <h5 className='font-dm font-bold text-[20px] text-[#262626]'>Shop by Category</h5>
                                    <h5 className='font-dm font-bold text-[20px] text-[#262626] cursor-pointer'>+</h5>
                                </div>
                                <ul className=''>
                                    {data.map((itemCategory)=>(
                                        <Link>
                                            <li className='capitalize'>{itemCategory.category}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-[74.5%]">
                            <div className="flex gap-10 justify-end my-10">
                                <div className="flex gap-2">
                                    <p>Sort by:</p>
                                    <select className='border-2 border-[#767676] px-4' name="" id="">
                                        <option value="Feature">Feature</option>
                                    </select>
                                </div>
                                <div className="flex gap-2">
                                    <p>Show:</p>
                                    <select className='border-2 border-[#767676] px-4' name="" id="">
                                        <option value="12">12</option>
                                        <option value="12">15</option>
                                        <option value="12">18</option>
                                        <option value="12">21</option>
                                        <option value="12">24</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                {data.map((item) => (
                                    <Link to="/products">
                                        <div className="shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] px-3 my-3">
                                            <div className="relative group">
                                                <img src={item.thumbnail} alt="" />
                                                <span className='absolute top-5 -rotate-45 text-[#ff0000]'>{item.availabilityStatus}</span>
                                                <div className="absolute bottom-4 right-0 invisible group-hover:visible">
                                                    <div className="flex items-center justify-end">
                                                        <p className='me-3 font-dm text-[16px] text-[#767676] hover:text-[#262626] cursor-pointer'>Add to Wish List</p>
                                                        <FaHeart></FaHeart>
                                                    </div>
                                                    <div className="flex items-center justify-end my-3">
                                                        <p className='me-3 font-dm text-[16px] text-[#767676] hover:text-[#262626] cursor-pointer'>Compare</p>
                                                        <IoIosGitCompare></IoIosGitCompare>
                                                    </div>
                                                    <div className="flex items-center justify-end">
                                                        <p className='me-3 font-dm text-[16px] text-[#767676] hover:text-[#262626] cursor-pointer'>Add to Cart</p>
                                                        <FaCartShopping></FaCartShopping>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between font-dm">
                                                <h3 className='text-[10px]'>{item.title}</h3>
                                                <strong>{item.price}BDT</strong>
                                            </div>
                                            <span>{item.brand}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Products