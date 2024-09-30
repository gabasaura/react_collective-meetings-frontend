import axios from 'axios';
import { MeetingData, GuestData, ApiResponse, Meeting } from '../types/types';

// Crear una reunión
export const createMeeting = async (meetingData: MeetingData): Promise<Meeting> => {
    try {
        const response = await axios.post<ApiResponse<Meeting>>('/meetings', meetingData);
        return response.data.data; // Assuming data structure contains the meeting info under "data"
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error creating meeting');
    }
};

// Obtener todas las reuniones
export const getAllMeetings = async (): Promise<Meeting[]> => { // Specify return type
    try {
        const response = await axios.get<ApiResponse<Meeting[]>>('/meetings');
        return response.data.data; // Assuming data structure contains the meetings under "data"
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching meetings');
    }
};

// Añadir un invitado a una reunión
export const addGuestToMeeting = async (meetingId: number, guestData: GuestData): Promise<Meeting> => { // Specify guestData type and return type
    try {
        const response = await axios.post<ApiResponse<Meeting>>(`/meetings/${meetingId}/add_guest`, guestData);
        return response.data.data; // Assuming data structure contains the updated meeting under "data"
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error adding guest');
    }
};
