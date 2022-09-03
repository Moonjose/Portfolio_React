import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css';

function Card({ title, category, image, id }) {
  const navigate = useNavigate();
  return (
    <article
      className='card'
      onClick={() => {
        navigate(`/projects/${id}`);
      }}
    >
      <div
        className='card__img'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='card__info'>
        <span className='card__category'>{category}</span>
        <h3 className='card__title'>{title}</h3>
      </div>
    </article>
  );
}

export default Card;
