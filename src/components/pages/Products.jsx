import React, { useContext, useEffect, useState } from 'react'
import Container from '../Container'
import { ApiData } from '../ContextApi'
import { Link } from 'react-router-dom'
import { FaCartShopping, FaHeart, FaListUl, FaPlus } from 'react-icons/fa6'
import { IoIosGitCompare } from 'react-icons/io'
import Pagination from '../Pagination'
import { MdOutlineGridView } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'

const Products = ({category}) => {
    let data = useContext(ApiData)
    let [perPage, setPerPage] = useState(6)
    let [currentPage, setCurrentPage] = useState(1)
    let [categoryp, setCategoryp] = useState([])
    let [showFilterProducts, setShowFilterProducts] = useState([])
    let [listItem, setListItem] = useState("")

    useEffect(()=>{
        setCategoryp([...new Set(data.map((item)=>item.category))])
    },[categoryp])

    let lastPage = perPage * currentPage
    let firstPage = lastPage - perPage
    let allPage = data.slice(firstPage, lastPage)

    let pageNumber = []
    for(let i = 0; i < Math.ceil(data.length / perPage); i++){
        pageNumber.push(i)
    }

    let prev = ()=>{
        if(currentPage > 1){
            setCurrentPage((state)=> state - 1)
        }
    }
    let next = ()=>{
        if(currentPage < pageNumber.length){
            setCurrentPage((state)=> state + 1)
        }
    }
    
    
    let [showCategory, setShowCategory] = useState(false)
    let handleShowCatego = ()=>{
        setShowCategory(!showCategory)
    }

    let handlePerPageChange = (e)=>{
        setPerPage(e.target.value)
    }

    let handleShowCategoryProduct = (particularCategory)=>{
        let cateFilterProducts = data.filter((item)=>item.category == particularCategory)
        setShowFilterProducts(cateFilterProducts)
    }

    let handleListItem = ()=>{
        setListItem("active") 
    }

    let [cateFilterProShow, setCateFilterProShow] = useState([])

    useEffect(()=>{
        let filterProducts = showFilterProducts.slice(0,5)
        setCateFilterProShow(filterProducts)
    },[showFilterProducts])
    
    
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
                                    <h5 className='font-dm font-bold text-[20px] text-[#262626] cursor-pointer' onClick={handleShowCatego}>{showCategory == false ? <FaPlus></FaPlus> : <RxCross1></RxCross1> }</h5>
                                </div>
                                {showCategory &&
                                <ul className=''>
                                    <li onClick={()=>setShowFilterProducts("")} className='cursor-pointer'>All Product</li>
                                    {categoryp.map((categoryItem)=>(
                                        <li onClick={()=>handleShowCategoryProduct(categoryItem)} className='capitalize cursor-pointer'>{categoryItem}</li>
                                    ))}
                                </ul>
                                }
                            </div>
                        </div>
                        <div className="w-[74.5%]">
                            <div className="flex gap-10 justify-between my-10 items-center">
                                <div className="flex gap-3 items-start">
                                    <div className={`${listItem == "active" ? "": "bg-[#00b3ff]" } cursor-pointer text-[30px] p-2`} onClick={()=>setListItem("")}>
                                        <MdOutlineGridView></MdOutlineGridView>
                                    </div>
                                    <div className={`${listItem == "active" ? "bg-[#00b3ff]": "" } cursor-pointer text-[30px] p-2`} onClick={handleListItem}>
                                        <FaListUl></FaListUl>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <p>Sort by:</p>
                                    <select className='border-2 border-[#767676] px-4' name="" id="">
                                        <option value="Feature">Feature</option>
                                    </select>
                                </div>
                                <div className="flex gap-2">
                                    <p>Show:</p>
                                    <select onChange={handlePerPageChange} className='border-2 border-[#767676] px-4' name="" id="">
                                        <option value="6">6</option>
                                        <option value="9">9</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                {cateFilterProShow.length > 0 ? 
                                <>
                                <div className={`${listItem == "active" ? "w-full" : "flex flex-wrap gap-5"}`}>
                                    {cateFilterProShow.map((item) => (
                                    <Link to={`/products/${item.id}`}>
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
                                <div className="" onClick={()=>setCateFilterProShow("")}>
                                    <h1>Show All</h1>
                                </div>
                                </>
                                : <div className={`${listItem == "active" ? "w-full" : "flex flex-wrap gap-5"}`}>
                                    {allPage.map((item) => (
                                    <Link to={`/product/${item.id}`}>
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
                                <Pagination pageNumber={pageNumber} allPage={allPage} currentPage={currentPage} next={next} prev={prev}></Pagination>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Products