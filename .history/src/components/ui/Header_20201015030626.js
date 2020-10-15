import React from 'react';
import logo from './../../img/logo.png';
import AOS from 'aos';
const Header = () => {
    AOS.init();
    return (

     <header data-aos="fade-down-left" className='center'>
         <img src={logo} alt="logo"/>
     </header>

     );
}

export default Header;