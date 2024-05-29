import React from 'react';
import styles from './product-image.module.scss';
import classNames from 'classnames';

const ProductImg = ({ product, className }) => {
  return (
    <img
      src={product.image}
      alt={product.name}
      className={classNames(styles.img, className)}
    />
  );
};

export default ProductImg;
