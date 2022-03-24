const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__button-recet');
const elements = document.querySelector('.elements');
const card = document.querySelector('.element');
const formElement = document.querySelector('.form');
const formPopup = document.querySelector('.formpop');
const nameInput = document.querySelector('.form__container_type_name');
const jobInput = document.querySelector('.form__container_type_info');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');
const popupform = document.querySelector('.popupform');
const popupImg = document.querySelector('.popup_open-img');
const openpopupform = document.querySelector('.profile__addbutton');
const openpopupImg = document.querySelector('.element__image');
const titleElement = document.querySelector('.element__title');
const closepopupform = popupform.querySelector('.popup__button-recet');
const closepopupImg = popupImg.querySelector(".popup__button-recet");
const nameForm = document.querySelector('.form__container_type_inf');
const linkForm = document.querySelector('.form__container_type_src');
const like = document.querySelectorAll('.element__vector');
const alike = document.querySelectorAll('.element__vector_active');
const deleteButton = document.querySelectorAll('.element__delete');
const popupBig = document.querySelector('.popup__image');
const popupSub = document.querySelector('.popup__subtitle');


function popupOpen() {
  popup.classList.toggle('popup_open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}

openPopup.addEventListener('click', popupOpen);

// попап открытие 1

function popupClose() {
  popup.classList.toggle('popup_open');
}

closePopup.addEventListener('click', popupClose);

// попап закрытие 1


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);

//сохранение информации поппа 1

function popupformOpen() {
  popupform.classList.toggle('popup_open');
}

openpopupform.addEventListener('click', popupformOpen);

// попап открытие 2

function popupformClose() {
  popupform.classList.toggle('popup_open');
}

closepopupform.addEventListener('click', popupformClose);

// попап закрытие 2

function popupformImg() {
  popupImg.classList.toggle('popup_open');
}
closepopupImg.addEventListener('click', popupformImg);

// закрытие попап 3

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function createCard(nameValue, linkValue) {

  const elementTemplate = document.querySelector('.elements').content;
  const cardsElement = elementTemplate.querySelector(".element").cloneNode(true);
  cardsElement.querySelector('.element__title').textContent = nameValue;
  cardsElement.querySelector('.element__image').src = linkValue;
  cardsElement.querySelector('.element__title').alt = nameValue;
  cardsElement.querySelector('.element__image').addEventListener('click', function(){
  popupBig.src = linkValue;
  popupSub.textContent = nameValue;
  })
  cardsElement.querySelector('.element__vector').addEventListener('click', function(evt) {
  evt.target.classList.toggle('element__vector_active');
  })
  elements.append(cardsElement);
  function popupOpenImg() {
    popupImg.classList.toggle('popup_open');
  }
  cardsElement.querySelector('.element__image').addEventListener('click', popupOpenImg);
}

function addCards(initialCards) {
  initialCards.forEach(element => {
    createCard(element.name, element.link);
  });
}
addCards(initialCards);

// добавление карточек + лайк

elements.querySelector('.element__delete').addEventListener('click', function(evt){
  evt.target.closest('.element').remove()
})

// удаление карточки

function formSubmit(evt) {
  evt.preventDefault();
  elements.querySelector('.element__title').textContent = nameForm.value;
  elements.querySelector('.element__image').src = linkForm.value;
 elements.querySelector('.element__title').alt = nameForm.value;
 popupformClose();
}

formPopup.addEventListener('submit', formSubmit);