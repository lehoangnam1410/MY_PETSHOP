import { ServiceResponseInterface } from '../../Interface/InterfaceService';
import { ServiceResponse } from '../../Interface/InterfaceServiceSideBar';
import axios from '../axiosCustom';

const getService =  ():Promise<ServiceResponseInterface> => {
  return axios.get("/service-types", {
    headers: {
        "Content-Type": "application/json",
      }
  });
};

export default getService;
