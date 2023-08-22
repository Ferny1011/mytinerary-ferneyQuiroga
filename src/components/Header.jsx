import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const links = [
    { title: 'Home', to: '/' },
    { title: 'Cities', to: '/cities' },
    { title: 'Login', to: '/login' },
]

const Header = () => {
    return (
        <header className='flex justify-between items-center px-10'>
            <div className="flex flex-row items-center">
                <img className='w-20' src="/public/logo.png" alt="Logo" />
                <h1>MyTinerary</h1>
            </div>
            <nav className='flex flex-row w-1/4 justify-evenly items-center'>
                {links.map((link, i) => {
                    if (link.title === 'Login') {
                        return <Link key={i} to={link.to} className={'w-20 flex items-center justify-center hover:text-[#FFEAD0]'}><i className="fa-solid fa-user mr-2"></i>{link.title}</Link>
                    } else {
                        return <Link key={i} to={link.to} className={'w-20 flex justify-center hover:text-[#FFEAD0]'}>{link.title}</Link>
                    }
                })
                }
            </nav>
        </header>
    )
}

export default Header