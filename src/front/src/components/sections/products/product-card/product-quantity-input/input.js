import React from 'react';
import styles from './input.module.scss';
import classNames from 'classnames';

const ProductQuantityInput = ({ inputQuantity, inputQuantityHandler }) => {
  return (
    <label className={styles['quantity']}>
      Quantity:
      <input
        type='number'
        min={0}
        max={99}
        step={1}
        value={inputQuantity || ''}
        onChange={inputQuantityHandler}
        className={classNames(styles['quantity-input'], {
          [styles['quantity-input--invalid']]: inputQuantity < 1,
        })}
      />
    </label>
  );
};

export default ProductQuantityInput;
