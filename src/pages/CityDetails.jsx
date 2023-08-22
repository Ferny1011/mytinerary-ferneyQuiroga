import { useParams, Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";


const CityDetails = () => {
    const { id } = useParams();
    const [city, setCity] = useState();
    useEffect(() => {
        axios.get(`http://localhost:3000/api/cities/${id}`)
            .then(res => setCity(res.data.city))
            .catch(err => console.log(err))
    }, []);

    return (
        <section>
            <div>
                <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
                <div className="w-auto h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col z-10" style={{ backgroundImage: `url(${city?.image})` }}>
                    <h1 className="text-[#F08CAE] text-5xl z-10" style={{ fontFamily: 'Playfair Display' }}>{city?.name}</h1>
                    <p className="w-1/2 text-center mt-12 text-[#FFEAD0] z-10">{city?.description}</p>
                    <Link to={'/cities'} className="z-10 animate-pulse hover:animate-none mt-2"><i className="text-[#F08CAE] fa-solid fa-arrow-left text-3xl"></i></Link>
                </div>
            </div>
            <div className="flex justify-center my-32">
                <div className="bg-white flex items-center justify-center flex-col w-7/12 h-1/4 rounded-xl shadow-xl p-5">
                    <img className="w-6/12" src="/public/noItineraries.png" alt="No itineraries" />
                    <h4 className="text-[#0D1F2D] text-xl">There are no itineraries</h4>
                    <p className="italic text-[#F08CAE]">Under construction</p>
                </div>
            </div>
        </section>
    )
}

export default CityDetails;