import React from 'react';
import styles from './Home.module.scss';
import SearchBar from '../../src/components/Molecules/SearchBar/SearchBar';
import Button from '../../src/components/Atoms/Button/Button';

export const Home = () => {
  return (
    <div className={[styles['home-page']]}>
      <h1 className={styles.title}>
        Confidence on the Slopes, Know Before You Go. Accurate Weather for Your
        Ski Adventure
      </h1>
      <SearchBar />
      <h2>Or...</h2>
      <Button navigateTo='/ski-resorts/1'>My Favorite Ski Resorts</Button>
    </div>
  );
};

export default Home;
