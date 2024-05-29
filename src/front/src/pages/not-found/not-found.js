import React from 'react';
import Button from '../../components/UI/button/button';
import {
  HeroHeading,
  Paragraph,
} from '../../components/UI/typography/typography';
import WidthContainer from '../../components/UI/width-container/container';
import styles from './not-found.module.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as NotFoundDecores } from '../../img/decors/not-found-group.svg';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['not-found']}>
      <WidthContainer className={styles['wrapper']}>
        <div className={styles['not-found__content']}>
          <h3 className={styles['not-found__content-subheading']}>404</h3>
          <HeroHeading className={styles['not-found__content-heading']}>
            Page not found
          </HeroHeading>
          <Paragraph className={styles['not-found__content-paragraph']}>
            {`The page you are looking for doesn't exist or has been moved`}
          </Paragraph>
          <Button
            showArrow={true}
            onClick={() => navigate('/')}
            className={styles['not-found__content-btn']}
          >
            Go to Homepage
          </Button>
        </div>
      </WidthContainer>
      <NotFoundDecores className={styles['not-found-decores']} />
    </div>
  );
};

export default NotFound;
