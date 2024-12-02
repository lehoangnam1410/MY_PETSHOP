import axios from "../axiosCustom";
const getProfile = ()  =>{
    return axios.get("/user/profile",{
        headers: {
            "Content-Type": "application/json"
          }
    });
}