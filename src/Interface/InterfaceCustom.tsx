// Interface for a single customer record
export interface CustomerRecordInterface {
    _id: string;
    customerCode: string;
    customerName: string;
    customerPhone: string;
    email: string;
    address: string;
    gender: "MALE" | "FEMALE"; // Assuming only these two genders
    createdTime: string; // UNIX timestamp as string
    updatedBy: string;
    status: "ACTIVE" | "INACTIVE"; // Assuming these are the only possible statuses
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number; // MongoDB version key
  }
  
  // Interface for pagination information
  export interface PaginationInfoInterface {
    totalRows: number;
    totalPages: number;
  }
  
  // Interface for the full API response
  export interface CustomerResponseInterface {
    errorCode: number;
    data: {
      records: CustomerRecordInterface[];
      pagination: PaginationInfoInterface;
    };
    traceId: string;
  }
  