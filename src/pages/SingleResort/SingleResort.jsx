import React, { useEffect, useState } from 'react';
import styles from './SingleResort.module.scss';
import { useParams } from 'react-router-dom';
import SingleCard from '../../components/Molecules/SingleCard/SingleCard';

const SingleResort = () => {
  let { id } = useParams();
  const [resort, setResort] = useState({});
  const [weather, setWeather] = useState({});

  const resortUrl = `https://skimap.org/SkiAreas/view/${id}.json`;

  useEffect(() => {
    fetch(resortUrl)
      .then((result) => result.json())
      .then((output) => {
        setResort(output);
        return fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${output.latitude}&longitude=${output.longitude}&current_weather=true`
        );
      })
      .then((response) => response.json())
      .then((response) => setWeather(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={[styles['single-resort-page']]}>
      <SingleCard
        title={resort.name}
        night_skiing={resort.night_skiing}
        operating_status={resort.operating_status}
        opening_year={resort.opening_year}
        latitude={resort.latitude}
        longitude={resort.longitude}
        ski_map={resort.ski_maps?.[0]?.media?.original?.url}
        ski_map_published={resort.ski_maps?.[0]?.metadata?.year_published}
        temperature={weather?.current_weather?.temperature}
        wind_speed={weather?.current_weather?.windspeed}
        elevation={weather?.elevation}
        id={id}
      ></SingleCard>
    </div>
  );
};

export default SingleResort;
