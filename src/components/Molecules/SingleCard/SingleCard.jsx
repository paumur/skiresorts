import React from 'react';
import styles from './SingleCard.module.scss';
import Button from '../../Atoms/Button/Button';

const SingleCard = (props) => {
  const {
    title,
    night_skiing,
    operating_status,
    opening_year,
    latitude,
    longitude,
    ski_map,
    ski_map_published,
    temperature,
    wind_speed,
    elevation,
    id,
  } = props;
  return (
    <div className={[styles['single-card']]}>
      <div className={[styles['single-card__left']]}>
        <img
          src={`https://loremflickr.com/300/400/skiing?random=${
            Math.random() * 1000
          }`}
        />
      </div>
      <div className={[styles['single-card__right']]}>
        <h2>
          <Button id={id} variant='favorite'></Button>
          {title}
          <a
            target='_blank'
            href={`http://www.google.com/maps/place/${latitude},${longitude}`}
          >
            <i className='fa-solid fa-location-dot'></i>
          </a>
        </h2>
        {opening_year && <p>Ski resort opened in {opening_year}</p>}
        <p>Resort status: {operating_status}</p>
        <p>Has night skiing: {night_skiing}</p>
        <div className={[styles['weather-card']]}>
          <div className={[styles['weather-card__stat']]}>
            <i className='fa-solid fa-mountain-sun'></i>
            <p>{elevation} m</p>
          </div>
          <div className={[styles['weather-card__stat']]}>
            <i className='fa-solid fa-temperature-quarter'></i>
            <p>{temperature} °C</p>
          </div>
          <div className={[styles['weather-card__stat']]}>
            <i className='fa-solid fa-wind'></i>
            <p>{wind_speed} km/h</p>
          </div>
        </div>
        <button variant='card'>
          <a target='_blank' href={ski_map}>
            View {ski_map_published} resort ski map
          </a>
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
