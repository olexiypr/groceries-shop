import React from 'react';
import styles from './typography.module.scss';
import classNames from 'classnames';

export const Heading = ({ children, className }) => {
  return <h2 className={classNames(styles.heading, className)}>{children}</h2>;
};

export const Subheading = ({ children, className }) => {
  return (
    <h3 className={classNames(styles.subheading, className)}>{children}</h3>
  );
};

export const Paragraph = ({ children, className }) => {
  return <p className={classNames(styles.paragraph, className)}>{children}</p>;
};

export const HeroHeading = ({ children, className }) => {
  return <h1 className={classNames(styles.heading, className)}>{children}</h1>;
};
