import React from 'react';
import logo from './../../img/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    AOS.init();
    return (

     <header className='center'>
         <img src={logo} data-aos="fade-zoom-in" data-aos-duration="2000" alt="logo"/>
     </header>

     );
}

export default Header;