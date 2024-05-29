import React from 'react';
import styles from './burger.module.scss';
import classNames from 'classnames';

const Burger = ({ isActive, isActiveHandler }) => {
  isActive
    ? document.body.classList.add('no-scroll')
    : document.body.classList.remove('no-scroll');
  return (
    <button
      className={classNames(styles['burger'], {
        [styles['burger--active']]: isActive,
      })}
      onClick={isActiveHandler}
    >
      <span></span>
    </button>
  );
};

export default Burger;
