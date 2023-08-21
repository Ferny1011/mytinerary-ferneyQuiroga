import React from 'react'
import CityCard from '../components/CityCard'
const Cities = () => {
    return (
        <section>
            <div className="relative text-center">
                <img className='w-full h-52 object-cover brightness-50' src="/public/heroCities.jpg" alt="" />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-[#FFEAD0] text-5xl' style={{ fontFamily: 'Playfair Display' }} >Cities</h1>
                    <h4 className='text-2xl text-[#F08CAE] italic'>Choose choose your next memory</h4>
                </div>
            </div>
            <div className='flex justify-center my-16 items-center'>
                <input className='w-2/4 p-2 rounded-lg focus:outline-[#F08CAE]' type="text" placeholder='Search your city...' />
            </div>
            <div className='flex flex-wrap justify-center gap-5 mb-16'>
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
            </div>
        </section>
    )
}

export default Cities