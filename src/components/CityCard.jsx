import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({ name, country, image, id }) => {
    return (
        <div className="relative flex w-80 h-44  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-xl"></div>
            <h5 className="block text-xl font-semibold leading-snug tracking-normal text-[#FFEAD0] antialiased bg-[#0D1F2D] bg-opacity-80 rounded-md rounded-l-none pl-2 w-36 mt-5 mb-4 z-10">{name}</h5>
            <div className="px-6 mb-9 z-10">
                <p className="block italic text-base font-light leading-relaxed text-[#FFEAD0] antialiased">{country}</p>
            </div>
            <div className="p-6 pt-0 z-10">
                <Link to={`/cities/${id}`} className='select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true'>View More</Link>
            </div>
        </div>
    )
}

export default CityCard