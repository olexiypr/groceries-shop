import React from 'react';
import styles from './container.module.scss';
import classNames from 'classnames';

const WidthContainer = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};

export default WidthContainer;
