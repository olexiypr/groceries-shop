import React from 'react';
import styles from './footer.module.scss';
import LogoMain from '../../UI/main-logo/logo-main';
import { Heading, Paragraph } from '../../UI/typography/typography';
import WidthContainer from '../../UI/width-container/container';
import ContactUs from './footer-column/contact-link/contact-item';
import FooterColumn from './footer-column/footer-column';
import SocialLinks from './footer-column/footer-socials/footer-socials';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <WidthContainer className={styles['footer-container']}>
        <FooterColumn className={styles['footer-column--left']}>
          <Heading className={styles['footer-contact']}>Contact Us</Heading>
          <ContactUs label='Email' link='needhelp@Organia.com' />
          <ContactUs label='Phone' link='666 888 888' />
          <ContactUs label='Address' link='88 road, borklyn street, USA' />
        </FooterColumn>
        <FooterColumn className={styles['footer-logo-column']}>
          <LogoMain />
          <Paragraph>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </Paragraph>
          <SocialLinks />
        </FooterColumn>
        <FooterColumn className={styles['footer-column--right']}>
          <Heading className={styles['footer-contact']}>Utility Pages</Heading>
          <ContactUs link='Style Guide' />
          <ContactUs link='404 Not Found' />
          <ContactUs link='Password Protected' />
          <ContactUs link='Licences' />
          <ContactUs link='Changelog' />
        </FooterColumn>
      </WidthContainer>
    </footer>
  );
};

export default Footer;
