import React from 'react'
import '../Header/Header.css';

import { BsGlobe } from 'react-icons/bs';


function Header() {
    return (
        <header className='header'>
           <h1 className='heading'><BsGlobe className='globe' />my travel journal</h1> 
        </header>
    )
}

export default Header
