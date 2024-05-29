import React from 'react';
import styles from './product-price.module.scss';
import classNames from 'classnames';

const ProductPrice = ({ product, className }) => {
  return (
    <span className={classNames(styles.price, className)}>
      {product?.discount > 0 && <span className={classNames(styles.discount, className)}>
        ${product?.price.toFixed(2)}
      </span>}
      ${(product?.price - (product?.discount || 0)).toFixed(2)}
    </span>
  );
};

export default ProductPrice;
