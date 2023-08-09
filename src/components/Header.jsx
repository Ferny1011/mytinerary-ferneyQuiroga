import React from 'react'
import Link from './Link'
import '../styles/Header.css'

const links = [
    {title: 'Home', to: '/home'},
    {title: 'Cities', to: '/cities'},
    {title: 'Login', to: '/login'},
]   

const Header = () => {
    return (
        <header className='flex justify-between items-center px-10'>
            <div className="flex flex-row items-center">
                <img className='w-20' src="/public/logo.png" alt="Logo" />
                <h1>MyTinerary</h1>
            </div>
            <nav className='flex flex-row w-1/4 justify-evenly items-center'>
                {links.map((link, i) => <Link key={i} to={link.to} title={link.title} className={'w-20 flex justify-center hover:text-[#FFEAD0]'}/>)}
            </nav>
        </header>
    )
}

export default Header