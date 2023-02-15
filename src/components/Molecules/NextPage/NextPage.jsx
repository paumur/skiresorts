import React from 'react';
import styles from './NextPage.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as resortsSelector from '../../../resorts/selectors';

const NextPage = ({ favoritesPage }) => {
  let { pageNumber, queryKey } = useParams();
  const navigate = useNavigate();
  const resortsState = useSelector(resortsSelector.resorts);

  const handlePrevPage = () => {
    if (favoritesPage) {
      navigate(`/ski-resorts/${Number(pageNumber) - 1}`, { replace: true });
    } else {
      navigate(`/results/${queryKey}/${pageNumber - 1}`, { replace: true });
    }
  };

  const handleNextPage = () => {
    if (favoritesPage) {
      navigate(`/ski-resorts/${Number(pageNumber) + 1}`, { replace: true });
    } else {
      navigate(`/results/${queryKey}/${Number(pageNumber) + 1}`, {
        replace: true,
      });
    }
  };

  return (
    <div className={[styles['next-page-container']]}>
      {pageNumber != 1 && (
        <i
          onClick={handlePrevPage}
          className='fa-solid fa-circle-chevron-left'
        ></i>
      )}
      {!favoritesPage &&
        resortsState.resortsQuery !== null &&
        resortsState.resortsQuery.length > pageNumber * 10 && (
          <i
            onClick={handleNextPage}
            className='fa-solid fa-circle-chevron-right'
          ></i>
        )}
      {favoritesPage && resortsState.favorites.length > pageNumber * 10 && (
        <i
          onClick={handleNextPage}
          className='fa-solid fa-circle-chevron-right'
        ></i>
      )}
    </div>
  );
};

export default NextPage;
