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
const addEmployee = () =>{
    return axios.post(``,{
        headers:{
            "Content-Type": "application/json",
        }
    })
}
export {getEmployee,getEmployeeByLimitandOffet,searchEmployeeWithName,searchEmployeeWithNameAndStatus}