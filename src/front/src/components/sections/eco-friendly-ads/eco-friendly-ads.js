import React from 'react';
import Banner from './eco-friendly-banner/eco-friendly-banner';
import styles from './eco-friendly-ads.module.scss';
import banner1 from '../../../img/organic-banner--1.jpg';
import banner2 from '../../../img/organic-banner--2.jpg';
import banner3 from '../../../img/organic-banner--3.jpg';

const EcoFriendlyAds = () => {
  return (
    <div className={styles.banners}>
      <Banner
        className={styles['banners--1']}
        button='Organic Juice'
        url={banner1}
      />
      <Banner
        className={styles['banners--2']}
        button='Organic Food'
        url={banner2}
      />
      <Banner
        className={styles['banners--3']}
        button='Nuts&Cookies'
        url={banner3}
      />
    </div>
  );
};

export default EcoFriendlyAds;
