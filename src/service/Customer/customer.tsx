import { CustomerRecordInterface, CustomerResponseInterface } from "../../Interface/InterfaceCustom";
import axios from "../axiosCustom";
const getCustomer = () : Promise<CustomerResponseInterface> =>{
    return axios.get("/customers",{
        headers: {
            "Content-Type": "application/json"
          }
    });
}
const getCustomerByLimitandOffet = (limit:number,offset:number) : Promise<CustomerResponseInterface> =>{
    return axios.get(`/customers?limit=${limit}&offset=${offset}`,{
        headers: {
            "Content-Type": "application/json"
          }
    });
}

const searchCustomerWithNameAndStatus = (limit:number,offset:number,key:string,status:string)  =>{
    return axios.get(`/customers?limit=${limit}&offset=${offset}&customerName[contains]=${key}&status[eq]=${status}`,{
        headers: {
            "Content-Type": "application/json"
          }
    });
}
const getDetailCustomer = (customerCode:string) =>{
    return axios.get(`/customers/:${customerCode}`,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}
// {
//     "customerName": "Jane Doe",
//     "email": "jane.doe@example.com",
//     "customerPhone": "0963305122",
//     "address": "123 Main St, Springfield",
//     "gender": "FEMALE",
//     "status": "ACTIVE"
//   }
interface DataAddCustomerInterface {
    customer:string,
    email:string,
    customerPhone:string,
    address:string,
    gender: string,
    status:string
}
const addCustomer = (data: DataAddCustomerInterface) =>{
    return axios.post(`/customers`,data,{
        headers:{
            "Content-Type": "application/json" 
        }
    })
}
const deleteCustomer = (customerCode:string) =>{
    return axios.delete(`/customers/:${customerCode}`,{
        headers:{
            "Content-Type": "application/json"
        }
    });
}
export {getCustomer,getCustomerByLimitandOffet,searchCustomerWithNameAndStatus,getDetailCustomer,deleteCustomer,addCustomer}