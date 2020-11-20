import React from 'react'
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import logo from '../images/logo-dark.png'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='leftside'>
                <img src={logo} alt="logo" />
            </div>
            <div className='toggler'>
                <Icon icon={menu} size={24} />
            </div>
        </div>
    )
}
