import axios from '../axiosCustom';

interface LoginParams {
  email: string;
  password: string;
}

const login = async ({ email, password }: LoginParams) => {
  try {
    const response = await axios.post("/user/login", {
      email,
      password
    });
    return response; // Trả về dữ liệu từ server
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi
  }
};

export { login };
