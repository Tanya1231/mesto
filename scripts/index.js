let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__edit-button");
let closePopup = popup.querySelector(".popup__button-recet");

function popupOpen() {
  popup.classList.toggle("popup_open");
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
};
 
openPopup.addEventListener ("click", popupOpen);

function popupClose() {
  popup.classList.toggle("popup_open");
};

closePopup.addEventListener("click", popupClose);

// попап открытие и закрытие
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__container_name");
let jobInput = document.querySelector(".form__container_info");
let profileName = document.querySelector(".profile__title");
let profileInfo = document.querySelector(".profile__subtitle");

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  popup.classList.remove(popupClose);
}

formElement.addEventListener("submit", formSubmitHandler);

let closePopupp = popup.querySelector(".form__button");

closePopupp.addEventListener("click", popupClose);

//сохранение информации