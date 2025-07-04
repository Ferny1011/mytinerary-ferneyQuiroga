import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const CityDetails = () => {
    const { id } = useParams();
    const [city, setCity] = useState();
    const [itineraries, setItineraries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const arrow = useRef();

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
        const fetchData = async () => {
            try {
                const cityRes = await axios.get(`${API_URL}/cities/${id}`);
                setCity(cityRes.data.city);

                const itineraryRes = await axios.get(`${API_URL}/itineraries?cityId=${id}`);
                setItineraries(itineraryRes.data.itineraries);
                setLoading(false);
            } catch (err) {
                setError("Error loading city or itineraries");
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return <p className="text-white text-3xl text-center mt-10">Loading...</p>;
    if (error) return <p className="text-red-400 text-3xl text-center mt-10">{error}</p>;

    return (
        <section>
            <div>
                <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
                <div
                    className="w-auto h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col z-10"
                    style={{ backgroundImage: `url(${city?.image})` }}>
                    <h1 className="text-[#F08CAE] text-5xl z-10" style={{ fontFamily: 'Playfair Display' }}>{city?.name}</h1>
                    <p className="w-1/2 text-center mt-12 text-[#FFEAD0] z-10">{city?.description}</p>
                    <Link to={'/cities'} className="z-10 animate-pulse hover:animate-none mt-2">
                        <i className="text-[#F08CAE] fa-solid fa-arrow-left text-3xl"></i>
                    </Link>
                </div>
            </div>

            <div className="flex my-32 w-auto flex-col items-center">
                <h4 className="mb-10 font-bold text-2xl italic">Features</h4>
                <div className="flex w-10/12 justify-evenly flex-wrap gap-6">
                    <FeatureCard title="Currency" value={city?.currency} imgUrl="https://cdn-icons-png.flaticon.com/512/3410/3410380.png" />
                    <FeatureCard title="Country" value={city?.country} imgUrl="https://cdn-icons-png.flaticon.com/512/4780/4780971.png" />
                    <FeatureCard title="Language" value={city?.language} imgUrl="https://cdn-icons-png.flaticon.com/512/5903/5903452.png" />
                </div>

                <div className="flex mt-20 justify-center flex-col items-center">
                    {
                        itineraries.length > 0 ? itineraries.map((itinerary) => (
                            <div key={itinerary._id} className="bg-[rgb(13,31,45)] flex flex-col items-center pb-7 pt-2 px-5 rounded-xl w-[550px] mb-28">
                                <h3 style={{ fontFamily: 'Playfair Display' }} className="my-2 text-[#FFEAD0]">{itinerary.title}</h3>
                                <img className="rounded-md" src={itinerary.image} alt={itinerary.title} />
                                <div className="w-full flex justify-between mt-9 px-1 items-center h-[70px]">
                                    <UserCard user={itinerary.user} />
                                    <Hashtags hashtags={itinerary.hashtags} />
                                    <Info label="Duration" value={`${itinerary.duration} hours`} />
                                    <Info label="Price" value={`${itinerary.price} 💸`} />
                                </div>
                                <div className="flex mt-7 w-full justify-between items-center px-1">
                                    <div className="flex items-center w-12 justify-between">
                                        <i className="fa-solid fa-heart text-[#F08CAE] text-xl cursor-pointer"></i>
                                        <p className="text-[#FFEAD0]">{itinerary.likes}</p>
                                    </div>
                                    <i ref={arrow} onClick={expand} className="fa-solid fa-chevron-down text-[#FFEAD0] text-lg cursor-pointer"></i>
                                </div>
                                {
                                    show && (
                                        <div className="flex flex-col items-center w-full px-1 mt-5">
                                            <img className="w-auto h-72" src="https://cdn-icons-png.flaticon.com/512/1690/1690555.png" alt="Under Construction" />
                                            <h4 className="text-[#F08CAE] text-xl">Under Construction</h4>
                                        </div>
                                    )
                                }
                            </div>
                        )) : <h1 className='text-4xl text-[#F08CAE]'>No itineraries found</h1>
                    }
                </div>
            </div>
        </section>
    )
}

const FeatureCard = ({ title, value, imgUrl }) => (
    <div className="relative w-80 flex-col justify-center overflow-hidden rounded-xl bg-[#F08CAE] text-center text-[#FFEAD0]">
        <div className="relative p-6 py-14 px-6 md:px-12">
            <img className="h-64 mx-auto" src={imgUrl} alt={title} />
            <h2 style={{ fontFamily: 'Playfair Display' }} className="my-3 text-2xl">{title}:</h2>
            <p className="text-xl">{value}</p>
        </div>
    </div>
);

const UserCard = ({ user }) => (
    <div className="flex flex-col items-center">
        <p className="text-[#F08CAE] mb-1">User:</p>
        <div className="flex items-center w-[145px] justify-between">
            <img className="w-7 h-7 rounded-full" src={user?.image} alt={user?.name} />
            <p className="text-[#FFEAD0]">{user?.name}</p>
        </div>
    </div>
);

const Hashtags = ({ hashtags }) => (
    <div className="flex flex-col items-center">
        <p className="text-[#F08CAE] mb-1">Hashtags:</p>
        <div className="flex flex-wrap gap-2 text-[#FFEAD0] justify-center max-w-[160px]">
            {hashtags.map((hashtag, idx) => <span key={idx}>#{hashtag}</span>)}
        </div>
    </div>
);

const Info = ({ label, value }) => (
    <div className="flex flex-col items-center">
        <p className="text-[#F08CAE] mb-1">{label}:</p>
        <p className="text-[#FFEAD0]">{value}</p>
    </div>
);

export default CityDetails;
