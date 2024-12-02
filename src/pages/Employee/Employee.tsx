import { useEffect, useState } from "react";
import {  Button, Input, Table, Pagination, Dropdown, Space, MenuProps } from 'antd';
import { EmployeeInterface } from "../../Interface/InterfaceEmployee";
import { ColumnType } from "antd/es/table";
import useGetService from "../../hooks/Service/useGetService";
import useGetEmployee from "../../hooks/Employee/useGetEmplyee";
import ModelAddEmploy from "../../components/Employee/ModelAddEmploy";
import FilterEmployee from "../../components/Employee/FilterEmployee";
const Employee = () => {
  const { listEmployee, totalRows, offset, loading, searchKey, textDelay, status,
    changeTotalRows, changeOffset, changeSearchKey, changeStatus,
    fetchListEmployee } = useGetEmployee();
  const pageSize = 10; // Số lượng phần tử mỗi trang
  // open model thêm
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { listService, fetchListService } = useGetService();
  // Lấy dữ liệu mỗi khi offset, searchKey hoặc status thay đổi
  useEffect(() => {
    fetchListEmployee();
  }, [offset, textDelay, status]);
  useEffect(() => {
    fetchListService();
  }, [])

  // Cập nhật offset khi trang thay đổi
  const handlePageChange = (page: number) => {
    const newOffset = (page - 1) * pageSize;
    changeOffset(newOffset); // Cập nhật offset
  };

  // Cột dữ liệu cho bảng
  const columns: ColumnType<Partial<EmployeeInterface>>[] = [
    {
      title: "Mã nhân viên",
      dataIndex: "userCode",
      key: "userCode",
    },
    {
      title: "Tên nhân viên",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Loại dịch vụ",
      dataIndex: "serviceTypeInfo",
      key: "serviceTypeName",
      render: (serviceTypeInfo: { serviceTypeName: string }) =>
        serviceTypeInfo?.serviceTypeName || "",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => {
        const date = new Date(createdAt);
        return date.toLocaleDateString("vi-VN");
      },
    },
    {
      title: "Tổng đơn hàng",
      key: "totalOrders",
      render: () => "Không có dữ liệu", // Thay thế nếu chưa có logic xử lý
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        return status === "ACTIVE" ? "Đang hoạt động" : "Không hoạt động";
      },
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

  // Quản lý mở và đóng bộ lọc
  const [drawerOpen, setDrawerOpen] = useState(false);
  const showDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  // Mơ đóng Model thêm nhân viên 
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-full relative">
      <div>
        <div className="header-main w-[90%] mx-auto">
          <div className="flex justify-between p-4">
            <div className="font-bold text-[25px]">Nhân viên</div>
            {/* Thêm mới nhân viên */}
            <Button type="primary" onClick={showModal}>
              Thêm mới
            </Button>
            <ModelAddEmploy isModalOpen={isModalOpen}
              handleOk={handleOk} handleCancel={handleCancel}
              listService={listService}
            />
          </div>
        </div>
        <div className="mx-auto w-[90%] flex justify-end mb-4">
          <Input
            placeholder="Tìm kiếm nhân viên"
            value={searchKey}
            onChange={(e) => changeSearchKey(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-1/3 mr-2"
          />
          <Button type="primary" onClick={showDrawer}>
            Bộ lọc
          </Button>
          <FilterEmployee
            open={drawerOpen}
            status={status}
            onClose={closeDrawer}
            onApply={fetchListEmployee}
            onChangeStatus={changeStatus}
          />
        </div>
      </div>
      <div>
        <Table
          dataSource={listEmployee}
          columns={columns}
          scroll={{
            x: 900,
            y: 400,
          }}
          loading={loading}
          style={{ width: "90%", margin: "auto" }}
          pagination={false}
          rowKey={(record) => record.userCode || ""}
        />
      </div>
      <div className="absolute bottom-0 w-[100%] bg-white flex items-center justify-between">
        <div>
          <span>
            Hiển thị từ {offset + 1} đến{" "}
            {offset + pageSize > totalRows ? totalRows : offset + pageSize}
          </span>
        </div>
        <Pagination
          current={Math.floor(offset / pageSize) + 1}
          pageSize={pageSize}
          total={totalRows}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Employee;
