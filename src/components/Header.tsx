import React, { useState } from 'react';
import { Affix, Avatar, Badge, Button, Dropdown, Layout, List, MenuProps, Popover, Select, Space } from 'antd';
import { BellOutlined, DownOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
interface Notification {
  title: string;
  description: string;
}
const notifications: Notification[] = [
  { title: 'Thông báo 1', description: 'Nội dung thông báo 1' },
  { title: 'Thông báo 2', description: 'Nội dung thông báo 2' },
];
const HeaderComponent = ({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed: any }) => {
  const token = localStorage.getItem("accessToken");
  const navigation = useNavigate();
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState('vi');
  const handleLogout = () => {
    console.log(token);
    if (token) {
      localStorage.removeItem("accessToken");
    }
    navigation("/login");
  }

  const content = (
    <List
      itemLayout="horizontal"
      dataSource={notifications}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar icon={<BellOutlined />} />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
  const items: MenuProps['items'] = [
    {
      label: <a href="#"><UserOutlined />
        <span className="ml-2">
          Thông tin cá nhân
        </span>
      </a>,
      key: '0',
    },
    {
      label: <button onClick={handleLogout}><LogoutOutlined className="text-[red]" />
        <span className="text-[red] ml-2">
          Đăng xuất
        </span>
      </button>,
      key: '1',
    }
  ];
  return (
    <Affix offsetTop={0} >
      <Layout.Header className="site-layout-background" style={{
        padding: 0,
        background: "white", display: "flex", justifyContent: "space-between"
      }}>
        <div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            className="max-[700px]:hidden"
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 42,
              height: 42,
            }}
          />
        </div>
        {/* Language Selector */}
        <div style={{
          display: "flex",
          marginRight: "15px",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Select value={language} onChange={setLanguage} style={{
            width: "160px",
            height: "42px"
          }}>
            <Select.Option value="vi">Tiếng Việt</Select.Option>
            <Select.Option value="en">English</Select.Option>
          </Select>

          {/* Notification Popover */}
          <Popover
            content={content}
            title="Thông báo"
            trigger="click"
            open={visible} 
            onOpenChange={(newVisible) => setVisible(newVisible)} // Sử dụng onOpenChange thay vì onVisibleChange
          >
            <Badge count={notifications.length}>
              <Button type="text" icon={<BellOutlined style={{ fontSize: '20px' }} />} />
            </Badge>
          </Popover>
          <Dropdown menu={{ items }} trigger={['click']} placement='bottomLeft'>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className=" rounded-full overflow-hidden mt-5  mr-10 flex items-center">
                  <img className="w-10 h-10" src="https://tse1.mm.bing.net/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&P=0&h=180" alt="" />
                  <span className="text-sm font-semibold">
                    john_doe
                  </span>
                </div>
              </Space>
            </a>
          </Dropdown>
        </div>
      </Layout.Header>
    </Affix>
  );
};

export default HeaderComponent;
