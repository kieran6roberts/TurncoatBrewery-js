const cartStorage = ( ...args ) => {
    const storedItems = JSON.parse(localStorage.getItem("CartItems"));
    if (!storedItems) {
      const items = [...args];
      localStorage.setItem("CartItems", JSON.stringify(items));
      localStorage.setItem("CartOverlay", JSON.stringify(items));
    } else {
      storedItems.push(...args);
      localStorage.setItem("CartItems", JSON.stringify(storedItems));
    }
}

export default cartStorage;