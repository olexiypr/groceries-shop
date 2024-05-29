import React, { useState } from 'react';
import { Input } from '../../components/UI/form-input/form-input';
import WidthContainer from '../../components/UI/width-container/container';
import styles from './registration.module.scss';
import Button from '../../components/UI/button/button';
import { validators } from '../../utils/validators';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Paragraph,
  Subheading,
} from '../../components/UI/typography/typography';
import { registration } from '../../redux/userSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Registration = () => {
  const dispatch = useDispatch();
  const [registrationResult, setRegistrationResult] = useState({ message: '', success: false });

  const initialValues = Yup.object({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    retypePassword: '',
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required field')
      .test('name', 'Invalid name', (value) => validators.nameValidator(value)),
    email: Yup.string()
      .required('Required field')
      .test('email', 'Invalid email address', (value) =>
        validators.emailValidator(value),
      ),
    phone: Yup.string()
      .required('Required field')
      .test('phone', 'Invalid phone number', (value) =>
        validators.phoneValidator(value),
      ),
    address: Yup.string()
      .required('Required field')
      .test('address', 'Invalid address', (value) =>
        validators.addressValidator(value),
      ),
    password: Yup.string()
      .required('Required field')
      .test('password', 'Invalid password', (value) =>
        validators.passwordValidator(value),
      ),
    retypePassword: Yup.string()
      .required('Required field')
      .test('retypePassword', 'Invalid password', (value) =>
        validators.passwordValidator(value),
      ),
  });

  const onSubmit = async (values) => {
    resetForm();

    const res = await dispatch(
      registration(
        values.name,
        values.email,
        values.password,
        values.phone,
        values.address,
      ),
    );
    setRegistrationResult(res);
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
    <WidthContainer className={styles.container}>
      {!registrationResult.message ? (
        <form className={styles.form}>
          <Subheading className={styles['form-title']}>Registration</Subheading>
          <div className={styles.form__main}>
            <Input
              name='name'
              invalid={formik.touched.name && formik.errors.name}
              value={formik.values.name}
              label={'Full name*'}
              inptType={'text'}
              inptPlaceholder={'Name Surname'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              warn={formik.errors.name}
            />
            <Input
              name='email'
              invalid={formik.touched.email && formik.errors.email}
              value={formik.values.email}
              label={'Email address*'}
              inptType={'email'}
              inptPlaceholder={'example@yourmail.com'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              warn={formik.errors.email}
            />
            <Input
              name='address'
              invalid={formik.touched.address && formik.errors.address}
              value={formik.values.address}
              label={'Address*'}
              inptType={'text'}
              inptPlaceholder={'Your address'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              warn={formik.errors.address}
            />
            <Input
              name='phone'
              invalid={formik.touched.phone && formik.errors.phone}
              value={formik.values.phone}
              label={'Phone number*'}
              inptType={'tel'}
              inptPlaceholder={'0000000000'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              warn={formik.errors.phone}
            />
            <Input
              name='password'
              invalid={formik.touched.password && formik.errors.password}
              value={formik.values.password}
              label={'Password(at least 8 characters)*'}
              inptType={'password'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              warn={formik.errors.password}
            />
            <Input
              name='retypePassword'
              invalid={formik.touched.retypePassword && formik.errors.retypePassword
                || formik.values.retypePassword !== formik.values.password}
              value={formik.values.retypePassword}
              label={'Retype password*'}
              inptType={'password'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              warn={formik.errors.retypePassword}
            />
          </div>
          <Paragraph>
            <NavLink to={'/signin'} className={styles['login-link']}>
              Already have an account?
            </NavLink>
          </Paragraph>
          <Button
            showArrow
            type='submit'
            className={styles['form-button']}
            onClick={formik.handleSubmit}
          >
            Register
          </Button>
        </form>
      ) : (
        <>
          <Subheading>{registrationResult.message}</Subheading>
          {registrationResult.success && <Paragraph>Please, confirm your email!</Paragraph>}
        </>
      )}
    </WidthContainer>
  );
};

export default Registration;
