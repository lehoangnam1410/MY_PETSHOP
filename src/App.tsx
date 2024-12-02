import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SidebarComponent from './components/Sidebar';
import HeaderComponent from './components/Header';
import Dashboard from './pages/Dashbroad/Dashboard';
import Employee from './pages/Employee/Employee';
import Login from './pages/Login/Login';
import PrivateRoute from './routers/PrivateRoute';
import Customer from './pages/Customer/Customer';
import PublicRoute from './routers/PublicRoute';
import Orders from './pages/Orders/Orders';
import Promotions from './pages/Promotions/Promotions';
import Reposts from './pages/Reposts/Reposts';
import Products from './pages/Products/Products';
import Notifications from './pages/Notifications/Notifications';
import SystemServices from './pages/Setting/SystemServices';
import PetCategories from './pages/Setting/PetCategories';
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Run once on component mount
    handleResize();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>

        } />
        <Route
          path="*"
          element={
            // <PrivateRoute>
              <MainLayout collapsed={collapsed} setCollapsed={setCollapsed} />
            // </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

// Component MainLayout cho các route dùng chung layout
const MainLayout: React.FC<{
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  return (
    <Layout>
      {/* Sidebar và Header chỉ hiển thị nếu không phải trang login */}
      {!location.pathname.includes('/login') && <SidebarComponent collapsed={collapsed} />}
      <Layout>
        {!location.pathname.includes('/login') && (
          <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
        )}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/reports" element={<Reposts />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/products" element={<Products />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings/system-services" element={<SystemServices />} />
          <Route path="/settings/pet-categories" element={<PetCategories />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default App;
