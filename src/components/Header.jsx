import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLoggedOut } from '../store/actions/userActions'

const Header = () => {

    const dispatch = useDispatch()
    const user = useSelector((store) => store.userReducer.user)
    const [openProfile, setOpenProfile] = useState(false)

    const handleSignOut = () => {
        dispatch(userLoggedOut())
    }


    const links = [
        { title: 'Home', to: '/' },
        { title: 'Cities', to: '/cities' },
        { title: 'Sign In', to: '/signin' },
    ]

    return (
        <header className='flex justify-between items-center px-10'>
            <div className="flex flex-row items-center">
                <img className='w-20' src="/public/logo.png" alt="Logo" />
                <h1>MyTinerary</h1>
            </div>
            <nav className='flex flex-row w-1/4 justify-evenly items-center'>
                {links.map((link, i) => {
                    if (!user) {
                        return <Link key={i} to={link.to} className={'w-20 flex justify-center hover:text-[#FFEAD0]'}>{link.title}</Link>
                    }
                    else {
                        if (link.title === 'Sign In') {
                            return <div key={i} className='flex flex-row items-center justify-center cursor-pointer' onClick={() => setOpenProfile(!openProfile)}>
                                <img className='w-10 h-10 rounded-full' src={user.photo} alt="profile" />
                                <i className="fa-solid fa-caret-down ml-2"></i>
                            </div>
                        }
                        else {
                            return <Link key={i} to={link.to} className={'w-20 flex justify-center hover:text-[#FFEAD0]'}>{link.title}</Link>
                        }
                    }
                })
                }
                {
                    openProfile && (<div className='flex flex-col dropDownProfile'>
                        <ul className='flex flex-col gap-4'>
                            <li className='border-b-2 border-[#F08CAE]'>Hi, {user.name}!</li>
                            <li>Settings</li>
                            <li onClick={handleSignOut}>Logout</li>
                        </ul>
                    </div>)
                }
            </nav>
        </header>
    )
}

export default Header