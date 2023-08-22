import React, { useEffect, useState } from 'react'
import CityCard from '../components/CityCard'
import axios from 'axios'

const Cities = () => {
    const [cities, setCities] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/api/cities?name=')
            .then(res => setCities(res.data.cities))
            .catch(err => console.log(err))
    }, []);

    const handleInputChange = async (e) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/cities?name=${e.target.value}`);
            setCities(response.data.cities);
        } catch (error) {
            console.log(error)
            setCities(null)
        }
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
                <input onChange={handleInputChange} className='w-2/4 p-2 rounded-lg focus:outline-[#F08CAE]' type="text" placeholder='Search your city...' />
            </div>
            <div className='flex flex-wrap justify-center gap-5 mb-16'>
                {cities?.length !=null ? cities?.map(city => <CityCard key={city._id} id={city._id} name={city.name} country={city.country} image={city.image} />) : <h1 className='text-4xl text-[#F08CAE]'>No cities found</h1>}
            </div>
        </section>
    )
}

export default Cities