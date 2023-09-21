import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLoggedIn } from '../store/actions/userActions';
import GoogleSignin from '../components/GoogleSignin';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch();

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            dispatch(userLoggedIn({
                data: formData
            }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-[#F08CAE] hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="/public/brazil.jpg" alt="Amsterdam" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#FFEAD0] w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12" style={{ fontFamily: 'Playfair Display' }}>Log in to your account</h1>
                    <form onSubmit={handleSignIn} action='' className="mt-6">
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input onChange={handleInput} type="email" name="email" id="#email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-[#F08CAE] focus:outline-none" autoFocus required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input onChange={handleInput} type="password" name="password" id="#password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-[#F08CAE] focus:outline-none" required />
                        </div>
                        <button type="submit" className="w-full block bg-[#0D1F2D] hover:bg-[#F08CAE] focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6" onClick={handleSignIn}>Sign In</button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />
                    <div className='flex justify-center'>
                        <GoogleSignin />
                    </div>
                    <p className="mt-8">Need an account? <Link to={"/signup"} className="text-[#0D1F2D] hover:text-[#F08CAE] font-semibold">Create an account</Link></p>
                </div>
            </div>
        </section>
    )
}

export default SignIn