// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Css
import HomeIcon from '@mui/icons-material/Home';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav className='navbar'>
      <HashLink to='/#home'>
        <HomeIcon />
      </HashLink>
      <HashLink to='/#skills'>Skills</HashLink>
      <Link to='/projects'>Projects</Link>
    </nav>
  );
}

export default Navbar;
