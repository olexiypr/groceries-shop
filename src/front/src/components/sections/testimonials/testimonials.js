import React from 'react';
import styles from './testimonials.module.scss';
import bgLeft from '../../../img/testimonials-left.png';
import bgRight from '../../../img/testimonials-left.png';
import BenefitCard from './benefit-card/benefit-card';
import { Heading, Subheading } from '../../UI/typography/typography';
import WidthContainer from '../../UI/width-container/container';
import Feedback from './feedback/feedback';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <img src={bgLeft} className={styles['testimonials-bg--left']} alt='' />
      <img src={bgRight} className={styles['testimonials-bg--right']} alt='' />
      <Subheading className={styles['testimonials-subheading']}>
        Testimonial
      </Subheading>
      <Heading className={styles['testimonials-heading']}>
        What Our Customer Saying?
      </Heading>
      <Feedback />
      <hr className={styles['testimonials-separate']} />
      <WidthContainer className={styles.benefits}>
        <BenefitCard heading={'100%'} paragraph={'Organic'} />
        <BenefitCard heading={'285'} paragraph={'Active Product'} />
        <BenefitCard heading={'350+'} paragraph={'Organic Orchads'} />
        <BenefitCard heading={'25+'} paragraph={'Years of Farming'} />
      </WidthContainer>
    </div>
  );
};

export default Testimonials;
