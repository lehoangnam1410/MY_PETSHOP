import axios from "../axiosCustom";

const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);  // "file" là key trong form-data, file là đối tượng file bạn muốn upload

    return axios.post("/user/upload-file", formData, {
        headers: {
            "Content-Type": "multipart/form-data"  // Đảm bảo sử dụng multipart/form-data
        }
    });
};
