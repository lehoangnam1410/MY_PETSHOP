import axios from "../axiosCustom";
import { ApiResponseEmployeeInterface } from "../../Interface/InterfaceEmployee";
const getEmployee = () : Promise<ApiResponseEmployeeInterface> =>{
    return axios.get("/users",{
        headers: {
            "Content-Type": "application/json"
          }
    });
}
const getEmployeeByLimitandOffet = (limit:number,offset:number) : Promise<ApiResponseEmployeeInterface> =>{
    return axios.get(`/users?limit=${limit}&offset=${offset}`,{
        headers: {
            "Content-Type": "application/json"
          }
    });
}
const searchEmployeeWithName = (limit:number,offset:number,key:string)  =>{
    return axios.get(`/users?limit=${limit}&offset=${offset}&userName[contains]=${key}`,{
        headers: {
            "Content-Type": "application/json"
          }
    });
}

const searchEmployeeWithNameAndStatus = (limit:number,offset:number,key:string,status:string)  =>{
    return axios.get(`/users?limit=${limit}&offset=${offset}&userName[contains]=${key}&status[eq]=${status}`,{
        headers: {
            "Content-Type": "application/json",
          }
    });
}
interface AddEmpolyeeInterface {
    userName: string;
    email: string;
    avatar: string;  // ID của avatar (hoặc có thể là URL nếu cần)
    role: 'MEMBER' | 'ADMIN' | 'GUEST';  // Giới hạn giá trị role nếu cần
    status: 'ACTIVE' | 'INACTIVE';  // Giới hạn giá trị status nếu cần
  }
const addEmployee = (data:AddEmpolyeeInterface) =>{
    return axios.post(`user`,data,{
        headers:{
            "Content-Type": "application/json",
        }
    })
}
interface PatchEmployeeInterface {
    userCode: string;
    userName: string;
    avatar: string;  // ID của avatar (hoặc có thể là URL nếu cần)
    role: 'MEMBER' | 'ADMIN' | 'GUEST';  // Giới hạn giá trị role nếu cần
    status: 'ACTIVE' | 'INACTIVE';  // Giới hạn giá trị status nếu cần
  }
const updateEmployee = (data:PatchEmployeeInterface) =>{
    return axios.patch(`user`,data,{
        headers:{
            "Content-Type": "application/json",
        }
    })
}
export {getEmployee,getEmployeeByLimitandOffet,searchEmployeeWithName,searchEmployeeWithNameAndStatus
,addEmployee,updateEmployee
}