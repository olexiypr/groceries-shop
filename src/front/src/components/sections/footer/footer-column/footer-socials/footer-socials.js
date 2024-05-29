import React from 'react';
import { ReactComponent as InstagramLogo } from '../../../../../img/footer-instagram.svg';
import { ReactComponent as FacebookLogo } from '../../../../../img/footer-facebook.svg';
import { ReactComponent as TwitterLogo } from '../../../../../img/footer-twitter.svg';
import { ReactComponent as PinterestLogo } from '../../../../../img/footer-pintrest.svg';
import styles from './footer-socials.module.scss';

const SocialLinks = () => {
  return (
    <div className={styles['footer__socials']}>
      <div className={styles['footer__socials-link']}>
        <InstagramLogo />
      </div>
      <div className={styles['footer__socials-link']}>
        <FacebookLogo />
      </div>
      <div className={styles['footer__socials-link']}>
        <TwitterLogo />
      </div>
      <div className={styles['footer__socials-link']}>
        <PinterestLogo />
      </div>
    </div>
  );
};

export default SocialLinks;
