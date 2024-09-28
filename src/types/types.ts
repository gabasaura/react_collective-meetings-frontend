// types.ts
export interface MeetingData {
    title: string;
    creator_name: string;
    creator_email: string;
    description?: string;
  }
  
  export interface GuestData {
    name: string;
    email: string;
  }
  
  export interface ApiResponse<T> {
    message: string;
    data: T;
  }
  
  export interface Meeting {
    id: number;
    title: string;
    description?: string;
    creator_id: number;
    password_hash: string;
  }
  