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

const SidebarItemsData = () => {
    const menuDashBroad = [
        {
            label: 'Dashboard',
            icon: <UserOutlined />,
            key: '/dashboard',  // key là đường dẫn
        },
    ];

    const sidebarItemsData2 = [
        {
            label: 'Nhân viên',
            icon: <UserOutlined />,
            key: '/employee',  // key là đường dẫn
        },
        {
            label: 'Đơn hàng',
            icon: <ShoppingOutlined />,
            key: '/orders',
        },
        {
            label: 'Khuyến mãi',
            icon: <PercentageOutlined />,
            key: '/promotions',  // key là đường dẫn
        },
        {
            label: 'Khách hàng',
            icon: <MessageOutlined />,
            key: '/customer',
        },
        {
            label: 'Báo cáo',
            icon: <CalendarOutlined />,
            key: '/reports',
        },
        {
            label: 'Thông báo',
            icon: <BellOutlined />,
            key: '/notifications',
        },
        {
            label: 'Sản phẩm',
            icon: <ShoppingOutlined />,
            key: '/products',
        },
        {
            label: 'Cài đặt',
            icon: <SettingOutlined />,
            children: [
                { label: 'Dịch vụ hệ thống', key: '/settings/system-services' },
                { label: 'Phân loại thú cưng', key: '/settings/pet-categories' },
            ],
        },
    ];

    const [menuDynamic, setMenuDynamic] = useState<any[]>([]);

    useEffect(() => {
        const getMenu = async () => {
            const data = await getServiceActive();
            const sidebarItems = data.data.map((data) => ({
                label: data.serviceTypeName, // Sử dụng categoryName làm label
                key: `/services/${data.serviceTypeCode}`, // key là đường dẫn
                icon: <ShoppingOutlined />, // Bạn có thể thay đổi icon nếu cần
                children: [
                    { label: 'Đơn hàng', key: `/order?serviceTypeCode=${data.serviceTypeCode}` },
                    { label: 'Nhân viên', key: `/staff?serviceTypeCode=${data.serviceTypeCode}` },
                    { label: 'Danh mục', key: `/catalog?serviceTypeCode=${data.serviceTypeCode}` },
                    { label: 'Dịch vụ', key: `/service?serviceTypeCode=${data.serviceTypeCode}` },
                ],
            }));
            setMenuDynamic(sidebarItems);
        };
        getMenu();
    }, []);

    const combinedMenu = [...menuDashBroad, ...menuDynamic, ...sidebarItemsData2];
    const navigate = useNavigate();
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại
    const handleMenuClick = ({ key }: { key: string }) => {
        navigate(key);  // Điều hướng tới trang dựa trên key
    };

    return (
        <Menu
            mode="inline"
            className="menu-bar h-full"
            onClick={handleMenuClick}
            selectedKeys={[location.pathname]}  // Set selected key bằng đường dẫn hiện tại         
            items={combinedMenu}  // Đưa vào items đã được xử lý
        />
    );
};

export default SidebarItemsData;
