import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/Carousel.css'

const Carousel = () => {
    const slides = [
        {
            url: '/public/tokyo.jpg',
            city: 'Tokyo',
            country: 'Japan'
        },
        {
            url: '/public/newYork.jpg',
            city: 'New York',
            country: 'USA'
        },
        {
            url: '/public/paris.jpg',
            city: 'Paris',
            country: 'France'
        },
        {
            url: '/public/seoul.jpg',
            city: 'Seoul',
            country: 'South Korea'
        },
        {
            url: '/public/venice.jpg',
            city: 'Venice',
            country: 'Italy'
        },
        {
            url: '/public/brazil.jpg',
            city: 'Rio de Janeiro',
            country: 'Brazil'
        },
        {
            url: '/public/cartagena.jpg',
            city: 'Cartagena',
            country: 'Colombia'
        },
        {
            url: '/public/beijing.jpg',
            city: 'Beijing',
            country: 'China'
        },
        {
            url: '/public/cusco.jpg',
            city: 'Cusco',
            country: 'Peru'
        },
        {
            url: '/public/cairo.jpg',
            city: 'Cairo',
            country: 'Egypt'
        },
        {
            url: '/public/istanbul.jpg',
            city: 'Istanbul',
            country: 'Turkey'
        },
        {
            url: '/public/london.jpg',
            city: 'London',
            country: 'England'
        },
    ];

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
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="h-64 px-16 flex flex-col justify-center bg-slate-700">
            <Slider {...settings} >
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className='flex items-center'>
                            <img className='w-64 h-32 rounded ' src={slide.url} alt={slide.city} />
                            <h3 className='text-center'>{slide.city}</h3>
                            <p className='text-center'>{slide.country}</p>
                        </div>
                    )
                }
                )}
            </Slider>
        </div>
    );
}

export default Carousel