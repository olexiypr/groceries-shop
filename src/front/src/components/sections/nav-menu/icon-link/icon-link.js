import React from 'react';
import { Link } from 'react-router-dom';
import styles from './icon-link.module.scss';
import classNames from 'classnames';

const IconLink = ({ children, linkTo, className }) => {
  return (
    <Link to={linkTo} className={classNames(styles['link-btn'], className)}>
      {children}
    </Link>
  );
};

export default IconLink;
