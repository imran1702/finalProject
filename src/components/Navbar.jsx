import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBarsStaggered, FaCartShopping, FaGalacticSenate } from 'react-icons/fa6'
import { FaCaretSquareDown, FaSearch } from 'react-icons/fa'
import { MdOutlineSupervisorAccount } from 'react-icons/md'
import img from "../assets/Image.png"
import { ImCross } from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productRemove } from './slices/productSlice'
import { ApiData } from './ContextApi';

const Navbar = () => {
    let data = useSelector((state) => state.product.cartItem)
    let info = useContext(ApiData)
    let [category, setCategory] = useState(false)
    let [account, setAccount] = useState(false)
    let [cartShow, setcartShow] = useState(false)
    let [searchItem, setSearchItem] = useState(false)
    let cateRef = useRef()
    let accountRef = useRef()
    let cartShowRef = useRef()
    let showCartRef = useRef()
    let searchRef = useRef()
    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateRef.current.contains(e.target)) {
                setCategory(!category)
            } else {
                setCategory(false)
            }
            if (accountRef.current.contains(e.target)) {
                setAccount(!account)
            } else {
                setAccount(false)
            }
            if (cartShowRef.current.contains(e.target)) {
                setcartShow(!cartShow)
            } else {
                setcartShow(false)
            }
            if (showCartRef.current.contains(e.target)) {
                setcartShow(true)
            }
        })
    }, [category, account, cartShow])

    let handleCart = () => {
        navigate("/cart")
        setcartShow(false)
    }
    let handleCheckOut = ()=>{
        navigate("/checkout")
        setcartShow(false)
    }

    let [search, setSearch] = useState("")
    let [searchFilter, setSearchFilter] = useState([])
    let handleSearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value == "") {
            setSearchFilter([])
        } else {
            let searchFilterProducts = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchFilterProducts);
        }
    }
    let totalPriceNav = data.reduce((acc, item) => {
        acc.totalPriceNav += item.price * item.qun
        return acc;
    }, { totalPriceNav: 0 })

    let handleSeacrhItem = (id)=>{
        navigate(`/products/${id}`)
        setSearch("")
        setSearchFilter([])
    }
    


    return (
        <section className='bg-[#F5F5F3] py-3'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="relative">
                        <div className="flex items-center cursor-pointer" ref={cateRef}>
                            <FaBarsStaggered />
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
                    <div className="relative z-[9999]">
                        <div ref={searchRef} className="flex items-center">
                            <input onChange={handleSearch} className='bg-[#fff] py-2 ps-2 w-[450px]' value={search} type="search" placeholder='Search Products' />
                            <FaSearch className='absolute right-1 cursor-pointer' />
                        </div>
                        <div className="absolute top-10 max-h-[500px] overflow-y-auto">
                            {searchFilter.map((item) => (
                                <div onClick={()=>handleSeacrhItem(item.id)} className="flex items-center my-2 bg-amber-300">
                                    <div className="w-[150px] h-[100px]">
                                        <img className='max-w-full max-h-full' src={item.thumbnail} alt="" />
                                    </div>
                                    <h2>{item.title}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-7">
                        <div className="relative">
                            <div className="flex items-center cursor-pointer" ref={accountRef}>
                                <MdOutlineSupervisorAccount />
                                <FaCaretSquareDown />
                            </div>
                            {account &&
                                <div className="text-center bg-[#fff] absolute w-[100px] right-0 z-10">
                                    <p className='p-1 hover:bg-[#000] hover:text-[#fff]'>My Account</p>
                                    <p className='p-1 hover:bg-[#000] hover:text-[#fff]'>Log Out</p>
                                </div>
                            }
                        </div>
                        <div className="relative">
                            <div className="flex">
                                <FaCartShopping className='cursor-pointer' ref={cartShowRef} />
                                {data.length > 0 &&
                                    <p className='absolute bottom-3 right-0'>{data.length}</p>
                                }
                            </div>
                            {data.length > 0 &&
                                <>
                                    {cartShow &&
                                        <div ref={showCartRef} className="p-2 absolute right-0 w-[450px] z-1000">
                                            {data.map((item, i) => (
                                                <div className="bg-[#F5F5F3] flex items-center gap-4 p-2 justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-[100px]">
                                                            <img src={item.thumbnail} alt="" />
                                                        </div>
                                                        <div className="">
                                                            <h5>{item.title}</h5>
                                                            <strong>BDT {item.price}</strong>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => dispatch(productRemove(i))} className="">
                                                        <ImCross className='cursor-pointer' />
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="bg-[#fff] p-2">
                                                <span>Subtotal:<strong>BDT</strong></span>
                                                <div className="justify-around flex">
                                                    <button onClick={handleCart} className='border-1 border[#000] py-[4px] px-[14px] cursor-pointer'>View Cart</button>
                                                    <button onClick={handleCheckOut} className='border-1 border[#fff] py-[4px] px-[14px] cursor-pointer'>Cheackout</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </>
                            }

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar