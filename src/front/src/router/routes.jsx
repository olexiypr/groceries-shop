import React from 'react';
import CartBody from '../pages/cart/cart';
import MainBody from '../pages/main/main';
import SuccessBanner from '../components/UI/banners/success-banner/success-banner';
import Registration from '../pages/registration/registration';
import Login from '../pages/login/login';
import ActivateAccount from '../pages/activate-account/activate-account';
import NotFound from '../pages/not-found/not-found';

export const routes = [
  {
    path: '/',
    element: <MainBody />,
    isProtected: true,
  },
  {
    path: '/cart',
    element: <CartBody />,
    isProtected: true,
  },
  {
    path: '/success',
    element: <SuccessBanner />,
    isProtected: true,
  },
  {
    path: '/signup',
    element: <Registration />,
    isProtected: false,
  },
  {
    path: '/signin',
    element: <Login />,
    isProtected: false,
  },
  {
    path: '/confirm/:token',
    element: <ActivateAccount />,
    isProtected: false,
  },
  {
    path: '*',
    element: <NotFound />,
    isProtected: false,
  },
];
