import storeResultinStorage from "./storeResultInStorage.js";

const acceptBtn = document.querySelector(".btn--accept-js");
const rejectBtn = document.querySelector(".btn--reject-js");
const popup = document.querySelector(".popup-js");

const ageVerification = e => {
  if(e.target === acceptBtn) {
    popup.classList.remove("show");
    popup.firstElementChild.classList.remove("show");
    document.body.classList.remove("overflow");

    storeResultinStorage("AgeVerification", "verified", 36e5);
  }
  
  if (e.target === rejectBtn) {
    acceptBtn.classList.add("hide");
    rejectBtn.classList.add("hide");
  }
};

export {
  popup as popupModal,
  ageVerification,
};
