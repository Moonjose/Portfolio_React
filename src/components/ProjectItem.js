import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <article
      className='projectItem'
      onClick={() => {
        navigate(`/projects/${id}`);
      }}
    >
      <div className='bgImage'>
        <img src={image} alt=''></img>
      </div>
      <h2>{name}</h2>
    </article>
  );
}

export default ProjectItem;
