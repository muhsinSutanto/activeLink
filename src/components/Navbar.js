import React from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.css'
import {isActiveFunc} from '../lib/isActiveFunc'

const Navbar = () => {
    return ( <nav>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
        <NavLink activeClassName='active' to='/about'>About</NavLink>
        <NavLink isActive={isActiveFunc} activeClassName='active' to='/detail'>Detail</NavLink>
    </nav> );
}
 
export default Navbar;