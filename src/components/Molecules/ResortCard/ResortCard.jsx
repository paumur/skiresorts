import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResortCard.module.scss';
import Button from '../../Atoms/Button/Button';

function ResortCard(props) {
  const navigate = useNavigate();
  const { title, country, geo_lat, geo_lng, official_website, id } = props;

  const handleClick = () => {
    navigate(`/resort/${id}`);
  };

  return (
    <div className={[styles['resort-card']]}>
      <img
        src={`https://loremflickr.com/300/200/skiing?random=${
          Math.random() * 1000
        }`}
      />
      <h3 className={[styles['resort-card__title']]}>
        <Button id={id} variant='favorite'></Button>
        {title}
        <a
          target='_blank'
          href={`http://www.google.com/maps/place/${geo_lat},${geo_lng}`}
        >
          <i className='fa-solid fa-location-dot'></i>
        </a>
      </h3>
      <p className={[styles['resort-card__country']]}>{country}</p>
      <Button variant='card'>
        <a target='_blank' href={official_website}>
          Official Website
        </a>
      </Button>
      <Button variant='card' handleClick={handleClick}>
        More information
      </Button>
    </div>
  );
}

export default ResortCard;
