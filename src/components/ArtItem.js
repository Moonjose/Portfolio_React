import React from 'react';

function ArtItem({ name, image, url }) {
  return (
    <div
      className='projectItem'
      onClick={() => {
        window.location.href = url;
      }}
    >
      <div className='artBgImage'>
        <img src={image} alt=''></img>
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default ArtItem;
