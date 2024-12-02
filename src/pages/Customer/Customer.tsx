import React, { useEffect, useState } from "react";
import { Button, Input, Table, Pagination, Dropdown, Space, MenuProps } from "antd";
import { ColumnType } from "antd/es/table";
import useGetCustomer from "../../hooks/Customer/useGetCustomer";
import FilterCustomer from "../../components/Customer/FilterCustomer";
import ModelAddCustomer from "../../components/Customer/ModelAddCustomer";

const Customer = () => {
  const {
    listCustommer,
    totalRows,
    offset,
    loading,
    searchKey,
    textDelay,
    status,
    changeTotalRows,
    changeOffset,
    changeSearchKey,
    changeStatus,
    fetchCustomer,
  } = useGetCustomer();

  const pageSize = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCustomer();
  }, [offset, textDelay, status]);

  const handlePageChange = (page: number) => {
    const newOffset = (page - 1) * pageSize;
    changeOffset(newOffset); // Cập nhật offset
  };

  const columns: ColumnType<any>[] = [
    {
      title: "Tên khách hàng",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Mã khách hàng",
      dataIndex: "customerCode",
      key: "customerCode",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Hành động",
      key: "action",
      fixed: "right",
      render: () => (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>Thao tác</Space>
          </a>
        </Dropdown>
      ),
    },
  ];

  const items: MenuProps["items"] = [
    {
      label: <Button>Sửa</Button>,
      key: "0",
    },
    {
      label: <Button>Xóa</Button>,
      key: "1",
    },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const showDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    // Thêm logic gọi API để lưu thông tin khách hàng
    fetchCustomer(); // Gọi lại API để cập nhật danh sách khách hàng
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-full relative">
      <div>
        <div className="header-main w-[90%] mx-auto">
          <div className="flex justify-between p-4">
            <div className="font-bold text-[25px]">Khách hàng</div>
            <Button type="primary" onClick={showModal}>
              Thêm mới
            </Button>
            {/* Modal thêm khách hàng */}
            <ModelAddCustomer
              isModalOpen={isModalOpen}
              handleOk={handleOk}
              handleCancel={handleCancel}
            />
          </div>
        </div>
        <div className="mx-auto w-[90%] flex justify-end mb-4">
          <Input
            placeholder="Tìm kiếm khách hàng"
            value={searchKey}
            onChange={(e) => changeSearchKey(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-1/3 mr-2"
          />
          <Button type="primary" onClick={showDrawer}>
            Bộ lọc
          </Button>
          <FilterCustomer
            open={drawerOpen}
            status={status}
            onClose={closeDrawer}
            onApply={fetchCustomer}
            onChangeStatus={changeStatus}
          />
        </div>
      </div>
      <div>
        <Table
          dataSource={listCustommer}
          columns={columns}
          scroll={{
            x: 900,
            y: 400,
          }}
          loading={loading}
          style={{ width: "90%", margin: "auto" }}
          pagination={{
            total: totalRows,
            pageSize,
            current: Math.floor(offset / pageSize) + 1,
            onChange: handlePageChange,
          }}
        />
      </div>
    </div>
  );
};

export default Customer;
