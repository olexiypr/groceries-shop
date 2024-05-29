import React from 'react';
import Banner from '../page-banner';
import styles from './cart-banner.module.scss';
import { ReactComponent as CartDecore } from '../../../../img/decors/cart-group.svg';

const CartBanner = () => {
  return (
    <Banner heading='Cart' className={styles['cart__banner']}>
      <CartDecore className={styles['cart__banner-decores']} />
    </Banner>
  );
};

export default CartBanner;
