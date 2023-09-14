import React, { useEffect, useRef } from 'react'
import CityCard from '../components/CityCard'
import { useDispatch, useSelector } from 'react-redux'
import { filter_cities, get_cities } from '../store/actions/cityActions'


const Cities = () => {


    const cities = useSelector((store) => store.cityReducer.cities);

    const dispatch = useDispatch();

    let inputSearch = useRef();

    useEffect(() => {
        dispatch(get_cities());
    }, []);

    const handleSearch = () => {
        dispatch(filter_cities({
            name: inputSearch.current.value
        }))
    }

    return (
        <section>
            <div className="relative text-center">
                <img className='w-full h-52 object-cover brightness-50' src="/public/heroCities.jpg" alt="" />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-[#FFEAD0] text-5xl' style={{ fontFamily: 'Playfair Display' }} >Cities</h1>
                    <h4 className='text-2xl text-[#F08CAE] italic'>Choose your next memory</h4>
                </div>
            </div>
            <div className='flex justify-center my-16 items-center'>
                <input ref={inputSearch} className='w-2/4 p-2 rounded-lg focus:outline-[#F08CAE]' type="text" placeholder='Search your city...' />
                <button onClick={handleSearch} type="submit" className="flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-[#FFEAD0] bg-[#F08CAE] rounded-lg border hover:bg-[#0D1F2D]">
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
            <div className='flex flex-wrap justify-center gap-5 mb-16'>
                {
                    cities?.length > 0 ?
                        cities?.map((city) => {
                            return (
                                <CityCard key={city._id} id={city._id} name={city.name} country={city.country} image={city.image} />
                            )
                        })
                        : <h1 className='text-4xl text-[#F08CAE]'>No cities found</h1>}
            </div>
        </section>
    )
}

export default Cities