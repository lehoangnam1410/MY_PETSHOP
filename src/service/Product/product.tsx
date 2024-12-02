import axios from "../axiosCustom";

// lấy ra danh sách sản phẩm
const getAllProducts = () => {
    return axios.get(`/products`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// lấy ra chi tiết sản phẩm
const getDetailsProduct = (productCode: string) => {
    return axios.get(`/product/:${productCode}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// thêm sản phẩm
interface AddProductInterface {
    productName: string; // Tên sản phẩm
    description: string; // Mô tả ngắn gọn về sản phẩm
    descriptionDetail: string; // Mô tả chi tiết về sản phẩm
    images: string[]; // Danh sách ID hoặc URL hình ảnh của sản phẩm
    importPrice: number; // Giá nhập sản phẩm
    sellPrice: number; // Giá bán sản phẩm
    discount: number; // Số tiền giảm giá (nếu có)
    SKU: string; // Mã SKU (Stock Keeping Unit) duy nhất cho sản phẩm
    status: "ACTIVE" | "INACTIVE"; // Trạng thái hoạt động của sản phẩm
}

const addProduct = (data: AddProductInterface) => {
    return axios.post(`/product}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
// Sửa sản phẩm
interface UpdateProductInterface {
    productCode: string; // Mã sản phẩm duy nhất
    productName: string; // Tên sản phẩm
    description: string; // Mô tả ngắn gọn về sản phẩm
    descriptionDetail: string; // Mô tả chi tiết sản phẩm
    images: string[]; // Danh sách ID hoặc URL của hình ảnh sản phẩm
    importPrice: number; // Giá nhập của sản phẩm
    sellPrice: number; // Giá bán của sản phẩm
    discount: number; // Giá trị giảm giá (đơn vị: số tiền)
    SKU: string; // Mã SKU duy nhất để nhận diện sản phẩm
    status: "ACTIVE" | "INACTIVE"; // Trạng thái sản phẩm
  }
  
const updateProduct = (data:UpdateProductInterface) => {
    return axios.patch(`/product`, data,{
        headers: {
            "Content-Type": "application/json"
        }
    })
}

// Xóa sản phẩm

const deleteProduct = (productCode:string) => {
    return axios.delete(`/product:${productCode}`,{
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export {getAllProducts,getDetailsProduct,addProduct,updateProduct,deleteProduct}