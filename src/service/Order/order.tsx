import axios from "../axiosCustom";
// lấy tất cả dữ liệu orders
const getOrder = () =>{
    return axios.get("/orders",{
        headers:{
            "Content-Type": "application/json"
        }
    })
}
// lấy chi tiết order 
const getDetailOrder = (orderCode:string) =>{
    return axios.get(`/orders/${orderCode}`,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}
// sửa order
// const patchOrder = () =>{
//     return axios.get
// }