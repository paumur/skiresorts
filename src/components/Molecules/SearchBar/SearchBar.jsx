import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import resorts from '../../../resorts';
import styles from './SearchBar.module.scss';
import SearchField from '../../Atoms/SearchField/SearchField';
import Button from '../../Atoms/Button/Button';
import SearchIcon from '../../../assets/SearchIcon';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [query, setQuery] = useState(null);

  const handleClick = () => {
    dispatch(resorts.actions.resortsQuery(query));
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      dispatch(resorts.actions.resortsQuery(query));
      navigate(`/results/${query}/1`);
    }
  };

  return (
    <div className={[styles['search-bar']]}>
      <SearchField setQuery={setQuery} handleKeyUp={handleKeyUp} />
      <Button
        variant='search'
        navigateTo={`/results/${query}/1`}
        handleClick={handleClick}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchBar;
