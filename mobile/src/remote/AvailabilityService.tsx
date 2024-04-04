import axios from 'axios';
import {BASE_URL} from './Config';
import {assertIsError} from '../extension/ErrorExt';

export interface TimeSlotDto {
  startTime: string;
  endTime: string;
  isEnabled: boolean;
}

export interface DailyScheduleDto {
  [day: string]: TimeSlotDto;
}

export interface AvailabilityResponse {
  id: number;
  userId: number;
  username: string;
  userColor: string;
  durationStart: string;
  durationEnd: string;
  dailySchedule: DailyScheduleDto;
}

interface SetAvailabilityDto {
  userId: number;
  durationStart: string;
  durationEnd: string;
  dailySchedule: DailyScheduleDto;
}

class AvailabilityService {
  public async getAvailability(
    userId: number,
  ): Promise<AvailabilityResponse[] | null> {
    try {
      const response = await axios.get<AvailabilityResponse[]>(
        `${BASE_URL}/availability/${userId}`,
      );
      return response.data;
    } catch (error) {
      assertIsError(error);
      return null;
    }
  }

  public async setAvailability(
    dto: SetAvailabilityDto,
  ): Promise<AvailabilityResponse | null> {
    try {
      const response = await axios.post<AvailabilityResponse>(
        `${BASE_URL}/availability`,
        dto,
      );
      console.log('setAvailability response', response.data);
      return response.data;
    } catch (error) {
      assertIsError(error);
      return null;
    }
  }
}

const avaibilityService = new AvailabilityService();

export default avaibilityService;
