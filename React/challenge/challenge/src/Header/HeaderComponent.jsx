import React from 'react';
import './HeaderComponent.css';
import search from '../img/Group 2.svg'
import profile from '../img/Union.svg';

const HeaderComponent = () => {
  return (
    <><div className='header'>
      <h1 className='logo'>LOGO</h1>

      <div className="search-container">
        <input type="text" />
        <button>
          <img src={search} alt="Search Icon" />
        </button>
      </div>
      <div className='content'>
        <span>Dashboard</span>
        <span>Pricing</span>
        <span>Features</span>
        <span>About</span>
        <img src={profile}></img>
      </div>
    </div><h1 className='welcome'>Welcome</h1></>
  );
};

export default HeaderComponent;
