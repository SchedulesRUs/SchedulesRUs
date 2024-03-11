import axios from 'axios';
import {ScheduleResponse} from '../model/response/ScheduleResponse';
import {BASE_URL} from './Config';

export async function getSchedule() {
  try {
    const response = await axios.get<ScheduleResponse[]>(
      `${BASE_URL}/ScheduleInfo`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
