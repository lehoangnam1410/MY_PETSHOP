import { Form, Input, Modal, Select, Switch, message } from "antd";
import React, { useEffect } from "react";
import { addCustomer } from "../../service/Customer/customer"; // Import hàm gọi API

const { Option } = Select;

interface ModalAddCustomerProps {
  isModalOpen: boolean;
  handleOk: (values: any) => void; // Callback khi nhấn nút "Lưu"
  handleCancel: () => void; // Callback khi nhấn "Hủy"
}

const ModelAddCustomer: React.FC<ModalAddCustomerProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        // Chuẩn bị dữ liệu cho API
        const payload = {
          customer: values.customerName,
          email: values.email,
          customerPhone: values.phoneNumber,
          address: values.address,
          gender: values.gender,
          status: values.isActive ? "active" : "inactive",
        };

        // Gọi API thêm khách hàng
        addCustomer(payload)
          .then(() => {
            message.success("Thêm khách hàng thành công!");
            form.resetFields(); // Reset form
            handleOk(values); // Trả dữ liệu về component cha
          })
          .catch((error) => {
            console.error("Error adding customer:", error);
            message.error("Thêm khách hàng thất bại!");
          });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  useEffect(() => {
    if (!isModalOpen) {
      form.resetFields(); // Reset form khi modal đóng
    }
  }, [isModalOpen]);

  return (
    <Modal
      title="Tạo khách hàng mới"
      open={isModalOpen}
      onOk={onSubmit}
      onCancel={handleCancel}
      okText="Lưu"
      cancelText="Hủy bỏ"
    >
      <Form form={form} layout="vertical">
        {/* Tên khách hàng */}
        <Form.Item
          label="Tên khách hàng"
          name="customerName"
          rules={[{ required: true, message: "Vui lòng nhập tên khách hàng!" }]}
        >
          <Input placeholder="Tên khách hàng" />
        </Form.Item>

        {/* Số điện thoại */}
        <Form.Item
          label="Số điện thoại"
          name="phoneNumber"
          rules={[
            { required: true, message: "Vui lòng nhập số điện thoại!" },
            {
              pattern: /^[0-9]{10}$/,
              message: "Số điện thoại không hợp lệ!",
            },
          ]}
        >
          <Input placeholder="Số điện thoại" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        {/* Địa chỉ */}
        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
        >
          <Input placeholder="Địa chỉ" />
        </Form.Item>

        {/* Giới tính */}
        <Form.Item
          label="Giới tính"
          name="gender"
          rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
        >
          <Select placeholder="Chọn giới tính">
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
            <Option value="other">Khác</Option>
          </Select>
        </Form.Item>

        {/* Trạng thái hoạt động */}
        <Form.Item
          label="Hoạt động"
          name="isActive"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModelAddCustomer;
