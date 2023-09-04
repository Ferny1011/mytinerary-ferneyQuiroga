import { useParams, Link } from "react-router-dom";

import { useEffect, useState, useRef } from "react";
import axios from "axios";


const CityDetails = () => {
    const { id } = useParams();
    const [city, setCity] = useState();
    const [show, setShow] = useState(false);
    const [itineraries, setItineraries] = useState();
    let arrow = useRef();
    const expand = () => {
        setShow(!show);
        if (show) {
            arrow.current.classList.remove('fa-chevron-up');
            arrow.current.classList.add('fa-chevron-down');
        } else {
            arrow.current.classList.remove('fa-chevron-down');
            arrow.current.classList.add('fa-chevron-up');
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/api/cities/${id}`)
            .then(res => setCity(res.data.city))
            .catch(err => console.log(err))

        axios.get(`http://localhost:3000/api/itineraries?cityId=${id}`)
            .then(res => setItineraries(res.data.itineraries))
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
            <div className="flex my-32 w-auto flex-col items-center">
                <h4 className="mb-10 font-bold text-2xl italic">Features</h4>
                <div className="flex w-10/12 justify-evenly">
                    <div className="relative w-80 flex-col justify-center overflow-hidden rounded-xl bg-[#F08CAE] bg-clip-border text-center text-[#FFEAD0]">
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center shadow-none">
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                        </div>
                        <div className="relative p-6 py-14 px-6 md:px-12">
                            <img className="h-64" src="/public/currency.png" alt="Currency" />
                            <h2 style={{ fontFamily: 'Playfair Display' }} className="my-3 block text-2xl text-[#FFEAD0] antialiased">
                                Currency:
                            </h2>
                            <p className="text-xl">{city?.currency}</p>
                        </div>
                    </div>
                    <div className="relative w-80 flex-col justify-center overflow-hidden rounded-xl bg-[#F08CAE] bg-clip-border text-center text-[#FFEAD0]">
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center shadow-none">
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                        </div>
                        <div className="relative p-6 py-14 px-6 md:px-12">
                            <img className="h-64" src="/public/terrestrialGlobe.png" alt="Currency" />
                            <h2 style={{ fontFamily: 'Playfair Display' }} className="my-3 block text-2xl text-[#FFEAD0] antialiased">
                                Contry:
                            </h2>
                            <p className="text-xl">{city?.country}</p>

                        </div>
                    </div>
                    <div className="relative w-80 flex-col justify-center overflow-hidden rounded-xl bg-[#F08CAE] bg-clip-border text-center text-[#FFEAD0]">
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center shadow-none">
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                        </div>
                        <div className="relative p-6 py-14 px-6 md:px-12">
                            <img className="h-64" src="/public/language.png" alt="Currency" />
                            <h2 style={{ fontFamily: 'Playfair Display' }} className="my-3 block text-2xl text-[#FFEAD0] antialiased">
                                Language:
                            </h2>
                            <p className="text-xl">{city?.language}</p>

                        </div>
                    </div>
                </div>
                <div className="flex mt-20 justify-center flex-col">
                    {
                        itineraries?.length > 0 ?
                            itineraries?.map((itinerary) => {
                                return (
                                    <div className="bg-[rgb(13,31,45)] flex flex-col items-center pb-7 pt-2 px-5 rounded-xl w-[550px] mb-28">
                                        <h3 style={{ fontFamily: 'Playfair Display' }} className="my-2 text-[#FFEAD0]">{itinerary.title}</h3>
                                        <img className="rounded-md" src={itinerary.image} alt={itinerary.title} />
                                        <div className="w-full flex justify-between mt-9 px-1 items-center h-[70px]">
                                            <div className="flex flex-col items-center">
                                                <p style={{ fontFamily: 'Fira Sans' }} className="text-[#F08CAE] mb-1">User:</p>
                                                <div className="flex items-center justify-between w-[145px]">
                                                    <img className="w-7 h-7 rounded-full" src={itinerary.user.image} alt={itinerary.user.name} />
                                                    <p className="text-[#FFEAD0]">{itinerary.user.name}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <p style={{ fontFamily: 'Fira Sans' }} className="text-[#F08CAE] mb-1">Hashtags:</p>
                                                <div className="flex justify-between text-[#FFEAD0] w-44">
                                                    {
                                                        itinerary.hashtags.map((hashtag) => {
                                                            return (
                                                                <p className="text-[#FFEAD0]">{hashtag}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <p style={{ fontFamily: 'Fira Sans' }} className="text-[#F08CAE] mb-1">Duration:</p>
                                                <p className="text-[#FFEAD0] mt-1">{itinerary.duration} hours</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <p style={{ fontFamily: 'Fira Sans' }} className="text-[#F08CAE] mb-1">Price:</p>
                                                <p className="text-[#FFEAD0] mt-1">{itinerary.price} <i class="fa-solid fa-money-bill-wave"></i></p>
                                            </div>
                                        </div>
                                        <div className="flex mt-7 w-full justify-between items-center px-1">
                                            <div className="flex items-center w-12 justify-between">
                                                <i className="fa-solid fa-heart text-[#F08CAE] text-xl cursor-pointer"></i>
                                                <p className="text-[#FFEAD0]">{itinerary.likes}</p>
                                            </div>
                                            <i ref={arrow} onClick={expand} className="fa-solid fa-chevron-down text-[#FFEAD0] text-lg cursor-pointer"></i>
                                        </div>
                                        {
                                            show ? <div className="flex flex-col items-center w-full px-1">
                                                <img className="w-auto h-72" src="/public/noItineraries.png" alt="" />
                                                <h4 className="text-[#F08CAE] text-xl">Under Construction</h4>
                                            </div> : null
                                        }

                                    </div>
                                )
                            })
                            : <h1 className='text-4xl text-[#F08CAE]'>No itineraries found</h1>
                    }
                </div>

            </div>
        </section>
    )
}

export default CityDetails;