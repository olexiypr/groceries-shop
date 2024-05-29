import React from 'react';
import Button from '../../../UI/button/button';
import styles from './eco-friendly-banner.module.scss';
import classNames from 'classnames';

const EcoFriendlyBanner = ({ button, className, url }) => {
  return (
    <div className={classNames(styles['ads__card'], className)}>
      <Button white className={styles['ads__card-button']}>
        {button}
      </Button>
      <img src={url} alt='' className={styles['ads__card-img']} />
    </div>
  );
};

export default EcoFriendlyBanner;
