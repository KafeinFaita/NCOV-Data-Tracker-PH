import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div id='header'>
            <h1>COVID-19 DATA TRACKER</h1>
            <ul>
                <Link to='/' className='links'>
                    <li>Local Data</li>
                </Link>

                <Link to='/global' className='links'>
                    <li>Global Data</li>
                </Link>
                
                <Link to='/about' className='links'>
                    <li>About</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;