import React from 'react';
import WidthContainer from '../../../UI/width-container/container';
import { Heading, Paragraph } from '../../../UI/typography/typography';
import styles from './feedback.module.scss';
import avatar1 from '../../../../img/testimonials-avatar1.jpg';
import stars from '../../../../img/5-stars.svg';

const Feedback = () => {
  return (
    <WidthContainer className={styles['feedback']}>
      <div className={styles['feedback__person']}>
        <img
          src={avatar1}
          alt=''
          className={styles['feedback__person-avatar']}
        />
        <img src={stars} alt='' className={styles['feedback__person-rate']} />
      </div>
      <Paragraph className={styles['feedback-paragraph']}>
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been.
      </Paragraph>
      <Heading className={styles['person-name']}>Sara Taylor</Heading>
      <Paragraph className={styles['person-role']}>Consumer</Paragraph>
    </WidthContainer>
  );
};

export default Feedback;
