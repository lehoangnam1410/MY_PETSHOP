import { Button, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import SidebarItemsData from './SideBarItemsData';

const SidebarComponent = ({ collapsed }: { collapsed: boolean }) => {
  const navigate = useNavigate();

  return (
    <Layout.Sider theme="light" width={260} trigger="null" collapsed={collapsed} className='sider h-screen border-r-2 border-[#e5e5e5]'>
      <div className='h-[8%] flex items-center justify-center'>
        {!collapsed ? (
          <img src="./img/logo.jpg" alt="Logo lớn" />
        ) : (
          <svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto my-auto'>
            <path d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z" fill="#1D2633"></path>
            <path d="M69.7136 50.2133C71.0644 50.2133 72.0252 51.5261 71.5172 52.7777C66.4666 65.2233 54.2582 74 39.9999 74C25.7417 74 13.5333 65.2233 8.48263 52.7777C7.97466 51.5261 8.93548 50.2133 10.2863 50.2133H69.7136Z" fill="#EDEBDE"></path>
            <path d="M71.5172 27.2222C72.0252 28.4739 71.0644 29.7867 69.7136 29.7867H10.2863C8.93549 29.7867 7.97468 28.4739 8.48264 27.2222C13.5333 14.7767 25.7417 6 39.9999 6C54.2582 6 66.4665 14.7767 71.5172 27.2222Z" fill="#EDEBDE"></path>
            {/* Add more SVG paths if needed */}
          </svg>
        )}
      </div>
      <div className='overflow-y-auto h-[92%]'>
        {/* <Menu 
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          className='menu-bar h-full'
        /> */}
        <SidebarItemsData/>
      </div>
    </Layout.Sider>
  );
};

export default SidebarComponent;
