import React, { useState } from 'react';
import styles from './order-element.module.scss';
import { Heading } from '../../../UI/typography/typography';
import ProductQuantityInput from '../../products/product-card/product-quantity-input/input';
import Button from '../../../UI/button/button';
import ProductPrice from '../../products/product-card/product-price/product-price';
import { useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  setCartItemQuantity,
} from '../../../../redux/cartSlice';
import ProductImg from '../../products/product-card/product-image/product-image';

const OrderElement = ({ product }) => {
  const dispatch = useDispatch();
  const [inputQuantity, setInputQuantity] = useState(product.quantity || '');

  const inputQuantityHandler = (e) => {
    setInputQuantity(+e.target.value);
    dispatch(setCartItemQuantity({ quantity: +e.target.value, id: product.id }));
  };

  const removeFromCartHandler = (e) => {
    e.preventDefault();
    dispatch(removeItemFromCart({ id: product.id, quantity: product.quantity }));
  };

  return (
    <div className={styles['product']}>
      <ProductImg
        product={product}
        className={styles['product-img']}
      />
      <div className={styles['product-wrapper']}>
        <Heading className={styles['product-name']}>{product.name}</Heading>
        <ProductPrice
          className={styles['product-price']}
          product={product}
        />
      </div>
      <ProductQuantityInput
        inputQuantity={inputQuantity}
        inputQuantityHandler={inputQuantityHandler}
      />
      <Button
        className={styles['product-remove']}
        onClick={removeFromCartHandler}
      >
        X
      </Button>
    </div>
  );
};

export default OrderElement;
