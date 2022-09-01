import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../styles/Footer.css'; // Css

function Footer() {
  return (
    <footer className='footer'>
      <div className='socialMedia'>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 jodev.com</p>
    </footer>
  );
}

export default Footer;
