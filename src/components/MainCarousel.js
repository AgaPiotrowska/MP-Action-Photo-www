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
                    <img src="images/main9.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main6.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main3.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main4.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main5.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main1.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main7.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main8.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main11.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main10.JPG" className="carousel-picture" alt="carousel"/>
                </div>
                <div>
                    <img src="images/main2.JPG" className="carousel-picture" alt="carousel"/>
                </div>
            </Slider>
        </div>
);
}

export default MainCarousel;