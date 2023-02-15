import React from 'react';
import styles from './SearchField.module.scss';

export const SearchField = (props) => {
  const { setQuery, handleKeyUp } = props;

  return (
    <input
      className={[styles['search-field']]}
      placeholder='Search by Resort, State or Country'
      onChange={(e) => setQuery(e.target.value)}
      onKeyUp={handleKeyUp}
    ></input>
  );
};

export default SearchField;
