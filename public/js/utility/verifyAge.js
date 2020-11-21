import { saveToStorage } from "./storage.js";
import { toggleClasses } from "./toggleClasses.js";

const acceptBtn = document.querySelector(".btn--accept-js");
const rejectBtn = document.querySelector(".btn--reject-js");
const popup = document.querySelector(".popup-js");
const nav = document.querySelector(".nav");

const verifyAgeHandler = e => {
  switch (e.target) {
    case acceptBtn: 
      toggleClasses("show", 
                    nav,
                    popup, 
                    popup.firstElementChild, 
                    document.body);
      saveToStorage("AgeVerification", "verified", 36e5);
      break;
    case rejectBtn: 
      toggleClasses("hide", 
                      acceptBtn, 
                      rejectBtn);
      break;
    default:
      return;
  }
};

export {
  popup as popupModal,
  verifyAgeHandler,
};
