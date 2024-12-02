import { Form, Input, Modal, Select, Switch } from 'antd'
import { ServiceTypeInterface } from '../../Interface/InterfaceService'

const ModelAddEmploy = ({isModalOpen,handleOk,handleCancel,listService}:
    {isModalOpen:boolean, handleOk:()=>void,handleCancel:()=>void,listService: ServiceTypeInterface[]}) => {
    return (
        <Modal
            title="Thêm mới nhân viên"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Thêm mới"
            cancelText="Hủy"
        >
            <Form layout="vertical">
                <Form.Item
                    label="Dịch vụ hệ thống"
                    name="systemService"
                    rules={[{ required: true, message: "Vui lòng chọn dịch vụ hệ thống!" }]}
                >
                    <Select placeholder="Dịch vụ hệ thống">
                        {listService.map((service) => {
                            return (
                                <Select.Option key={service._id} value={service._id}>{service.serviceTypeName}</Select.Option>
                            )
                        })}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Tên nhân viên"
                    name="employeeName"
                    rules={[{ required: true, message: "Vui lòng nhập tên nhân viên!" }]}
                >
                    <Input placeholder="Tên nhân viên" />
                </Form.Item>

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

                <Form.Item
                    label="Trạng thái"
                    name="status"
                    valuePropName="checked"
                    rules={[{ required: true, message: "Vui lòng chọn trạng thái!" }]}
                >
                <Switch />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModelAddEmploy