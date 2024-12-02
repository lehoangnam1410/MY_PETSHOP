import axios from "../axiosCustom";
// lấy dữ liệu tất cả các pet
const getAllPet = () =>{
    return axios.get("/pets",{
        headers: {
            "Content-Type": "application/json"
          }
    });
}
// lấy dữ liệu chi tiết pet
const getDetailPet = (petCode:number) =>{
    return axios.get(`/pet/${petCode}`,{
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// thêm pet
interface AddPetInterface {
    customerCode: string;
    petName: string;
    typeCode: string;
    gender: "MALE" | "FEMALE";  // Giới tính có thể là MALE hoặc FEMALE
    birthDay: string;  // Ngày sinh ở dạng "YYYY-MM-DD"
    description: string;
    images: string[];  // Mảng chứa các ID của ảnh
    status: "ACTIVE" | "INACTIVE";  // Trạng thái có thể là ACTIVE hoặc INACTIVE
  }
const addPet = (data:AddPetInterface) =>{
    return axios.post("/pet",data,{
        headers: {
            "Content-Type": "application/json"
          }
    });
}
// Sửa pet
// {
//     "petCode": "34616432",
//     "customerCode": "00955207",
//     "petName": "Buddy",
//     "typeCode": "60234892",
//     "gender": "MALE",
//     "birthDay": "2020-05-15",
//     "description": "Friendly and energetic.",
//     "images": [
//         "6730f20e9e487f6ca0fec446"
//     ],
//     "status": "ACTIVE"
// }
interface PatchPetInterface {
    petCode: string;
    customerCode: string;
    petName: string;
    typeCode: string;
    gender: "MALE" | "FEMALE";  // Giới tính có thể là MALE hoặc FEMALE
    birthDay: string;  // Ngày sinh ở dạng "YYYY-MM-DD"
    description: string;
    images: string[];  // Mảng chứa các ID của ảnh
    status: "ACTIVE" | "INACTIVE";  // Trạng thái có thể là ACTIVE hoặc INACTIVE
  }
const updatePet = (data:PatchPetInterface) =>{
    return axios.patch("/pet",data,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}
// Xóa pet
const deletePet = (petCode:number) =>{
    return axios.delete(`/pet/${petCode}`,
    {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export {getAllPet,getDetailPet,addPet,updatePet,deletePet}