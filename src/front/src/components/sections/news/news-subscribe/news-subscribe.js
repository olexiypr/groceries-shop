import React from 'react';
import WidthContainer from '../../../UI/width-container/container';
import styles from './news-subscribe.module.scss';
import { Heading } from '../../../UI/typography/typography';
import Button from '../../../UI/button/button';

const Subscribe = () => {
  return (
    <WidthContainer className={styles.subscribe}>
      <Heading className={styles['subscribe-heading']} textColor='white'>
        Subscribe to our Newsletter
      </Heading>
      <div className={styles['subscribe__submit']}>
        <input
          type='email'
          className={styles['subscribe__submit-input']}
          placeholder='Your Email Address'
        />
        <Button className={styles['subscribe__submit-button']}>
          Subscribe
        </Button>
      </div>
    </WidthContainer>
  );
};

export default Subscribe;
