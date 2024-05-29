import React from 'react';
import Banner from './about-banner/about-banner';
import WidthContainer from '../../UI/width-container/container';
import styles from './about-ads.module.scss';

const AboutAds = () => {
  return (
    <WidthContainer className={styles.banners}>
      <Banner
        className='banner--1'
        heading='Get Garden Fresh Fruits'
        subheading='Natural!!'
      />
      <Banner
        className='banner--2'
        heading='Get 10% off on Vegetables'
        subheading='Offer!!'
      />
    </WidthContainer>
  );
};

export default AboutAds;
