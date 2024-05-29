import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../redux/userSlice';

const useCheckAuth = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.isAuth) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, user.isAuth]);
};

export default useCheckAuth;
