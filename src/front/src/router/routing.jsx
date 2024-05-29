import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protected-route';

const Routing = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedRoute
                redirectPath='/signup'
                isProtected={route.isProtected}
              >
                {route.element}
              </ProtectedRoute>
            }

          />
        );
      })}
    </Routes>
  );
};
export default Routing;
