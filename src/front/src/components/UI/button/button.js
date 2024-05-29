import React from 'react';
import styles from './button.module.scss';
import { ReactComponent as BtnArrow } from '../../../img/button-arrow.svg';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const Button = ({
  children,
  className,
  showArrow,
  onClick,
  type,
  yellow,
  white,
}) => {
  const navigate = useNavigate();
  const clickHandler = onClick || (() => navigate('notfound'));

  return (
    <button
      onClick={clickHandler}
      type={type || 'button'}
      className={classNames(
        styles.button,
        { [styles['button-yllw']]: yellow, [styles['button-wht']]: white },
        className,
      )}
    >
      {children}
      <BtnArrow
        className={
          showArrow
            ? [styles['button-arrow']]
            : [styles['button-arrow--hidden']]
        }
      />
    </button>
  );
};

export default Button;
