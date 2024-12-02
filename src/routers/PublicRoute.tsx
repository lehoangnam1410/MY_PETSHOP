import React from 'react';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  children: React.ReactNode; // Kiểu khai báo cho 'children'
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const token = localStorage.getItem('accessToken');

  return token ? <Navigate to="/" /> : <>{children}</>;
};

export default PublicRoute;
