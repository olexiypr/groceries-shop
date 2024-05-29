import React from 'react';
import styles from './footer-column.module.scss';
import classNames from 'classnames';

const FooterColumn = ({ children, className }) => {
  return <div className={classNames(styles.column, className)}>{children}</div>;
};

export default FooterColumn;
