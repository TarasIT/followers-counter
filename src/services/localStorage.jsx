export const saveSubscribe = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const getSubscribe = key => {
  try {
    const subscribeState = localStorage.getItem(key);
    return subscribeState === null ? undefined : JSON.parse(subscribeState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
