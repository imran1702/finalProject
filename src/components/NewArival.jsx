import React, { useContext, useEffect } from 'react'
import img from "../assets/Image.png"
import Container from './Container'
import Slider from 'react-slick/lib/slider';
import { FaAngleLeft, FaAngleRight, FaCartShopping, FaHeart } from 'react-icons/fa6';
import { IoIosGitCompare } from 'react-icons/io';
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';

const NewArival = () => {

    let data = useContext(ApiData)
    

    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[50%] right-5 translate-y-[-50%] bg-[#c4c0c0] p-5 rounded-full cursor-pointer"
      onClick={onClick}
    >
        <FaAngleRight></FaAngleRight>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[50%] left-5 translate-y-[-50%] bg-[#c4c0c0] p-5 rounded-full cursor-pointer z-[1]"
      onClick={onClick}
    >
        <FaAngleLeft></FaAngleLeft>
    </div>
  );
}

    var settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <section className='py-4'>
            <Container>
                <div className="font-dm font-bold text-[38px]">
                    <h2>New Arivals</h2>
                </div>
                <div className="">
                    <Slider {...settings}>
                        {data.map((item)=>(
                            <Link to="/products">
                        <div className="shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] mx-3 px-3">
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
                                    <h3>{item.title}</h3>
                                    <strong>{item.price}BDT</strong>
                                </div>
                                <span>{item.brand}</span>
                        </div>
                        </Link>
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default NewArival