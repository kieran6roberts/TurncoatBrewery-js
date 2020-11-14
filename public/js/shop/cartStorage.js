import { getFromStorage, saveToStorage } from "../utility/storage.js";

const cartStorage = ( ...args ) => {
    const storedItems = getFromStorage("CartItems");
    storedItems.push(...args);
    saveToStorage("CartItems", storedItems);
}

export default cartStorage;