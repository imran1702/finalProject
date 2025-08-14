import React from 'react'
import Container from './Container'
import logo from "../assets/Logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='py-5'>
        <Container>
            <div className="flex items-center">
                <div className="">
                    <Link to="/">
                        <img className='cursor-pointer' src={logo} alt="" />
                    </Link>
                </div>
                <div className="mx-auto">
                    <ul className='flex gap-7'>
                        <Link to="/">
                            <li className='font-dm'>Home</li>
                        </Link>
                        <Link to="/products">
                            <li className='font-dm'>Shop</li>
                        </Link>
                        <li className='font-dm'>About</li>
                        <li className='font-dm'>Contact</li>
                        <li className='font-dm'>Journal</li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Header