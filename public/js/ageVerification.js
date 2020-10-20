const acceptBtn = document.querySelector(".btn--accept-js");
const rejectBtn = document.querySelector(".btn--reject-js");
const popup = document.querySelector(".popup-js");

const ageVerification = e => {
  if(e.target === acceptBtn) {
    popup.classList.remove("show");
    popup.firstElementChild.classList.remove("show");
    document.body.classList.remove("overflow");

    storeResultinStorage("showModal", "yes", 36e5);
  }
  
  if(e.target === rejectBtn) {
    acceptBtn.classList.add("hide");
    rejectBtn.classList.add("hide");
  }
};

const storeResultinStorage = (key, value, lifetime) => {
  const time = new Date().getTime();

  const result = {
    value,
    expiry: time + lifetime,
  };

  localStorage.setItem(key, JSON.stringify(result));
};

const getResultfromStorage = key => {

  const result = JSON.parse(localStorage.getItem(key));

  if (result == null) {
    popup.classList.add("show");
    popup.firstElementChild.classList.add("show");
    document.body.classList.add("overflow");
    return null;
  }
  
  const time = new Date().getTime();
  
  if (time > result.expiry) {
    localStorage.removeItem(key);

    popup.classList.add("show");
    popup.firstElementChild.classList.add("show");
    document.body.classList.add("overflow");
    return;
  }
};

export {
  popup as popupModal,
  ageVerification,
  getResultfromStorage
};
