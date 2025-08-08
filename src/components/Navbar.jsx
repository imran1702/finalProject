import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBarsStaggered, FaCartShopping } from 'react-icons/fa6'
import { FaCaretSquareDown, FaSearch } from 'react-icons/fa'
import { MdOutlineSupervisorAccount } from 'react-icons/md'
import img from "../assets/Image.png"
import { ImCross } from 'react-icons/im'

const Navbar = () => {
    let [category,setCategory] = useState(false)
    let [account,setAccount] = useState(false)
    let [cartShow,setcartShow] = useState(false)
    let cateRef = useRef()
    let accountRef = useRef()
    let cartShowRef = useRef()

    useEffect(()=>{
        
        document.addEventListener("click",(e)=>{
            if(cateRef.current.contains(e.target)){
                setCategory(!category)
            }else{
                setCategory(false)
            }
            if(accountRef.current.contains(e.target)){
                setAccount(!account)
           }else{
                setAccount(false)
           }
            if(cartShowRef.current.contains(e.target)){
                setcartShow(!cartShow)
           }else{
                setcartShow(false)
           }
        })
        
    },[category,account,cartShow])
  return (
    <section className='bg-[#F5F5F3] py-3'>
        <Container>
            <div className="flex justify-between items-center">
                <div className="relative">
                    <div className="flex items-center cursor-pointer" ref={cateRef}>
                        <FaBarsStaggered></FaBarsStaggered>
                        <p>Shop by Category</p>
                    </div>
                    {category &&
                    <div className="bg-[#262626] absolute z-10">
                        <ul>
                            <li className='text-[#ffffff70] ms-3 py-3 hover:text-[#fff] cursor-pointer hover:ms-6 duration-300'>Accesories</li>
                            <li className='text-[#ffffff70] ms-3 py-3 hover:text-[#fff] cursor-pointer hover:ms-6 duration-300'>Furniture</li>
                            <li className='text-[#ffffff70] ms-3 py-3 hover:text-[#fff] cursor-pointer hover:ms-6 duration-300'>Electronics</li>
                            <li className='text-[#ffffff70] ms-3 py-3 hover:text-[#fff] cursor-pointer hover:ms-6 duration-300'>Clothes</li>
                            <li className='text-[#ffffff70] ms-3 py-3 hover:text-[#fff] cursor-pointer hover:ms-6 duration-300'>Bags</li>
                            <li className='text-[#ffffff70] ms-3 py-3 hover:text-[#fff] cursor-pointer hover:ms-6 duration-300'>Home appliances</li>
                        </ul>
                    </div>
                    }
                </div>
                <div className="flex items-center relative">
                    <input className='bg-[#fff] py-2 ps-2 w-[450px]' type="search" placeholder='Search Products' />
                    <FaSearch className='absolute right-1 cursor-pointer'></FaSearch>
                </div>
                <div className="flex items-center gap-7">
                    <div className="relative">
                        <div className="flex items-center cursor-pointer" ref={accountRef}>
                            <MdOutlineSupervisorAccount></MdOutlineSupervisorAccount>
                            <FaCaretSquareDown></FaCaretSquareDown>
                        </div>
                        {account &&
                        <div className="text-center bg-[#fff] absolute w-[100px] right-0 z-10">
                            <p className='p-1 hover:bg-[#000] hover:text-[#fff]'>My Account</p>
                            <p className='p-1 hover:bg-[#000] hover:text-[#fff]'>Log Out</p>
                        </div>
                        }
                    </div>
                    <div className="relative">
                        <FaCartShopping className='cursor-pointer' ref={cartShowRef}></FaCartShopping>
                        {cartShow &&
                        <div className="p-2 absolute right-0 w-[250px] z-10">
                            <div className="bg-[#F5F5F3] flex items-center gap-4 p-2">
                                <div className="">
                                    <img src={img} alt="" />
                                </div>
                                <div className="">
                                    <h5>Black Smart Watch</h5>
                                    <strong>BDT 1200</strong>
                                </div>
                                <div className="">
                                    <ImCross className='cursor-pointer'></ImCross>
                                </div>
                            </div>
                            <div className="bg-[#fff] p-2">
                                <span>Subtotal:<strong>BDT 1200</strong></span>
                                <div className="justify-around flex">
                                    <button className='border-1 border[#000] py-[4px] px-[14px] cursor-pointer'>View Cart</button>
                                    <button  className='border-1 border[#fff] py-[4px] px-[14px] cursor-pointer'>Cheackout</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Navbar