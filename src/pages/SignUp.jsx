import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userSignUp} from '../store/actions/userActions'

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: '',
        country: ''
    })

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const dispatch = useDispatch();

    const handleSignUp = async (event) => {
        event.preventDefault();
        try{
            dispatch(userSignUp({
                data: formData
            }))
        }catch(error){
            console.log(error)
        }
    }

    

    const countries = [
        { id: 1, name: 'Argentina' },
        { id: 2, name: 'Bolivia' },
        { id: 3, name: 'Brazil' },
        { id: 4, name: 'Chile' },
        { id: 5, name: 'Colombia' },
        { id: 6, name: 'Ecuador' },
        { id: 7, name: 'Peru' },
        { id: 8, name: 'Uruguay' },
        { id: 9, name: 'Venezuela' },
        { id: 10, name: 'Others' }
    ]

    return (
        <section className="flex flex-col items-center my-10" >
            <div className="bg-[#FFEAD0] w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12" style={{ fontFamily: 'Playfair Display' }}>Create an account</h1>
                    <form onSubmit={handleSignUp} className="mt-6">
                        <div>
                            <label className="block text-gray-700">First name</label>
                            <input onChange={handleInput} type="text" name="name" id="#name" placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-[#F08CAE] focus:outline-none" autoFocus required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Email Address</label>
                            <input onChange={handleInput} type="email" name="email" id="#email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-[#F08CAE] focus:outline-none" autoFocus required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input onChange={handleInput} type="password" name="password" id="#password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-[#F08CAE] focus:outline-none" required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Photo</label>
                            <input onChange={handleInput} type="url" name="photo" id="#photo" placeholder="Enter URL photo" className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-[#F08CAE] focus:outline-none" autoFocus required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Country</label>
                            <select  onChange={handleInput} className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-[#F08CAE] focus:outline-none" name="country" id="#country" required defaultValue="Argentina">
                                {
                                    countries.map(country => (
                                        <option key={country.id} value={country.name}>{country.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type="submit" className="w-full block bg-[#0D1F2D] hover:bg-[#F08CAE] focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign up</button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />
                    <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use href="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
                            <span className="ml-4">
                                Log in
                                with
                                Google</span>
                        </div>
                    </button>

                    <p className="mt-8">Already have an account? <Link to={"/signin"} className="text-[#0D1F2D] hover:text-[#F08CAE] font-semibold">Sign in</Link></p>
                </div>
            </div>
        </section>
    )
}

export default SignUp