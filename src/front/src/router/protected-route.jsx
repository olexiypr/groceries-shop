import React from 'react';
import { Navigate } from 'react-router-dom';
import NavMenu from '../components/sections/nav-menu/nav-menu';
import Footer from '../components/sections/footer/footer';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ redirectPath, children, isProtected }) => {
  const isAuth = useSelector(state => state.user.isAuth)

  // If the route is protected and the user is not authenticated, redirect
  if (isProtected && !isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  // Render the protected route with Header and Sidebar if applicable
  return isProtected ? (
    <>
      <NavMenu />
      {children}
      <Footer />

    </>
  ) : (
    <>{children}</>
  );
};

export default ProtectedRoute;
