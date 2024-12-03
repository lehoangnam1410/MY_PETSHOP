import React, { useState, useEffect } from 'react';
import { Affix, Avatar, Badge, Button, Dropdown, Layout, List, MenuProps, Popover, Select, Space } from 'antd';
import { BellOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();

  // Lấy ngôn ngữ từ localStorage nếu có
  const storedLanguage = localStorage.getItem('i18nextLng') || 'vi';
  const [language, setLanguage] = useState(storedLanguage);

  // Kiểm tra nếu i18n đã được khởi tạo và có sẵn phương thức changeLanguage
  const changeLanguage = (lang: string) => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(lang);
      setLanguage(lang);
      localStorage.setItem('i18nextLng', lang);  // Lưu ngôn ngữ vào localStorage
    }
  };

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
          {t('PersonalInformation')}
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
    <Affix offsetTop={0}>
      <Layout.Header className="site-layout-background" style={{
        padding: 0,
        display: "flex", justifyContent: "space-between", background: "white"
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
          <Select value={language} onChange={changeLanguage} style={{
            width: "160px",
            height: "42px"
          }}>
            <Select.Option value="vi">{t('Vietnamese')}</Select.Option>
            <Select.Option value="en">{t('English')}</Select.Option>
          </Select>

          {/* Notification Popover */}
          <Popover
            className='ring-style'
            content={content}
            title={t('Notification')}
            trigger="click"
            open={visible}
            onOpenChange={(newVisible) => setVisible(newVisible)} 
          >
            <Badge count={notifications.length}>
              <Button type="text" icon={<BellOutlined className='button-style-ring' style={{ fontSize: '20px' }} />} />
            </Badge>
          </Popover>

          <Dropdown menu={{ items }} trigger={['click']} placement='bottomLeft'>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="overflow-hidden mt-5 flex items-center">
                  <img className="w-10 h-10 mr-2" src="https://tse1.mm.bing.net/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&P=0&h=180" alt="" />
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
