import axios from 'axios';
import { baseUrl } from './ServiceConfig';
import { ScheduleResponse } from '../model/response/ScheduleResponse';

export async function getSchedule() {
    try {
        const response = await axios.get<ScheduleResponse[]>(`${baseUrl}/ScheduleInfo`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
        return []
    }
}