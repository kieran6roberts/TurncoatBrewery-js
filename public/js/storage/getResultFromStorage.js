import popupModal from "./ageVerification";

const getResultfromStorage = key => {

  const result = JSON.parse(localStorage.getItem(key));

  if (result == null) {
    popupModal.classList.add("show");
    popupModal.firstElementChild.classList.add("show");
    document.body.classList.add("overflow");
    return null;
  }
  
  const time = new Date().getTime();
  
  if (time > result.expiry) {
    localStorage.removeItem(key);

    popupModal.classList.add("show");
    popupModal.firstElementChild.classList.add("show");
    document.body.classList.add("overflow");
  }
};

export default getResultfromStorage;