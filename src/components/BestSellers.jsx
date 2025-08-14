import React from 'react'
import Container from './Container'
import bestOne from "../assets/bestSeller_1.png"
import bestTwo from "../assets/bestSeller_2.png"
import bestThree from "../assets/bestSeller_3.png"

const BestSellers = () => {
  return (
    <section>
        <Container>
            <h2 className='font-dm font-bold text-[38px]'>Best Sellers</h2>
            <div className="flex gap-4">
                <div className="w-1/4 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] p-3">
                    <div className="">
                        <img src={bestOne} alt="" />
                    </div>
                    <div className="flex justify-between">
                        <h5>Basic Crew Neck Tee</h5>
                        <p>BDT 1280</p>
                    </div>
                    <p>Black</p>
                </div>
                <div className="w-1/4 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] p-3">
                    <div className="">
                        <img src={bestTwo} alt="" />
                    </div>
                    <div className="flex justify-between">
                        <h5>Basic Crew Neck Tee</h5>
                        <p>BDT 1280</p>
                    </div>
                    <p>Black</p>
                </div>
                <div className="w-1/4 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] p-3">
                    <div className="">
                        <img src={bestThree} alt="" />
                    </div>
                    <div className="flex justify-between">
                        <h5>Basic Crew Neck Tee</h5>
                        <p>BDT 1280</p>
                    </div>
                    <p>Black</p>
                </div>
                <div className="w-1/4 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] p-3">
                    <div className="">
                        <img src={bestOne} alt="" />
                    </div>
                    <div className="flex justify-between">
                        <h5>Basic Crew Neck Tee</h5>
                        <p>BDT 1280</p>
                    </div>
                    <p>Black</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default BestSellers