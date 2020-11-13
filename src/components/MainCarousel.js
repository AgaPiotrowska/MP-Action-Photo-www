import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MainCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src="images/main2.jpg" className="carousel-picture"/>
                </div>
                <div>
                    <img src="images/main6.jpg" className="carousel-picture"/>
                </div>
                <div>
                    <img src="images/main3.jpg" className="carousel-picture"/>
                </div>
                <div>
                    <img src="images/main4.jpg" className="carousel-picture"/>
                </div>
                <div>
                    <img src="images/main5.jpg" className="carousel-picture"/>
                </div>
                <div>
                    <img src="images/main1.jpg" className="carousel-picture"/>
                </div>
                <div>
                    <img src="images/main7.jpg" className="carousel-picture"/>
                </div>
                <div>
                    <img src="images/main8.jpg" className="carousel-picture"/>
                </div>
                <div>
                    <img src="images/main9.jpg" className="carousel-picture"/>
                </div>
                <div>
                    <img src="images/main10.jpg" className="carousel-picture"/>
                </div>
            </Slider>
        </div>
);
}

export default MainCarousel;