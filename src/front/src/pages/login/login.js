import React, { useEffect } from 'react';
import WidthContainer from '../../components/UI/width-container/container';
import styles from './login.module.scss';
import { validators } from '../../utils/validators';
import { Subheading } from '../../components/UI/typography/typography';
import { Input } from '../../components/UI/form-input/form-input';
import Button from '../../components/UI/button/button';
import { login } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Required field')
    .test('email', 'Invalid email address', (value) =>
      validators.emailValidator(value),
    ),
  password: Yup.string()
    .required('Required field')
    .test('password', 'Invalid password', (value) =>
      validators.passwordValidator(value),
    ),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth])

  const onSubmit = (values) => {
    resetForm();
    dispatch(login(values.email, values.password));
  };

  const resetForm = () => {
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <WidthContainer>
      <form className={styles.form} >
        <Subheading className={styles['form-title']}>Login</Subheading>
        <div className={styles.form__main}>
          <Input
            name='email'
            invalid={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            warn={formik.errors.email}
            inptPlaceholder={'example@yourmail.com'}
            inptType={'email'}
            label={'Email address*'}
            data-testid='login-email'
          />
          <Input
            name='password'
            invalid={formik.touched.password && formik.errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={'Password(at least 8 characters)*'}
            inptType={'password'}
            warn={formik.errors.password}
            data-testid='login-password'
          />
        </div>
        <Button
          showArrow
          type='submit'
          onClick={formik.handleSubmit}
          className={styles['form-button']}
          data-testid='login-button'
        >
          Login
        </Button>
      </form>
    </WidthContainer>
  );
};

export default Login;
