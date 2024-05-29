import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WidthContainer from '../../components/UI/width-container/container';
import styles from './activate-account.module.scss';
import { Subheading } from '../../components/UI/typography/typography';
import { useDispatch } from 'react-redux';
import { activate } from '../../redux/userSlice';
import Button from '../../components/UI/button/button';

const ActivateAccount = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const dispatch = useDispatch();
  const [subheadingText, setSubheadingText] = useState('');

  useEffect(() => {
    const activateUser = async () => {
      const { message } = await dispatch(activate(token));
      setSubheadingText(message);
    };

    activateUser();
  }, [dispatch, token]);

  return (
    <WidthContainer className={styles.container}>
      <Subheading>{subheadingText}</Subheading>
      <Button onClick={() => navigate('/')}>To home page</Button>
    </WidthContainer>
  );
};

export default ActivateAccount;
