import axios from "../axiosCustom";
// lấy tất cả dữ liệu orders
const getOrder = () => {
    return axios.get("/orders", {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
//searchOrder
const searchOrderWithNameAndStatus = (limit:number,offset:number,key:string,status:string)  =>{
    return axios.get(`/orders?limit=${limit}&offset=${offset}&userName[contains]=${key}&status[eq]=${status}`,{
        headers: {
            "Content-Type": "application/json",
          }
    });
}
// lấy chi tiết order 
const getDetailOrder = (orderCode: string) => {
    return axios.get(`/orders/${orderCode}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// thêm order

interface AddOrderInterface {
    customerCode: string;
    petCode: string;
    deliveryTime: string;  // Dạng "YYYY-MM-DDTHH:mm:ssZ"
    receiptTime: string;   // Dạng "YYYY-MM-DDTHH:mm:ssZ"
    deliveryAddress: string;
    receiptAddress: string;
    staffCode: string;
    serviceCode: string;
    duration: number;  // Thời gian giao hàng (số giờ)
    tax: number;  // Thuế tính trên dịch vụ
    note: string;  // Ghi chú
    attachFile: string;  // ID của file đính kèm
    paymentStatus: "PAID" | "UNPAID";  // Trạng thái thanh toán có thể là PAID hoặc UNPAID
}
const addOrder = (data:AddOrderInterface) => {
    return axios.post("/order",data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// sửa order
interface UpdateOrderInterface {
    orderCode: string;      // Mã đơn hàng
    customerCode: string;   // Mã khách hàng
    petCode: string;        // Mã thú cưng
    deliveryTime: string;   // Thời gian giao hàng (ISO 8601 format)
    receiptTime: string;    // Thời gian nhận hàng (ISO 8601 format)
    deliveryAddress: string; // Địa chỉ giao hàng
    receiptAddress: string;  // Địa chỉ nhận hàng
    staffCode: string;      // Mã nhân viên
    serviceCode: string;    // Mã dịch vụ
    duration: number;       // Thời gian giao hàng (số giờ)
    tax: number;            // Thuế tính trên dịch vụ
    note: string;           // Ghi chú
    attachFile: string;     // ID của file đính kèm
    paymentStatus: "PAID" | "UNPAID";  // Trạng thái thanh toán
    orderStatus: "COMPLETED" | "PENDING" | "CANCELLED";  // Trạng thái đơn hàng
}
const patchOrder = (data:UpdateOrderInterface) => {
    return axios.patch("/order", data,{
        headers: {
            "Content-Type": "application/json"
        }
    })
}
export {getOrder, getDetailOrder,addOrder,patchOrder}