import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/Carousel.css'

const Carousel = () => {

    const [cities, setCities] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/api/cities?name=')
            .then(res => setCities(res.data.cities))
            .catch(err => console.log(err))
    }, []);


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="h-64 px-16 flex flex-col justify-center bg-slate-700">
            <Slider {...settings} >
                {cities?.map((city, index) => {
                    return (
                        <div key={index} className='flex items-center'>
                            <img className='w-64 h-32 rounded shadow-md shadow-[#F08CAE]' src={city.image} alt={city.name} />
                            <h3 className="text-center mt-3 text-[#FFEAD0] city-title">{city.name}</h3>
                            <p className='text-center text-[#F08CAE]'>{city.country}</p>
                        </div>
                    )
                }
                )}
            </Slider>
        </div>
    );
}

export default Carousel