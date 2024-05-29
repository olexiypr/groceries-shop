import React from 'react';
import Order from '../../components/sections/order-confirmation/order-confirmation';
import CartBanner from '../../components/UI/banners/cart-banner/cart-banner';

const CartBody = () => {
  return (
    <>
      <CartBanner />
      <Order />
    </>
  );
};

export default CartBody;
