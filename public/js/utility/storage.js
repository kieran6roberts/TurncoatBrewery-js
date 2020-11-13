export const getFromStorage = key => JSON.parse(localStorage.getItem(key));

export const saveToStorage = (key, value, lifetime = 36e5) => {
    const time = new Date().getTime();
    const result = {
        value,
        expiry: time + lifetime,
    };
    
    try {
        localStorage.setItem(key, JSON.stringify(result));
    } catch(err) {
        throw new Error(err);
    }
    };