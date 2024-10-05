import axios from 'axios';
import { MeetingData, GuestData, ApiResponse, Meeting } from '../types/types';

// Crear una nueva reunión
export const createMeeting = async (meetingData: MeetingData): Promise<Meeting> => {
    try {
        const response = await axios.post<ApiResponse<Meeting>>('/meetings', meetingData);
        return response.data.data; // Estructura asumida
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error creating meeting');
    }
};

// Entrar a una reunión existente
export const enterMeeting = async (meetingIdOrHash: string): Promise<Meeting> => { // Puede ser ID o Hash
    try {
        const response = await axios.get<ApiResponse<Meeting>>(`/meetings/${meetingIdOrHash}`);
        return response.data.data; // Estructura asumida
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error entering meeting');
    }
};


// Obtener todas las reuniones
export const getAllMeetings = async (): Promise<Meeting[]> => {
    try {
        const response = await axios.get<ApiResponse<Meeting[]>>('/meetings');
        return response.data.data; // Estructura asumida
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error fetching meetings');
    }
};

// Añadir un invitado a una reunión
export const addGuestToMeeting = async (meetingId: number, guestData: GuestData): Promise<Meeting> => {
    try {
        const response = await axios.post<ApiResponse<Meeting>>(`/meetings/${meetingId}/add_guest`, guestData);
        return response.data.data; // Estructura asumida
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Error adding guest');
    }
};
