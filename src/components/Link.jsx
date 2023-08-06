import React from 'react'
import '../styles/Link.css'

const Link = ({ to, title }) => {
    if (title === 'Login') {
        return (
            <a className='flex items-center w-20 justify-evenly p-1 login-link' href={to}><i className="fa-solid fa-user"></i>{title}</a>
        )
    }
    return (
        <a className='w-20 flex justify-center' href={to}>{title}</a>
    )
}

export default Link