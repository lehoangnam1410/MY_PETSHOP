// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const defaultLanguage = localStorage.getItem('i18nextLng') || 'vi';  // Lấy ngôn ngữ từ localStorage nếu có, nếu không mặc định là 'vi'

i18n
  .use(Backend) // Tùy chọn để tải file dịch từ server
  // .use(LanguageDetector) // Phát hiện ngôn ngữ của người dùng
  .use(initReactI18next) // Hook cho React
  .init({
    lng: defaultLanguage, // Thiết lập ngôn ngữ mặc định
    fallbackLng: 'vi', // Ngôn ngữ dự phòng
    debug: true,
    interpolation: {
      escapeValue: false, // React đã xử lý việc escape
    },
    resources: {
      en: {
        translation: {
          PersonalInformation: "Personal Information",
          Vietnamese: "Vietnamese",
          English: "English",
          Notification: "Notification",
          Dashboard: "Dashboard",
          Employee: "Employee",
          Orders: "Orders",
          Promotions: "Promotions",
          Customer: "Customer",
          Reports: "Reports",
          Notifications: "Notifications",
          Products: "Products",
          Settings: "Settings",
          SystemServices: "System Services",
          PetCategories: "Pet Categories",
          Staff: "Staff",
          Catalog: "Catalog",
          Services: "Services"
          // Các câu tiếng Anh
        },
      },
      vi: {
        translation: {
          PersonalInformation: "Chào mừng đến với trang web của chúng tôi",
          Vietnamese: "Tiếng việt",
          English: "Tiếng anh",
          Notification: "Thông báo",
          Dashboard: "Bảng điều khiển",
          Employee: "Nhân viên",
          Orders: "Đơn hàng",
          Promotions: "Khuyến mãi",
          Customer: "Khách hàng",
          Reports: "Báo cáo",
          Notifications: "Thông báo",
          Products: "Sản phẩm",
          Settings: "Cài đặt",
          SystemServices: "Dịch vụ hệ thống",
          PetCategories: "Phân loại thú cưng",
          Staff: "Nhân viên",
          Catalog: "Danh mục",
          Services: "Dịch vụ"
          // Các câu tiếng Việt
        },
      },
    },
  });

export default i18n;
