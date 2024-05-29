import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './profile.module.scss';
import { logout } from '../../../../redux/userSlice';
import Button from '../../../UI/button/button';
import { ReactComponent as ArrDown } from '../../../../img/nav-menu-arrow-down.svg';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { name, isAuth } = useSelector((state) => state.user);
  const userFirstName = name.split(' ')[0];
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
  };

  return (
    <div className={styles.profileContainer}>
      {isAuth ? (
        <div className={styles.profileDropdown} onClick={toggleDropdown}>
          <div className={styles.greetings}>
            {userFirstName} <ArrDown />
          </div>
          {showDropdown && (
            <div className={styles.dropdownContent}>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
        </div>
      ) : (
        <div
          className={styles.profileDropdown}
          onClick={() => navigate('/signup')}
        >
          <div className={styles.greetings}>Sign up</div>
        </div>
      )}
    </div>
  );
};

export default Profile;
