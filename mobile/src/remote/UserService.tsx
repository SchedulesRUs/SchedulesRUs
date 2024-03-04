import axios from 'axios';
import { BASE_URL } from './Config';
import { assertIsError } from '../extension/ErrorExt';

interface LoginResponse {
  success: boolean;
  error: string;
  username: string;
  userid: number;
}

interface UserInfoResponse {
  id: number;
  username: string;
  email: string;
  role: string;
  image: string;
}

class UserService {

  public async authenticate(
    username: string,
    password: string,
  ): Promise<LoginResponse> {
    try {
      const response = await axios.get<LoginResponse>(
        `${BASE_URL}/user/login?username=${username}&password=${password}`,
      );
      return response.data;
    } catch (error) {
      assertIsError(error);
      return {
        success: false,
        error: error.message,
        username: '',
        userid: -1
      };
    }
  }

  public async getUserInfo(
    userId: number,
  ): Promise<UserInfoResponse | null> {
    try {
      const response = await axios.get<UserInfoResponse>(
        `${BASE_URL}/user/getuser?id=${userId}`,
      );
      return response.data;
    } catch (error) {
      assertIsError(error);
      return null;
    }
  }
}

const userService = new UserService();

export default userService;
