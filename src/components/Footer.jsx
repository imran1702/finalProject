import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import logo from "../assets/Logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { ApiData } from './ContextApi'

const Footer = () => {
  let data = useContext(ApiData)
  let [footCaegory, setFootCategory] = useState()

  useEffect(()=>{
    setFootCategory([...new Set(data.map((cateItem)=>cateItem.category))])
  },[data])
  
  return (
    <section className='bg-[#f5f5f3] py-15'>
        <Container>
          <div className="">
            <div className="flex gap-30">
              <div className="flex gap-40">
                <ul className='font-dm leading-[40px]'>
                  <li className='font-bold text-[#262626] text-[16px]'>MENU</li>
                  <Link to="/">
                    <li className='text-[#6d6d6d] font-regular text-[14px]'>Home</li>
                  </Link>
                  <Link to="/products">
                    <li className='text-[#6d6d6d] font-regular text-[14px]'>Shop</li>
                  </Link>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>About</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Contact</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Journal</li>
                </ul>
                <ul className='font-dm leading-[40px]'>
                  <li className='font-bold text-[#262626] text-[16px]'>SHOP</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Category 1</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Category 2</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Category 3</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Category 4</li>
                </ul>
                <ul className='font-dm leading-[40px]'>
                  <li className='font-bold text-[#262626] text-[16px]'>HELP</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Privacy Policy</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Terms & Conditions</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Special E-shop</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Shipping</li>
                  <li className='text-[#6d6d6d] font-regular text-[14px]'>Secure Payments</li>
                </ul>
              </div>
              <div className="flex gap-30">
                <div className="">
                  <p>+880162-6681923</p>
                  <p>arfozian@gmail.com</p>
                  <p>Lalbagh-Dhaka-Bangladesh-1211</p>
                </div>
                <div className="">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-5">
                <Link to="https://www.facebook.com/akash11.ahmed.5/" target='blank'>
                  <FaFacebookF></FaFacebookF>
                </Link>
                <FaLinkedinIn></FaLinkedinIn>
                <Link to="https://www.instagram.com/imran_akash_/" target='blank'>
                  <FaInstagram></FaInstagram>
                </Link>
              </div>
              <div className="">
                <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
              </div>
            </div>
          </div>
        </Container>
    </section>
  )
}

export default Footer