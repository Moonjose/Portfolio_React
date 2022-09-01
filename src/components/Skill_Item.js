import React from 'react';

function Skill({ title, info, image }) {
  return (
    <div className='skillcard'>
      <div className='icon'>
        <img src={image} alt='img'></img>
      </div>

      <div className='content'>
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default Skill;
