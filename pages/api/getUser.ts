const USER_API = "http://localhost:5001/api/v1/user";

interface User {
  email: string;
  password: string;
}

interface SignupUser extends User {
  fullname: string;
  rePassword: string;
}

async function getResult(path: string, headers: HeadersInit, body: string) {
  let response = await fetch(`${USER_API}${path}`, {
    method: "POST",
    headers,
    body,
  });

  if (response.ok) {
    const token = await response.text();
    return { success: true, token };
  }

  const errors = await response.json();
  return { success: false, errors };
}

export const signupStatus = async (user: SignupUser) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify(user);
  return getResult("/signup", headers, body);
};

export const loginStatus = async (user: User) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify(user);
  return getResult("/login", headers, body);
};

export const googleLoginStatus = async (token: string) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ token });
  return getResult("/google/login", headers, body);
};
