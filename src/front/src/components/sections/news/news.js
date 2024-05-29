import React from 'react';
import Button from '../../UI/button/button';
import { Heading, Subheading } from '../../UI/typography/typography';
import WidthContainer from '../../UI/width-container/container';
import NewsCard from './news-card/news-card';
import Subscribe from './news-subscribe/news-subscribe';
import styles from './news.module.scss';

const News = () => {
  return (
    <div className={styles.news}>
      <WidthContainer className={styles['news__header']}>
        <div className={styles['news__header__wrapper']}>
          <Subheading className={styles['news__header-subheading']}>
            News
          </Subheading>
          <Heading className={styles['news__header-heading']}>
            Discover weekly content about organic food, & more
          </Heading>
        </div>
        <Button white showArrow className={styles['news__header-button']}>
          More News
        </Button>
      </WidthContainer>
      <WidthContainer className={styles['news__banners']}>
        <NewsCard
          className={styles['news__banners--1']}
          heading='The Benefits of Vitamin D & How to Get It'
          paragraph='Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        />
        <NewsCard
          className={styles['news__banners--2']}
          heading='Our Favourite Summertime Tommeto'
          paragraph='Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        />
      </WidthContainer>
      <Subscribe></Subscribe>
    </div>
  );
};

export default News;
