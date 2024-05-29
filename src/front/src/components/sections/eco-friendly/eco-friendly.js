import React from 'react';
import { Heading, Subheading } from '../../UI/typography/typography';
import WidthContainer from '../../UI/width-container/container';
import AboutCard from '../about/about-card/about-card';
import styles from './eco-friendly.module.scss';

const EcoFriendly = () => {
  return (
    <div className={styles['eco-friendly']}>
      <WidthContainer className={styles['wrapper']}>
        <div className={styles['eco-friendly__content']}>
          <Subheading className={styles['eco-friendly__content-subheading']}>
            Eco Friendly
          </Subheading>
          <Heading className={styles['eco-friendly__content-heading']}>
            Econis is a Friendly Organic Store
          </Heading>
          <div className={styles['eco-friendly__content__points']}>
            {/* refactor with map */}
            <AboutCard
              disableImg
              heading='Start with Our Company First'
              paragraph='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis'
            ></AboutCard>
            <AboutCard
              disableImg
              heading='Learn How to Grow Yourself'
              paragraph='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis'
            ></AboutCard>
            <AboutCard
              disableImg
              heading='Farming Strategies of Today'
              paragraph='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis'
            ></AboutCard>
          </div>
        </div>
      </WidthContainer>
    </div>
  );
};

export default EcoFriendly;
