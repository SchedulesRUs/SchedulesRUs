import axios from 'axios';
import { BASE_URL } from './Config';
import { assertIsError } from '../extension/ErrorExt';

export interface BookOffResponse {
  id: number;
  user_id: number;
  date: string;
  start: string;
  end: string;
  reason: string;
}

class BookOffService {

  public async getBookOffs(): Promise<BookOffResponse[] | null> {
    try {
      const response = await axios.get<BookOffResponse[]>(
        `${BASE_URL}/request`,
      );
      return response.data;
    } catch (error) {
      assertIsError(error);
      return null;
    }
  }

  public async requestBookOff(
    userId: number,
    date: string,
    start: string,
    end: string,
    reason: string
  ): Promise<BookOffResponse | null> {
    try {
      const response = await axios.post<BookOffResponse>(
        `${BASE_URL}/request`,
        {
          user_id: userId,
          date: date,
          start: start,
          end: end,
          reason: reason
        }
      );
      return response.data;
    } catch (error) {
      assertIsError(error);
      return null;
    }
  }
}

const bookOffService = new BookOffService();

export default bookOffService;
