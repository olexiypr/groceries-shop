import React from 'react';
import { Paragraph } from '../../../../UI/typography/typography';
import styles from './contact-item.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const ContactUs = ({ label, link }) => {
  return (
    <div className={styles['contact']}>
      <Paragraph
        className={classNames(styles['contact-label'], {
          [styles['contact-label--hidden']]: !label,
        })}
      >
        {label}
      </Paragraph>
      <Link to='' className={styles['contact-link']}>
        {link}
      </Link>
    </div>
  );
};

export default ContactUs;
