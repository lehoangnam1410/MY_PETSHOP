import React, { useState } from 'react'
import { ServiceTypeInterface } from '../Interface/InterfaceService';
import getService from '../service/Service/service';
interface GetServiceInterface{
    listService: ServiceTypeInterface[],
    fetchListService: () => void
}
const useGetService = ():GetServiceInterface => {
    const [listService,setListService] = useState<ServiceTypeInterface[]>([]);
    const fetchListService = async () => {
        try {
          const data = await getService();
          setListService(data.data.records);
        } catch (error) {
          console.error("Error fetching employee data:", error);
        }
      };
    return (
        {listService,fetchListService}
    )
}

export default useGetService