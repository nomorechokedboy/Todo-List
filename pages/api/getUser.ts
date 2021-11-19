import * as axios from "axios";
import { USER_API } from "../../config";

interface User {
  email: string;
  password: string;
}

interface SignupUser extends User {
  fullname: string;
  rePassword: string;
}

interface APIOptions {
  path: string;
  data: Object;
}

interface APIResult {
  success: boolean;
  token?: string;
  error?: string;
}

async function getResult({ path, data }: APIOptions): Promise<APIResult> {
  try {
    const response: axios.AxiosResponse = await axios.default.post(
      `${USER_API}${path}`,
      {
        ...data,
      }
    );

    const token = response.data;
    return { success: true, token };
  } catch (error) {
    const message: string = Object.values(error.response.data)[0][0];
    console.error(error);
    return { success: false, error: message };
  }
}

export async function signupStatus(user: SignupUser): Promise<APIResult> {
  return getResult({ path: "/signup", data: user });
}

export async function loginStatus(user: User): Promise<APIResult> {
  return getResult({ path: "/login", data: user });
}

export async function googleLoginStatus(token: string): Promise<APIResult> {
  return getResult({ path: "/google/login", data: { token } });
}
