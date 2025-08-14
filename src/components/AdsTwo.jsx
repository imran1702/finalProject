import React from 'react'
import adBan from "../assets/Ads_2.png"
import Container from './Container'

const AdsTwo = () => {
  return (
    <section className='py-5'>
        <Container>
            <div className="">
                <img src={adBan} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default AdsTwo