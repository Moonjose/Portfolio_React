import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/Button.css';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          className='btn'
          style={{
            bottom: '50px',
            right: '50px',
          }}
          onClick={scrollUp}
        >
          <ArrowCircleUpIcon />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
