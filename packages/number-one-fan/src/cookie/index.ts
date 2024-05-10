export const getFromLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') return window?.localStorage?.getItem(key);
};
export const setToLocalStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') window?.localStorage?.setItem(key, value);
};
