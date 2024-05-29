import React from 'react';
import styles from './product-backdrop.module.scss';

const ProductBackdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

export default ProductBackdrop;
