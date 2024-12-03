import React, { useEffect, useState } from 'react';
import {
    BellOutlined,
    CalendarOutlined,
    MessageOutlined,
    PercentageOutlined,
    SettingOutlined,
    ShoppingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import getServiceActive from '../../service/Service/serviceAtive';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SidebarItemsData = () => {
    // Khởi tạo useTranslation để sử dụng t() cho việc dịch
    const { t } = useTranslation();

    const menuDashBroad = [
        {
            label: t('Dashboard'), // Dịch tên menu "Dashboard"
            icon: <UserOutlined />,
            key: '/dashboard',
        },
    ];

    const sidebarItemsData2 = [
        {
            label: t('Employee'), // Dịch tên menu "Nhân viên"
            icon: <UserOutlined />,
            key: '/employee',
        },
        {
            label: t('Orders'), // Dịch tên menu "Đơn hàng"
            icon: <ShoppingOutlined />,
            key: '/orders',
        },
        {
            label: t('Promotions'), // Dịch tên menu "Khuyến mãi"
            icon: <PercentageOutlined />,
            key: '/promotions',
        },
        {
            label: t('Customer'), // Dịch tên menu "Khách hàng"
            icon: <MessageOutlined />,
            key: '/customer',
        },
        {
            label: t('Reports'), // Dịch tên menu "Báo cáo"
            icon: <CalendarOutlined />,
            key: '/reports',
        },
        {
            label: t('Notifications'), // Dịch tên menu "Thông báo"
            icon: <BellOutlined />,
            key: '/notifications',
        },
        {
            label: t('Products'), // Dịch tên menu "Sản phẩm"
            icon: <ShoppingOutlined />,
            key: '/products',
        },
        {
            label: t('Settings'), // Dịch tên menu "Cài đặt"
            icon: <SettingOutlined />,
            children: [
                { label: t('System Services'), key: '/settings/system-services' }, // Dịch tên menu con "Dịch vụ hệ thống"
                { label: t('Pet Categories'), key: '/settings/pet-categories' }, // Dịch tên menu con "Phân loại thú cưng"
            ],
        },
    ];

    const [menuDynamic, setMenuDynamic] = useState<any[]>([]);

    useEffect(() => {
        const getMenu = async () => {
            const data = await getServiceActive();
            const sidebarItems = data.data.map((data) => ({
                label: data.serviceTypeName, // Sử dụng categoryName làm label
                key: `/services/${data.serviceTypeCode}`,
                icon: <ShoppingOutlined />,
                children: [
                    { label: t('Orders'), key: `/order?serviceTypeCode=${data.serviceTypeCode}` }, // Dịch menu con "Đơn hàng"
                    { label: t('Staff'), key: `/staff?serviceTypeCode=${data.serviceTypeCode}` }, // Dịch menu con "Nhân viên"
                    { label: t('Catalog'), key: `/catalog?serviceTypeCode=${data.serviceTypeCode}` }, // Dịch menu con "Danh mục"
                    { label: t('Services'), key: `/service?serviceTypeCode=${data.serviceTypeCode}` }, // Dịch menu con "Dịch vụ"
                ],
            }));
            setMenuDynamic(sidebarItems);
        };
        getMenu();
    }, []);

    const combinedMenu = [...menuDashBroad, ...menuDynamic, ...sidebarItemsData2];
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuClick = ({ key }: { key: string }) => {
        navigate(key);
    };

    return (
        <Menu
            mode="inline"
            className="menu-bar h-full"
            onClick={handleMenuClick}
            selectedKeys={[location.pathname]}
            items={combinedMenu}
        />
    );
};

export default SidebarItemsData;
