import * as axios from "axios";

const USER_API = "http://localhost:5001/api/v1/user";

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

async function getResult({ path, data }: APIOptions): Promise<string[]> {
  try {
    const response: axios.AxiosResponse = await axios.default.post(
      `${USER_API}${path}`,
      {
        ...data,
      }
    );

    const token = response.data;
    return [token, null];
  } catch (error) {
    const message: string = Object.values(error.response.data)[0][0];
    return [null, message];
  }
}

export async function signupStatus(user: SignupUser): Promise<string[]> {
  return getResult({ path: "/signup", data: user });
}

export async function loginStatus(user: User): Promise<string[]> {
  return getResult({ path: "/login", data: user });
}

export async function googleLoginStatus(token: string): Promise<string[]> {
  return getResult({ path: "/google/login", data: { token } });
}
