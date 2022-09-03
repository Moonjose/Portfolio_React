import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../styles/Footer.css'; // Css
import NavbarLinkButton from './NavbarLinkButton';

function Footer() {
  return (
    <footer className='footer'>
      <div className='socialMedia'>
        <NavbarLinkButton url={'https://github.com/Moonjose'}>
          <GitHubIcon />
        </NavbarLinkButton>
        <NavbarLinkButton url={'https://linkedin.com/in/jodvs'}>
          <LinkedInIcon />
        </NavbarLinkButton>
        <NavbarLinkButton url={'https://www.instagram.com/jarl.art_/'}>
          <InstagramIcon />
        </NavbarLinkButton>
      </div>
      <p> &copy; 2022 Jose Antonio</p>
    </footer>
  );
}

export default Footer;
