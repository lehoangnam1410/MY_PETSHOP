import { ServiceResponse } from '../../Interface/InterfaceServiceSideBar';
import axios from '../axiosCustom';

const getServiceActive =  ():Promise<ServiceResponse> => {
  return axios.get("/service-types/active", {
    headers: {
        "Content-Type": "application/json",
      }
  });
};

export default getServiceActive;
