const checkForServer = () => {
  const IS_SERVER = window === undefined;
  if (IS_SERVER) {
    throw new Error("Error: attempting to access local storage on server");
  }
};

export const setInStorage = (key: string, value: unknown) => {
  checkForServer();

  try {
    const valueString = JSON.stringify(value);
    sessionStorage.setItem(key, valueString);
  } catch (e) {
    console.error(e);
  }
};

export const getFromStorage = <T>(
  key: string,
  serializer?: (value: string) => T
): T | null => {
  checkForServer();

  try {
    const value = sessionStorage.getItem(key);
    if (!value) return null;

    return serializer ? serializer(value) : (JSON.parse(value) as T);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const deleteFromStorage = (key: string) => {
  checkForServer();

  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};
