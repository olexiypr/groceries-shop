import React from 'react';
import styles from './benefit-card.module.scss';
import { Heading, Paragraph } from '../../../UI/typography/typography';

const BenefitCard = ({ heading, paragraph }) => {
  return (
    <div className={styles['benefits__card']}>
      <Heading className={styles['benefits__card-value']}>{heading}</Heading>
      <Paragraph className={styles['benefits__card-paragraph']}>
        {paragraph}
      </Paragraph>
    </div>
  );
};

export default BenefitCard;
