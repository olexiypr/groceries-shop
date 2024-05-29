import React from 'react';
import { Heading } from '../typography/typography';
import styles from './page-banner.module.scss';
import classNames from 'classnames';

const Banner = ({ children, heading, className, headingClassName }) => {
  return (
    <div className={classNames(styles.banner, className)}>
      <Heading
        className={classNames(styles['banner-heading'], headingClassName)}
      >
        {heading}
      </Heading>
      {children}
    </div>
  );
};

export default Banner;
