import React from 'react';
import styles from './about-card.module.scss';
import { Heading, Paragraph } from '../../../UI/typography/typography';
import classNames from 'classnames';

const AboutCard = ({ img, heading, paragraph, disableImg }) => {
  return (
    <div className={styles.card}>
      <div
        className={classNames(styles['card__img'], {
          [styles['card__img--disabled']]: disableImg,
        })}
      >
        <img src={img} alt='' />
      </div>
      <div className={styles['card__desc']}>
        <Heading className={styles['card__desc-heading']}>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
      </div>
    </div>
  );
};

export default AboutCard;
