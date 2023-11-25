import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const LoginPage = lazy(() => import('./login'));
const RegisterPage = lazy(() => import('./register'));

const ProfilePage = lazy(() => import('./profile'));

type RoutingType = {
  isAuth: boolean;
};

export const Routing = ({ isAuth }: RoutingType) => {
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/profile" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/register" />} />
        </Routes>
      )}
    </>
  );
};
