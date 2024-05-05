import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import logo from '../../logo.svg';
import './styles.scss';
import data from './utils';

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeMenu = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>

        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item) => (
            <li key={item.to} className="navbar__container__menu__item">
              <Link
                to={item.to}
                className="navbar__container__menu__item__links"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="nav-icon"
          onClick={handleToggleIcon}
          onKeyDown={(e) => e.key === 'Enter' && handleToggleIcon()}
          role="button"
          tabIndex={0}
        >
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
