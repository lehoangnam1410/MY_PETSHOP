import axios from "../axiosCustom";
//Lấy tất cả khuyến mại
const getPromotions = () =>{
    return axios.get("/discounts",{
        headers:{
            "Content-Type": "application/json" 
        }
    })
}
//lấy chi tiết khuyến mại
const getDetailPromotion = (discountCode:string) =>{
    return axios.get(`/discount/:${discountCode}`,{
        headers:{
            "Content-Type": "application/json" 
        }
    })
}

// thêm khuyến mại
interface AddPromotionInterface {
    discountName: string; // Tên của chương trình giảm giá
    description: string; // Mô tả về chương trình giảm giá
    image: string; // ID hoặc URL của hình ảnh đại diện
    rateType: "PERCENT" | "FIXED"; // Loại giảm giá: phần trăm hoặc cố định
    discountValue: number; // Giá trị giảm giá (20% hoặc số tiền cụ thể)
    activeFrom: number; // Thời gian bắt đầu (Unix timestamp)
    activeTo: number; // Thời gian kết thúc (Unix timestamp)
    serviceTypeCodes: string[]; // Danh sách mã dịch vụ áp dụng
    status: "ACTIVE" | "INACTIVE"; // Trạng thái của chương trình
  }
  
const postPromotion = (data:AddPromotionInterface) =>{
    return axios.post(`/discount`,data,{
        headers:{
            "Content-Type": "application/json" 
        }
    })
}
// Sửa khuyến mại
interface UpdatePromotionInterface {
    discountCode: string; // Mã giảm giá duy nhất
    discountName: string; // Tên của chương trình giảm giá
    description: string; // Mô tả chi tiết về chương trình
    image: string; // ID hoặc URL của hình ảnh đại diện
    rateType: "PERCENT" | "FIXED"; // Loại giảm giá: phần trăm hoặc số tiền cố định
    discountValue: number; // Giá trị giảm giá (ví dụ: 20% hoặc một số tiền cụ thể)
    activeFrom: number; // Thời gian bắt đầu (dạng Unix timestamp)
    activeTo: number; // Thời gian kết thúc (dạng Unix timestamp)
    serviceTypeCodes: string[]; // Danh sách mã dịch vụ áp dụng
    status: "ACTIVE" | "INACTIVE"; // Trạng thái hoạt động của giảm giá
  }
const updatePromotion = (data:UpdatePromotionInterface) =>{
    return axios.patch(`/discount`,{
        headers:{
            "Content-Type": "application/json" 
        }
    })
}
// xóa khuyến mại 
const deletePromotion = (discountCode:string) =>{
    return axios.delete(`/discount/:${discountCode}`,{
        headers:{
            "Content-Type": "application/json" 
        }
    })
}

export {getPromotions,getDetailPromotion,postPromotion,deletePromotion,updatePromotion}