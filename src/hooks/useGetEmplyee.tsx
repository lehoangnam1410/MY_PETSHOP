import React, { useState } from 'react'
import { EmployeeInterface } from '../Interface/InterfaceEmployee';
import { searchEmployeeWithNameAndStatus } from '../service/Employee/employee';
import { useDebounce } from './useDebounce';
interface UseEmployeeInterface {
    listEmployee: EmployeeInterface[];
    totalRows: number;
    offset: number;
    loading: boolean;
    searchKey:string;
    textDelay:string;
    status:string;
    changeTotalRows: (value: number) => void;
    changeOffset: (value: number) => void;
    changeSearchKey: (value: string) => void;
    changeStatus: (value: string) => void;
    fetchListEmployee: () => void;
}
const useGetEmployee = (): UseEmployeeInterface => {
    const token = localStorage.getItem("accessToken") || "";
    const [listEmployee, setListEmployee] = useState<EmployeeInterface[]>([]);
    const [totalRows, setTotalRows] = useState<number>(0); // Tổng số lượng nhân viên
    const [offset, setOffset] = useState<number>(0); // Offset cho phân trang
    const [loading, setLoading] = useState<boolean>(false); // Loading state
    const [searchKey, setSearchKey] = useState<string>(""); // Từ khóa tìm kiếm
    const [status, setStatus] = useState<string>("ACTIVE"); // Trạng thái mặc định là "Hoạt động"
    const pageSize = 10;
    const textDelay = useDebounce(searchKey,500);
    const changeTotalRows = (value:number) =>{
        setTotalRows(value)
    }
    const changeOffset = (value:number) =>{
        setOffset(value);
    }
    const changeSearchKey = (value:string) =>{
        setSearchKey(value);
    }
    const changeStatus = (value:string) =>{
        setStatus(value);
    }
    const fetchListEmployee = async () => {
        setLoading(true);
        try {
          const data = await searchEmployeeWithNameAndStatus(
            pageSize,
            offset,
            textDelay,
            status
          );
          setListEmployee(data.data.records || []);
          setTotalRows(data.data.pagination.totalRows || 0);
          console.log(textDelay);
        } catch (error) {
          console.error("Error fetching employee data:", error);
        } finally {
          setLoading(false);
        }
      };
    return (
        {listEmployee,totalRows,offset,loading,searchKey,textDelay,status,
        changeTotalRows,changeOffset,changeSearchKey,changeStatus,
        fetchListEmployee}
    )
}

export default useGetEmployee