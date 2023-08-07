import React, { useState } from "react";
import './Navbar.css';
import styled from "styled-components";

const Logo = styled.img`
  height: 50px;
`;

const Navbar = () => {

  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)

  return (
    <div className='header'>
      <nav className='navbar'>
        {/* <Logo src="./img/logo.png" /> */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/' onClick={closeMenu}>Home</a>
          </li>
          <li className='nav-item'>
            <span className='line'></span>
            <a href='#about' onClick={closeMenu}>About</a>
          </li>
          <li className='nav-item'>
            <a href='#works' onClick={closeMenu}>Works</a>
          </li>
        </ul>
        <li className='nav-btn'>
          <a href="#contact" onClick={closeMenu}>Contact Me</a>
        </li>
      </nav>
    </div>
  )
}

export default Navbar;