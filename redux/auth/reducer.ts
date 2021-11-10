import { SET_AUTH } from "./action";

interface authAction {
  type: string;
  payload: string;
}

/**
 * @param key The key in storage
 */
const getStorageWithExpiry = (key: string) => {
  const itemStr = localStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage and return null
    localStorage.removeItem(key);

    return null;
  }
  return item.value;
};

// check if we are in browser or server 'cause server doesn't have localStorage
const auth_token =
  typeof window !== "undefined" ? getStorageWithExpiry("token") : null;

export const authReducer = (token = auth_token, action: authAction) => {
  switch (action.type) {
    case SET_AUTH:
      return action.payload;
    default:
      return token;
  }
};
