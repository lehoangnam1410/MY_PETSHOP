import React, { useState } from 'react'
import { CustomerRecordInterface } from '../Interface/InterfaceCustom';
import { useDebounce } from './useDebounce';
import { searchCustomerWithNameAndStatus } from '../service/Customer/customer';
interface useGetCustomerInterface  {
  listCustommer: CustomerRecordInterface[];
  totalRows: number;
  offset: number;
  loading: boolean;
  searchKey: string;
  textDelay: string;
  status: string;
  changeTotalRows: (value: number) => void;
  changeOffset: (value: number) => void;
  changeSearchKey: (value: string) => void;
  changeStatus: (value: string) => void;
  fetchCustomer: () => void;
}
const useGetCustomer = ():useGetCustomerInterface => {
  const [listCustommer, setListCustomer] = useState<CustomerRecordInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalRows, setTotalRows] = useState<number>(0); // Tổng số lượng nhân viên
  const [offset, setOffset] = useState<number>(0); // Offset cho phân trang
  const [searchKey, setSearchKey] = useState<string>(""); // Từ khóa tìm kiếm
  const [status, setStatus] = useState<string>("ACTIVE"); // Trạng thái mặc định là "Hoạt động"
  const pageSize = 10;
  const textDelay = useDebounce(searchKey, 500);
  const changeTotalRows = (value: number) => {
    setTotalRows(value)
  }
  const changeOffset = (value: number) => {
    setOffset(value);
  }
  const changeSearchKey = (value: string) => {
    setSearchKey(value);
  }
  const changeStatus = (value: string) => {
    setStatus(value);
  }
  const fetchCustomer = async () => {
    setLoading(true);
    try {
      const data = await searchCustomerWithNameAndStatus(
        pageSize,
        offset,
        textDelay,
        status
      );
      setListCustomer(data.data.records);
      setTotalRows(data.data.pagination.totalRows || 0);
      console.log(data);
    }
    catch (error) {
      setLoading(false);
    }
    finally {
      setLoading(false)
    }
  }
  return (
    { listCustommer,totalRows,offset, loading,searchKey,textDelay,status,
      changeTotalRows,changeOffset,changeSearchKey,changeStatus,
      fetchCustomer
    }
  )
}

export default useGetCustomer