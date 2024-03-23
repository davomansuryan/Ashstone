import React, { useState, useEffect } from 'react';
import './HeaderNav.css';
import arrow from '../../assets/images/arrow.svg';
import burgerMenu from '../../assets/images/burgerMenu.svg';
import closeCross from '../../assets/images/closeCross.svg';
import logo from '../../assets/images/logo.svg';

const HeaderNav = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth > 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setShouldHideHeader(true);
        } else {
          setShouldHideHeader(false);
        }
      }
      setLastScrollY(currentScrollY); 
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
      <nav className={`header__nav ${shouldHideHeader ? 'hidden' : ''}`} >
        <div className="burger-menu" onClick={toggleMenu}>
          <img src={burgerMenu} alt="arrow" />
        </div>
        
        <ul className={`header__nav-list ${isMenuOpen ? 'active' : ''}`}>
          {isMenuOpen && <div className="overlay" onClick={toggleMenu}>
            <img src={logo} alt="Logotype" className="burger-menu__logo" />
            <img src={closeCross} alt="arrow" />
          </div>}
          <li className="menu-item">
            Demos
            <img src={arrow} alt="arrow" />
            <ul className="dropdown">
              <li>item 1 <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item 2 <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item 3 <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item 4 <img src={arrow} alt="arrow" className="arrow" /></li>
            </ul>
          </li>
          <li className="menu-item">
            Post
            <img src={arrow} alt="arrow" className="arrow" />
            <ul className="dropdown">
              <li>Post Header <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>Post Layout <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>Share Buttons <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>Gallery Post <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>Video Post <img src={arrow} alt="arrow" className="arrow" /></li>
            </ul>
          </li>
          <li className="menu-item">
            Features
            <img src={arrow} alt="arrow" className="arrow" />
            <ul className="dropdown">
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
            </ul>
          </li>
          <li className="menu-item">
            Categories
            <img src={arrow} alt="arrow" className="arrow" />
            <ul className="dropdown">
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
            </ul>
          </li>
          <li className="menu-item">
            Shop
            <img src={arrow} alt="arrow" className="arrow" />
            <ul className="dropdown">
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
              <li>item <img src={arrow} alt="arrow" className="arrow" /></li>
            </ul>
          </li>
          <li className="menu-item">Buy Now</li>
        </ul>
      </nav>
    
  );
}

export default HeaderNav;