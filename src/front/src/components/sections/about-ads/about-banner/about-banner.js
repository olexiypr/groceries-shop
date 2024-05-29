import React from 'react';
import { Subheading, Heading } from '../../../UI/typography/typography';
import styles from './about-banner.module.scss';
import classNames from 'classnames';

const AboutBanner = ({ subheading, heading, className }) => {
  return (
    <div className={classNames(styles.banner, styles[className])}>
      <div className={styles['banner__text']}>
        <Subheading>{subheading}</Subheading>
        <Heading className={styles['banner__text-heading']}>{heading}</Heading>
      </div>
    </div>
  );
};

export default AboutBanner;
