export interface ServiceTypeInterface  {
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
    image?: string;
    iconInfo: IconInfoInterface ;
    imagesInfo?: IconInfoInterface  | null;
  }
  
  export interface IconInfoInterface  {
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
  
  export interface PaginationInterface  {
    totalRows: number;
    totalPages: number;
  }
  
  export interface ServiceResponseInterface  {
    errorCode: number;
    data: {
      records: ServiceTypeInterface [];
      pagination: PaginationInterface ;
    };
    traceId: string;
  }
  