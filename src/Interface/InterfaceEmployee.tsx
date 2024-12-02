export interface AvatarInfoInterface {
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
  
  export interface ServiceTypeInfoInterface {
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
    image?: string; // Optional, because not all records have this field
  }
  
  export interface EmployeeInterface {
    _id: string;
    userCode: string;
    userName: string;
    email: string;
    role: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    avatar: string;
    possition: string;
    updatedBy: string;
    serviceTypeInfo: ServiceTypeInfoInterface | null;
    avatarInfo: AvatarInfoInterface | null;
  }
  
  export interface PaginationInterface {
    totalRows: number;
    totalPages: number;
  }
  
  export interface ApiResponseEmployeeInterface {
    errorCode: number;
    data: {
      records: EmployeeInterface[];
      pagination: PaginationInterface;
    };
    traceId: string;
  }
  