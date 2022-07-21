import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { initialCards } from "../components/initialCards.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  formProfileEdit,
  formAddCard,
  nameInput,
  jobInput,
  buttonProfile,
  buttonCard,
} from "../components/utils.js";

const config = {
  form: ".form",
  sumbitButton: ".form__button",
  inactiveButtonClass: "form__button_invalid",
};

const bigImage = new PopupWithImage(".popup_open-img");
bigImage.setEventListeners();

const createCard = (name, link) => {
  const card = new Card(
    {
      name: name,
      link: link,
      handleCardClick: () => {
        bigImage.open(name, link);
      },
    },
    "#card"
  );
  return card.generateCard();
};

const userInfo = new UserInfo(".profile__title", ".profile__subtitle");
const popupForm = new PopupWithForm(".popup_type_profile", {
  formSubmit: data => {
    userInfo.setUserInfo(data);
  },
});
popupForm.setEventListeners();

const openProfile = () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupForm.open();
};

buttonProfile.addEventListener("click", openProfile);

const addCard = new PopupWithForm(".popup_add_card", {
  formSubmit: item => {
    const cardElement = createCard(item.name, item.link);
    cardList.addItemPrepend(cardElement);
  },
});
addCard.setEventListeners();

const handleAddCardForm = () => {
  addCard.open();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: item => {
      const cardElement = createCard(item.name, item.link);
      cardList.addItemAppend(cardElement);
    },
  },
  ".elements"
);
cardList.renderItems();

buttonCard.addEventListener("click", handleAddCardForm);

///валидация

const formAddValid = new FormValidator(config, formAddCard);
formAddValid.enableValidation();

const formProfileValid = new FormValidator(config, formProfileEdit);
formProfileValid.enableValidation();
