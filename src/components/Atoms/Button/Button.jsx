import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import resorts from '../../../resorts';
import * as resortsSelector from '../../../resorts/selectors';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = (props) => {
  const { children, variant, navigateTo, handleClick, id } = props;

  const dispatch = useDispatch();
  const resortsState = useSelector(resortsSelector.resorts);

  const buttonClasses = classnames(styles.button, {
    [styles['button--search']]: variant === 'search',
    [styles['button--card']]: variant === 'card',
    [styles['button--favorite']]: variant === 'favorite',
  });
  if (navigateTo) {
    return (
      <Link to={navigateTo} className={buttonClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }
  if (variant === 'favorite') {
    return (
      <button
        className={buttonClasses}
        onClick={() => dispatch(resorts.actions.favorites(id))}
      >
        {resortsState.favorites.includes(id) ? (
          <i className='fa-solid fa-heart'></i>
        ) : (
          <i className='fa-regular fa-heart'></i>
        )}
      </button>
    );
  } else {
    return (
      <button onClick={handleClick} className={buttonClasses}>
        {children}
      </button>
    );
  }
};

export default Button;
