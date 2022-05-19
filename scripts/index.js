import  { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { initialCards } from './initialCards.js';


const popupProfile = document.querySelector('.popup_type_profile');
const popupImg = document.querySelector('.popup_open-img');
const popupAddCard = document.querySelector('.popup_add_card');

const buttonCloseProfile = popupProfile.querySelector('.popup__button-close');
const buttonCloseCard = popupAddCard.querySelector('.popup__button-close');
const buttonCloseImg = popupImg.querySelector('.popup__button-close');

const elements = document.querySelector('.elements');

const formProfileEdit = document.querySelector('.form');
const formAddCard = document.querySelector('.form_popup_add-card');
const nameInput = document.querySelector('.form__container_type_name');
const jobInput = document.querySelector('.form__container_type_info');
const nameForm = document.querySelector('.form__container_type_inf');
const linkForm = document.querySelector('.form__container_type_src');

const picturePopupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');

const buttonProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');
const buttonCard = document.querySelector('.profile__addbutton');

const config = {
  form: '.form',
  sumbitButton: '.form__button',
  inactiveButtonClass: 'form__button_invalid',
};

const formAddValid = new FormValidator(config, formAddCard);
formAddValid.enableValidation();

const formProfileValid = new FormValidator(config, formProfileEdit);
formProfileValid.enableValidation();

const ESC_KEYCODE = 27;

function openProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
  formProfileValid.enableValidation();
  openPopup(popupProfile);
}

buttonProfile.addEventListener('click', openProfile);

// попап открытие 1
const closePopup = function (popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', handleEscUp);
  popup.removeEventListener('click', handleOverlay);
}
// попапы закрытие шаблон

const openPopup = function (popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', handleEscUp);
  popup.addEventListener('click', handleOverlay);
}
// закрытие по кнопке esc
const handleEscUp = evt => {
  const activePopup = document.querySelector('.popup_open');
  if (evt.which === ESC_KEYCODE) {
    closePopup(activePopup);
  }
};

// закрытие по оверлей 
const handleOverlay = evt => {
  const activePopup = document.querySelector('.popup_open');
  if (evt.target === evt.currentTarget) {
    closePopup(activePopup);
  }
};

// попапы  открытие шаблон

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  closePopup(popupProfile);
}

formProfileEdit.addEventListener('submit', handleProfileFormSubmit);

//сохранение информации попaпа 1

function createCard(title, link) {
return (new Card(title, link, '#card')).generateCard();
}

const bigImage = (title, link) => {
    popupSubtitle.textContent = title;
    picturePopupImage.alt = title;
    picturePopupImage.src = link;
    openPopup(popupImg);
  }
function renderCard(initialCards) {
  initialCards.forEach(item => {
    elements.append(createCard(item.name, item.link));
  });
}
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  elements.prepend(createCard(nameForm.value, linkForm.value));
  closePopup(popupAddCard);
  evt.target.reset();
}

formAddCard.addEventListener('submit', handleAddCardFormSubmit);

renderCard(initialCards);

// добавление карточек + лайк + удаление
buttonCloseProfile.addEventListener('click', function () {
  closePopup(popupProfile);
});

buttonCloseCard.addEventListener('click', function () {
  closePopup(popupAddCard);
});

buttonCloseImg.addEventListener('click', function () {
  closePopup(popupImg);
});

// попап закрытие

buttonCard.addEventListener('click',function () {
  openPopup(popupAddCard);
});
export {bigImage};