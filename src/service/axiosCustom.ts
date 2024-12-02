import axios, { AxiosError } from 'axios';
const token = localStorage.getItem('accessToken');
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});
axios.interceptors.request.use(function (config) {
  // Kiểm tra nếu có token thì thêm vào header Authorization
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
},
  function (error:AxiosError) {
    if (error.request) {
      // Yêu cầu được gửi đi nhưng không nhận được phản hồi
      console.error('No response received from server:', error.request);
    } else {
      // Một lỗi khác xảy ra trong khi thiết lập yêu cầu
      console.error('Error in request setup:', error.message);
    }
    return Promise.reject(error);
  });
instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  if (error.response) {
    if (error.response.status === 404) {
      console.error("Error 404: Resource not found!");

    }
    else if (error.response.status >= 400) {
      console.error("error");
    }
    else if (error.response.status >= 500) {
      console.log("error");
    }
  }
  return Promise.reject(error);
});
export default instance;
