export const getFromStorage = key => JSON.parse(localStorage.getItem(key));

export const saveToStorage = (key, value, lifetime = null) => {
    if (!key || !value) throw new Error("ensure item has key and value");

    const time = new Date().getTime();

    if (lifetime) {
        const result = {
            value,
            expiry: time + lifetime,
        };
        localStorage.setItem(key, JSON.stringify(result));
        
    } else {
        localStorage.setItem(key, JSON.stringify(value));
        }
    };