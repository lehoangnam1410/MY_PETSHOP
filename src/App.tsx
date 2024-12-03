import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import SidebarComponent from './components/BreadCrumbs/Sidebar';
import HeaderComponent from './components/BreadCrumbs/Header';
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
import NotFound from './pages/NotFound/NotFound';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />

          {/* Định nghĩa một route với layout chung cho các trang */}
          <Route element={<LayoutWrapper collapsed={collapsed} setCollapsed={setCollapsed} />}>
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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

// LayoutWrapper component chứa Sidebar và Header cho các route con
const LayoutWrapper: React.FC<{ collapsed: boolean; setCollapsed: React.Dispatch<React.SetStateAction<boolean>>; }> = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  return (
    <Layout>
      {/* Hiển thị Sidebar và Header nếu không phải trang login */}
      {!location.pathname.includes('/login') && (
        <>
          <SidebarComponent collapsed={collapsed} />
          <Layout>
            <div className="h-screen overflow-auto relative">
              <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
              <Layout.Content >
                <Outlet />
              </Layout.Content>
            </div>
          </Layout>
        </>
      )}
    </Layout>
  );
};

export default App;
