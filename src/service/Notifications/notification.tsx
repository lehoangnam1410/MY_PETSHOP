import axios from "../axiosCustom";

// lấy ra danh sách thông báo
const getAllNotifications = () => {
    return axios.get(`/notifications`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// lấy ra chi tiết thông báo
const getDetailsNotification = (notifyCode: string) => {
    return axios.get(`/product/:${notifyCode}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// thêm thông báo
interface AddNotificationInterface {
    title: string; // Tiêu đề bài viết
    content: string; // Nội dung bài viết
    image: string; // ID hoặc URL của hình ảnh đại diện cho bài viết
    activeTime: number; // Thời gian bài viết hoạt động (Unix timestamp in milliseconds)
    status: "ACTIVE" | "INACTIVE"; // Trạng thái của bài viết
}

const addNotification = (data: AddNotificationInterface) => {
    return axios.post(`/notification}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// Sửa thông báo
interface UpdateNotificationInterface {
    notifyCode: string; // Mã thông báo duy nhất
  title: string; // Tiêu đề thông báo
  content: string; // Nội dung thông báo
  image: string; // ID hoặc URL hình ảnh đính kèm thông báo
  activeTime: number; // Thời gian kích hoạt thông báo (Unix timestamp in milliseconds)
  status: "ACTIVE" | "INACTIVE"; // Trạng thái thông báo
  }
  
const updateNotification = (data:UpdateNotificationInterface) => {
    return axios.patch(`/notification`, data,{
        headers: {
            "Content-Type": "application/json"
        }
    })
}

// Xóa thông báo

const deleteNotification = (notifyCode:string) => {
    return axios.delete(`/notification:${notifyCode}`,{
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export {getAllNotifications,getDetailsNotification,updateNotification,addNotification,deleteNotification}