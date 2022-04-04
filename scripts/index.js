const popupProfile = document.querySelector('.popup_type_profile');
const popupImg = document.querySelector('.popup_open-img');
const popupAddCard = document.querySelector('.popup_add_card');

const closeEditFormButton = popupProfile.querySelector('.popup__button-close');
const closeCardFormButton = popupAddCard.querySelector('.popup__button-close');
const closePopupImage = popupImg.querySelector('.popup__button-close');

const elements = document.querySelector('.elements');
const openpopupImg = document.querySelector('.element__image');
const titleElement = document.querySelector('.element__title');
const elementTemplate = document.querySelector('.elements').content; 

const formProfileEdit = document.querySelector('.form');
const formAddCard = document.querySelector('.form_popup_add-card');
const nameInput = document.querySelector('.form__container_type_name');
const jobInput = document.querySelector('.form__container_type_info');
const nameForm = document.querySelector('.form__container_type_inf');
const linkForm = document.querySelector('.form__container_type_src');

const picturePopupImage = document.querySelector('.popup__image');
const popupSub = document.querySelector('.popup__subtitle');

const openEditFormButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');
const openCardFormButton = document.querySelector('.profile__addbutton');


function openProfile() {  
nameInput.value = profileName.textContent; 
jobInput.value = profileInfo.textContent; 
openPopup(popupProfile)
}

openEditFormButton.addEventListener('click', openProfile); 

// попап открытие 1 
const closePopup = function (popup) {
  popup.classList.remove('popup_open')
}

// попапы закрытие шаблон

 const openPopup = function (popup) {
  popup.classList.add('popup_open')
}

// попапы  открытие шаблон

function handleProfileFormSubmit(evt) { 
evt.preventDefault(); 
profileName.textContent = nameInput.value; 
profileInfo.textContent = jobInput.value; 
closePopup(popupProfile); 
} 

formProfileEdit.addEventListener('submit', handleProfileFormSubmit); 

 //сохранение информации поппа 1 

function createCard(nameValue, linkValue) { 
const cardsElement = elementTemplate.querySelector('.element').cloneNode(true);
cardsElement.querySelector('.element__title').textContent = nameValue; 
cardsElement.querySelector('.element__image').src = linkValue; 
cardsElement.querySelector('.element__image').alt = nameValue; 
cardsElement.querySelector('.element__image').addEventListener('click', function(){ 
picturePopupImage.src = linkValue; 
popupSub.textContent = nameValue; 
picturePopupImage.alt = nameValue; 
openPopup(popupImg)
})

cardsElement.querySelector('.element__vector').addEventListener('click', function(evt) { 
evt.target.classList.toggle('element__vector_active'); 
}) 
cardsElement.querySelector('.element__delete').addEventListener('click', function(evt){ 
evt.target.closest('.element').remove();
})
return cardsElement  
}
function renderCard(initialCards) {
initialCards.forEach((item) => {
elements.append(createCard(item.name, item.link));
});  
}
function handleAddCardFormSubmit(evt) { 
  evt.preventDefault(); 
  elements.prepend(createCard(nameForm.value, linkForm.value))
  closePopup(popupAddCard);
  evt.target.reset()
} 

formAddCard.addEventListener('submit', handleAddCardFormSubmit)

renderCard(initialCards)

 // добавление карточек + лайк + удаление 


closeEditFormButton.addEventListener('click', function() {
closePopup(popupProfile)
});

closeCardFormButton.addEventListener('click', function() {
closePopup(popupAddCard)
});

closePopupImage.addEventListener('click', function() {
closePopup(popupImg)
});

// попап закрытие
openCardFormButton.addEventListener('click', function(){
  openPopup(popupAddCard)
});
