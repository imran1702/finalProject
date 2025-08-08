import React from 'react'
import Container from './Container'
import banner from "../assets/banner1.png"
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "20px",
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          borderRight: "2px #fff solid",
          color: "transparent"
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <section>
        <div className="">
            <Slider {...settings}>
            <div className="">
                <img src={banner} alt="" />
            </div>
            <div className="">
                <img src={banner} alt="" />
            </div>
            <div className="">
                <img src={banner} alt="" />
            </div>
            <div className="">
                <img src={banner} alt="" />
            </div>
            </Slider>
        </div>
    </section>
  )
}

export default Banner