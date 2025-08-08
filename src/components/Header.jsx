import React from 'react'
import Container from './Container'
import logo from "../assets/Logo.png"

const Header = () => {
  return (
    <section className='py-5'>
        <Container>
            <div className="flex items-center">
                <div className="">
                    <img className='cursor-pointer' src={logo} alt="" />
                </div>
                <div className="mx-auto">
                    <ul className='flex gap-7'>
                        <li className='font-dm'>Home</li>
                        <li className='font-dm'>Shop</li>
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