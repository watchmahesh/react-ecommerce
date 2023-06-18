/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <>
            <div className="slider-with-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="slider-area">
                            <Slider {...settings}>

                                <div className="slider-active owl-carousel">
                                    <div className="single-slide align-center-left  animation-style-01 bg-1">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                                            <h2>Chamcham Galaxy S9 | S9+</h2>
                                            <h3>Starting at <span>$1209.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-slide align-center-left animation-style-02 bg-2">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                            <h2>Work Desk Surface Studio 2018</h2>
                                            <h3>Starting at <span>$824.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-slide align-center-left animation-style-01 bg-3">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                                            <h2>Phantom 4 Pro+ Obsidian</h2>
                                            <h3>Starting at <span>$1849.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Slider>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                            <div className="li-banner">
                                <a href="#">
                                    <img src="/images/banner/1_1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
                                <a href="#">
                                    <img src="/images/banner/1_2.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner