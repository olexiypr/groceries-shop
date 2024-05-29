import React from 'react';
import Banner from '../page-banner';
import styles from './success-banner.module.scss';

const SuccessBanner = () => {
  return (
    <Banner
      heading='Thank you for your order'
      className={styles['success__banner']}
      headingClassName={styles['success__banner-heading']}
    ></Banner>
  );
};

export default SuccessBanner;
