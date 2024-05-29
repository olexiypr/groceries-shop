import React from 'react';
import Button from '../../../UI/button/button';
import styles from './product-card.module.scss';
import { Heading } from '../../../UI/typography/typography';
import { ReactComponent as Rating } from '../../../../img/5-stars.svg';
import ProductPrice from './product-price/product-price';
import ProductImg from './product-image/product-image';

const ProductCard = ({
  product,
  onOpenModal,
}) => {

  return (
    <div className={styles.product} onClick={onOpenModal}>
      <Button className={styles['product-tag']}>{product.type}</Button>
      <ProductImg
        product={product}
        className={styles['product-img']}
      />
      <div className={styles['product__description']}>
        <Heading className={styles['product__description-heading']}>
          {product.name}
        </Heading>
        <hr className={styles['product__description-separator']} />
        <p className={styles['product__description__parameters']}>
          <ProductPrice product={product} />
          <Rating className={styles['rate']} />
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
