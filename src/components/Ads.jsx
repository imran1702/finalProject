import React from 'react'
import Container from './Container'
import ad_1 from "../assets/Ad_1.png"
import ad_2 from "../assets/Ad_2.png"
import ad_3 from "../assets/Ad_3.png"

const Ads = () => {
  return (
    <section className='my-5'>
        <Container>
            <div className="flex justify-between">
                <div className="w-[49%]">
                    <img className='w-full' src={ad_1} alt="" />
                </div>
                <div className="w-[49%]">
                <div className="w-full mb-10">
                    <img className='w-full' src={ad_2} alt="" />
                </div>
                <div className="w-full">
                    <img className='w-full' src={ad_3} alt="" />
                </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Ads