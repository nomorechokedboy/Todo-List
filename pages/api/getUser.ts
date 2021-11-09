const USER_API = "http://localhost:5001/api/v1/user";

interface User {
  email: string;
  password: string;
}

interface SignupUser extends User {
  fullname: string;
  rePassword: string;
}

async function getResult(user: User | SignupUser, path: string) {
  let response = await fetch(`${USER_API}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    const token = await response.text();
    return { success: true, token };
  }

  const errors = await response.json();
  return { success: false, errors };
}

export const signupStatus = async (user: SignupUser) => {
  return getResult(user, "/signup");
};

export const loginStatus = async (user: User) => {
  return getResult(user, "/login");
};
