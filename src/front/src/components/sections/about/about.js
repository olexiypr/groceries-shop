import React from 'react';
import styles from './about.module.scss';
import aboutImg from '../../../img/about-img.png';
import AboutCard from './about-card/about-card';
import veganFood from '../../../img/about-vegan-food.svg';
import aboutMailbox from '../../../img/about-mailbox-quality.svg';
import Button from '../../UI/button/button';
import { Heading, Subheading, Paragraph } from '../../UI/typography/typography';
import WidthContainer from '../../UI/width-container/container';

const About = () => {
  return (
    <div className={styles.about}>
      <WidthContainer className={styles['about__container']}>
        <div className={styles['about__image']}>
          <img src={aboutImg} alt='' />
        </div>
        <div className={styles['about__description']}>
          <Subheading className={styles['about__description-subheading']}>
            About Us
          </Subheading>
          <Heading className={styles['about__description-heading']}>
            We Believe in Working Accredited Farmers
          </Heading>
          <Paragraph className={styles['about__description-paragraph']}>
            {`Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.`}
          </Paragraph>
          <div className={styles['about__cards']}>
            <AboutCard
              heading='Organic Foods Only'
              paragraph='Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
              img={veganFood}
            />
            <AboutCard
              heading='Quality Standards'
              paragraph='Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
              img={aboutMailbox}
            />
          </div>
          <Button showArrow>Shop Now</Button>
        </div>
      </WidthContainer>
    </div>
  );
};

export default About;
