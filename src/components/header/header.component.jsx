import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'

import "./header.styles.scss"

const HeaderComponent = () => {

    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
            <div>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                <Link className='option' to='/signin'>SIGN-IN</Link>
            </div>
        </div>
        </div> 
        
    )
}

export default HeaderComponent