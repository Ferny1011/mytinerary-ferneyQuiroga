import React from 'react'
import '../styles/Hero.css'

function Hero() {
    return (
        <div className='flex justify-around m-20 hero'>
            <div className="left-hero flex flex-col justify-center gap-3">
                <h1 className='z-10'>MyTinerary</h1>
                <p className='z-10'>Find your perfect trip, designed by insiders who know and love their cities!</p>
                <a className='z-10 animate-bounce-slow bg-pink-300 w-80 text-center rounded-md p-2 hover:bg-[#0D1F2D] text-[#FFEAD0] hover:animate-none' href="../pages/cities">View more</a>
            </div>
            <div className="right-hero">
                <img className='h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 brightness-75' src="/public/happyPlane.jpg" alt="" />
            </div>
        </div>
    )
}

export default Hero