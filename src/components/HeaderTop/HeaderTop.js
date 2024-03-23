import React from 'react';
import './HeaderTop.css'
import logo from '../../assets/images/logo.svg';

const HeaderTop = ({ searchTerm, setSearchTerm }) => {

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <img src={logo} alt="Logotype" className="header__logo" />
          <div className="search-box">
            <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
