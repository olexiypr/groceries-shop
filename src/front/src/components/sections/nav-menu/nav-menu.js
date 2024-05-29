import React, { useState } from 'react';
import { ReactComponent as ArrDown } from '../../../img/nav-menu-arrow-down.svg';
import styles from './nav-menu.module.scss';
import LogoMain from '../../UI/main-logo/logo-main';
import WidthContainer from '../../UI/width-container/container';
import { NavLink } from 'react-router-dom';
import CartLink from './cart-link/cart-link';
import Burger from './burger-button/burger';
import Profile from './profile/profile';

const NavMenu = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  const isActiveBurgerHandler = () => {
    setIsActiveBurger(!isActiveBurger);
  };

  return (
    <nav className={styles['nav-menu']}>
      <WidthContainer className={styles['wrapper']}>
        <LogoMain />
        <div
          className={
            isActiveBurger
              ? styles['nav-menu__burger--active']
              : styles['nav-menu__burger']
          }
        >
          <div className={styles['nav-menu__links']}>
            <NavLink to='/'>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>
              Pages <ArrDown />
            </NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>News</NavLink>
          </div>
        </div>
        <div className={styles['nav-menu__controls']}>
          <Burger
            isActive={isActiveBurger}
            isActiveHandler={isActiveBurgerHandler}
          />
          <CartLink className={styles['nav-menu__controls-btn']} />
          <Profile className={styles['nav-menu__profile']} />
        </div>
      </WidthContainer>
    </nav>
  );
};

export default NavMenu;
