import React from 'react';
import './styles/Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from './RandomSpace/RandomSpace';

const Title = () => {
  return (
    <div className='Title'>
      <h1>Richmond BC Public Heritage Sites</h1>
      <div className='navbar'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
          to='/'
        >
          List
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link-active' : 'nav-link'
          }
          to='/about'
        >
          About
        </NavLink>
        <RandomSpace />
      </div>
    </div>
  );
};

export default Title;
