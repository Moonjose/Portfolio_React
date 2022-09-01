// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css'; // Css

import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
  // const [expandNavbar, setExpandNavbar] = useState(false);
  // const [navbar, setNavbar] = useState(false);

  // const location = useLocation();

  // useEffect(() => {
  //   setExpandNavbar(false);
  // }, [location]);

  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // window.addEventListener('scroll', changeBackground);

  return (
    <nav className='navbar'>
      <Link to='/'>
        <HomeIcon />
      </Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/experience'>Journey</Link>
    </nav>
  );
}

export default Navbar;
