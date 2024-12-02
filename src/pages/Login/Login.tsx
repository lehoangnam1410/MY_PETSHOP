import React, { useState, useRef } from 'react';
import { Button, Form, Input, Checkbox, message } from 'antd';
import { login } from '../../service/Login/login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Khai báo ref để quản lý timeout

  const handleSubmit = async (values: any) => {
    setLoading(true);

    const { email, password } = values;

    if (!email || !password) {
      message.error("Vui lòng nhập đầy đủ thông tin.");
      setLoading(false);
      return;
    }

    // Set a timeout for 5 seconds to handle login failure if it takes too long
    timeoutRef.current = setTimeout(() => {
      if (loading) {
        message.error("Đăng nhập không thành công, vui lòng thử lại.");
        setLoading(false);
      }
    }, 5000); // 5 seconds timeout

    try {
      const data = await login({ email, password });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Clear the timeout if login is successful
      }

      localStorage.setItem("accessToken", data.data.accessToken); // Lưu accessToken vào localStorage
      message.success("Đăng nhập thành công");
      navigation("/"); // Điều hướng đến trang chính
    } catch (error) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Clear the timeout if there is an error
      }

      message.error("Đăng nhập thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-4xl font-semibold mb-6 text-center">Đăng nhập</h1>
        <Form
          layout="vertical"
          onFinish={handleSubmit} // Sử dụng onFinish của Form
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: 'email', message: 'Email không hợp lệ!' }, { required: true, message: 'Vui lòng nhập email!' }]}>
            <Input placeholder="Email" allowClear />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
            <Input.Password placeholder="Mật khẩu" allowClear />
          </Form.Item>

          <div className="flex justify-between items-center">
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Ghi nhớ tôi</Checkbox>
            </Form.Item>
            <div className="text-right mb-6">
              <a href="#forgot-password" className="text-blue-500">Quên mật khẩu?</a>
            </div>
          </div>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              loading={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
