/**
 * setStorageWithExpiry works like localStorage.setItem() but with expiry time
 * @param key The key in storage
 * @param value The item need to store
 * @param ttl The time expire in millisecond
 */
export const setStorageWithExpiry = (
  key: string,
  value: string,
  ttl: number
) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

/**
 * getStorageWithExpiry works like localStorage.getItem() but with expiry time
 * @param key The key in storage
 */
export const getStorageWithExpiry = (key: string) => {
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
