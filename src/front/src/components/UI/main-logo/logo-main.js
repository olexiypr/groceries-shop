import logo from '../../../img/Logo.svg';
import styles from './logo-main.module.scss';
import React from 'react';
import { Heading } from '../typography/typography';
import { useNavigate } from 'react-router-dom';

const LogoMain = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.logo} onClick={() => navigate('/')}>
      <img src={logo} alt='Organick logo' className={styles['logo-img']} />
      <Heading className={styles['logo-heading']}>Organick</Heading>
    </div>
  );
};

export default LogoMain;
