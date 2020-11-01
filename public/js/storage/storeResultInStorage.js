const storeResultinStorage = (key, value, lifetime = 36e5) => {
  const time = new Date().getTime();

  const result = {
    value,
    expiry: time + lifetime,
  };

  return localStorage.setItem(key, JSON.stringify(result)) || null;
};

export default storeResultinStorage;