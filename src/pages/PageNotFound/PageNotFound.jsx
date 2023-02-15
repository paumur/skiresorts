import React from 'react';
import styles from './PageNotFound.module.scss';
import Button from '../../components/Atoms/Button/Button';

const PageNotFound = () => {
  return (
    <div className={[styles['page-not-found']]}>
      <h1>We are sorry, this page was not found</h1>
      <Button navigateTo='/'>Visit Home page</Button>
    </div>
  );
};

export default PageNotFound;
