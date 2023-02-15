import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './Resorts.module.scss';
import * as resortsSelector from '../../resorts/selectors';
import ResortCard from '../../components/Molecules/ResortCard/ResortCard';
import NextPage from '../../components/Molecules/NextPage/NextPage';

function Resorts() {
  const navigate = useNavigate();
  let { pageNumber } = useParams();

  const resortsState = useSelector(resortsSelector.resorts);

  const favoriteResorts = resortsState.resorts.filter(
    (resort) => resortsState.favorites.indexOf(resort?.SkiArea?.id) !== -1
  );

  const arrayOfCards = favoriteResorts.slice(
    pageNumber * 10 - 10,
    pageNumber * 10
  );

  return (
    <div className={[styles['resorts-page']]}>
      {resortsState.favorites.length < 1 ? (
        <h1>Upps... I think you have no resorts in favorites</h1>
      ) : (
        <div className={[styles['resorts-page']]}>
          <div className={[styles['cards-container']]}>
            {arrayOfCards.length
              ? arrayOfCards.map((resort, i) => {
                  return (
                    <ResortCard
                      key={i}
                      id={resort.SkiArea.id}
                      title={resort.SkiArea.name}
                      country={resort.Region[0].name}
                      geo_lat={resort.SkiArea.geo_lat}
                      geo_lng={resort.SkiArea.geo_lng}
                      official_website={resort.SkiArea.official_website}
                    ></ResortCard>
                  );
                })
              : navigate(`/ski-resorts/${Number(pageNumber) - 1}`, {
                  replace: true,
                })}
          </div>
          <NextPage favoritesPage={true}></NextPage>
        </div>
      )}
    </div>
  );
}

export default Resorts;
