import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
  // Import jwt-decode để giải mã token

interface PrivateRouteProps {
  children: React.ReactNode;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    // Giải mã token để lấy thông tin hết hạn
    const decodedToken: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000); // Thời gian hiện tại tính bằng giây

    // Kiểm tra nếu token đã hết hạn
    if (decodedToken.exp < currentTime) {
      // Token đã hết hạn, xóa token và điều hướng về trang login
      localStorage.removeItem('accessToken');
      return <Navigate to="/login" />;
    }

    // Token hợp lệ, render các component con
    return <>{children}</>;
  }

  // Nếu không có token, điều hướng về trang login
  return <Navigate to="/login" />;
};

export default PrivateRoute;
