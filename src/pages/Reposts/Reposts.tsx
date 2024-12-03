import { Button, Input, Pagination, Table } from "antd";
import { useState } from "react";

const Reposts = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const showDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  // Mơ đóng Model thêm order
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <div className="h-full">
      <div className="header-main w-[90%] mx-auto">
        <div className="flex justify-between p-4">
          <div className="font-bold text-[25px]">Thông báo</div>
          {/* Thêm mới order */}
          <Button type="primary" onClick={showModal}>
            Thêm mới
          </Button>

        </div>
        <div className="mx-auto w-[90%] flex justify-end mb-4">
          <Input
            placeholder="Tìm kiếm đơn hàng"

            className="border border-gray-300 rounded-md p-2 w-1/3 mr-2"
          />
          <Button type="primary" onClick={showDrawer}>
            Bộ lọc
          </Button>

        </div>
      </div>
      <div>
        <Table
          scroll={{
            x: 900,
            y: 400,
          }}
          style={{ width: "90%", margin: "auto" }}
          pagination={false}
          rowKey={(record) => record.userCode || ""}
        />
      </div>
      <div className="absolute bottom-0 w-[100%] bg-white flex items-center justify-between">
        <div>
          <span>

          </span>
        </div>
        <Pagination

        />
      </div>
    </div>
  )
}

export default Reposts