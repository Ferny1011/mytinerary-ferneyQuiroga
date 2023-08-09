import React from 'react'
import '../styles/Link.css'

const Link = ({ to, title, className }) => {
    if (title === 'Login') {
        return (
            <a className='flex items-center w-20 justify-evenly p-1 login-link' href={to}><i className="fa-solid fa-user"></i>{title}</a>
        )
    }
    return (
        <a className={className} href={to}>{title}</a>
    )
}

export default Link