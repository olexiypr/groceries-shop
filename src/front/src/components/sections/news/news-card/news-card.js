import React from 'react';
import styles from './news-card.module.scss';
import { ReactComponent as PersonIcon } from '../../../../img/person.svg';
import { Heading, Paragraph } from '../../../UI/typography/typography';
import Button from '../../../UI/button/button';
import classNames from 'classnames';

const NewsCard = ({ className, heading, paragraph }) => {
  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles['card-date']}>
        25
        <br /> Nov
      </div>
      <div className={styles['card__content']}>
        <div className={styles['card__content__person']}>
          <PersonIcon />
          <p className={styles['card__content__person-name']}>By Rachi Card</p>
        </div>
        <Heading className={styles['card__content-heading']}>{heading}</Heading>
        <Paragraph className={styles['card__content-paragraph']}>
          {paragraph}
        </Paragraph>
        <Button yellow showArrow className={styles['card__content-button']}>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
