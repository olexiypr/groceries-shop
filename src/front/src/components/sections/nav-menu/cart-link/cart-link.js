import React from 'react';
import { Heading } from '../../../UI/typography/typography';
import styles from './cart-link.module.scss';
import { useSelector } from 'react-redux';
import { ReactComponent as Cart } from '../../../../img/nav-menu-cart.svg';
import IconLink from '../icon-link/icon-link';
import classNames from 'classnames';

const CartLink = ({ className }) => {
  const cartCounter = useSelector((state) => state.cart.cartCounter);
  return (
    <div className={classNames(styles.cart, className)}>
      <IconLink linkTo='/cart' className={styles['cart-btn']}>
        <Cart />
        <p className={cartCounter > 0 ? styles['cart-popup'] : ''}>
          {cartCounter}
        </p>
      </IconLink>
      <Heading
        className={styles['cart-text']}
      >{`Cart (${cartCounter})`}</Heading>
    </div>
  );
};

export default CartLink;
