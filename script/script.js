let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__edit-button");
let closePopup = popup.querySelector(".popup__button-reset");

openPopup.addEventListener("click", function () {
  popup.classList.toggle("popup__open");
});

closePopup.addEventListener("click", function () {
  popup.classList.toggle("popup__open");
});

// попап открытие и закрытие
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__name");
let jobInput = document.querySelector(".form__info");
let profileName = document.querySelector(".profile__title");
let profileInfo = document.querySelector(".profile__subtitle");

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
}

formElement.addEventListener("submit", formSubmitHandler);

let closePopupp = popup.querySelector(".form__button");

closePopupp.addEventListener("click", function () {
  popup.classList.toggle("popup__open");
});

//сохранение информации