import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import resorts from '../../resorts';
import styles from './Results.module.scss';
import * as resortsSelector from '../../resorts/selectors';
import ResortCard from '../../components/Molecules/ResortCard/ResortCard';
import NextPage from '../../components/Molecules/NextPage/NextPage';

function Results() {
  const dispatch = useDispatch();
  const resortsState = useSelector(resortsSelector.resorts);

  let { queryKey, pageNumber } = useParams();

  useEffect(() => {
    if (resortsState.resortsQuery === null) {
      dispatch(resorts.actions.resortsQuery(queryKey));
    }
  }, []);

  return (
    <div className={[styles['results-page']]}>
      {!resortsState?.resortsQuery?.length ? (
        <h1>Upps.. I'm sorry, we didn't find any your requested resort</h1>
      ) : (
        <>
          <div className={[styles['cards-container']]}>
            {resortsState.resortsQuery &&
              resortsState.resortsQuery
                .slice(pageNumber * 10 - 10, pageNumber * 10)
                .map((resort, i) => {
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
                })}
          </div>
          <NextPage></NextPage>
        </>
      )}
    </div>
  );
}

export default Results;
