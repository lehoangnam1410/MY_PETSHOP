// Interface cho thông tin hình ảnh
interface ImageInfo {
    _id: string;
    publicUrl: string;
    size: number;
    mimetype: string;
    uploader: string;
    tag: string;
    bucketName: string;
    filename: string;
    originalname: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  // Interface cho icon thông tin
  interface IconInfo extends ImageInfo {}
  
  // Interface cho từng mục service (dịch vụ)
  interface ServiceItem {
    _id: string;
    serviceTypeCode: string;
    serviceTypeName: string;
    descriptions: string;
    group: string;
    icon: string;
    updatedBy: string;
    isDefault: boolean;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    image?: string; // Có thể null
    imagesInfo?: ImageInfo | null; // Có thể null
    iconInfo: IconInfo;
    id: string;
  }
  
  // Interface cho response từ API
 export interface ServiceResponse {
    errorCode: number;
    data: ServiceItem[];
    traceId: string;
  }
  