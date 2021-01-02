import { saveToStorage, getFromStorage } from "../../../public/js/utility/storage.js";

beforeEach( () => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn( () => null),
      setItem: jest.fn( () => null),
    },
    writable: true
  })
});

describe("save item to local storage", () => {
  test("call without key or value throw error", () => {
    expect(saveToStorage).toThrow("ensure item has key and value");
  });

  test("result calls local storage", () => {
    const key = "key", value = "value", expiry = 36e5;
    saveToStorage(key, value, expiry);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    
    saveToStorage(key, value, expiry);
    saveToStorage(key, value, expiry);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(3);
  });
});

describe("get item from local storage", () => {
  test("result calls local storage", () => {
    const key = "key";
    getFromStorage(key);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});