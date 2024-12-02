import React from "react";
import { Drawer, Button, Select, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";

interface FilterCustomerProps {
  open: boolean;
  status: string;
  onClose: () => void;
  onApply: () => void;
  onChangeStatus: (value: string) => void;
}

const FilterCustomer: React.FC<FilterCustomerProps> = ({
  open,
  status,
  onClose,
  onApply,
  onChangeStatus,
}) => {
  return (
    <Drawer
      title="Bộ lọc"
      placement="right"
      width={500}
      closable={false}
      open={open}
      extra={
        <Space>
          <CloseOutlined onClick={onClose} />
        </Space>
      }
    >
      <div>
        <div>Trạng thái</div>
        <Select
          style={{ width: 200 }}
          value={status}
          onChange={(value) => onChangeStatus(value)}
        >
          <Select.Option value="ACTIVE">Hoạt động</Select.Option>
          <Select.Option value="INACTIVE">Không hoạt động</Select.Option>
        </Select>
      </div>
      {/* Footer */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "500px",
          background: "#fff",
          borderTop: "1px solid #f0f0f0",
          padding: "10px 16px",
          textAlign: "right",
        }}
      >
        <Button onClick={onClose} style={{ marginRight: 8 }}>
          Đặt lại
        </Button>
        <Button type="primary" onClick={onApply}>
          Áp dụng
        </Button>
      </div>
    </Drawer>
  );
};

export default FilterCustomer;
