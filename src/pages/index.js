import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  formProfileEdit,
  formAddCard,
  nameInput,
  jobInput,
  buttonProfile,
  buttonCard,
} from "../components/utils.js";


const avatarka = document.querySelector('.profile__avatar');
const formAvatar = document.querySelector('.form_popup_avatar');
// deleteCard = document.querySelector('.element__delete');
//const popupDelete = document.querySelector('.popup_type_confirm');


const config = {
  form: ".form",
  sumbitButton: ".form__button",
  inactiveButtonClass: "form__button_invalid",
};

const bigImage = new PopupWithImage(".popup_open-img");
bigImage.setEventListeners();

const userInfo = new UserInfo(".profile__title", ".profile__subtitle", ".profile__avatar");

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
    headers: {
      authorization: '0162be33-26fc-4582-97e8-0d78f4ad20d1',
      'Content-Type': 'application/json'
    }
  });


/// профиль

api.getUserInfo()
.then((result) => {
  userInfo.setUserInfo(result.name, result.about, result._id);
})

const popupForm = new PopupWithForm(".popup_type_profile", { 
formSubmit:({profileName, profileInfo}) =>
api.setUserInfo({
  name: profileName,
  about: profileInfo
}).then((result) => {
userInfo.setUserInfo(result.name, result.about); 
})
.catch((err) => console.log(err))
})
popupForm.setEventListeners(); 



const openProfile = () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupForm.open();
};
buttonProfile.addEventListener("click", openProfile);

/// аватар


api.getUserInfo()
.then((result) => {
  userInfo.setUserAvatar(result.avatar);
})


const popupAvatar = new PopupWithForm('.popup_type_avatar', {
  formSubmit: ({ profileAvatar }) => 
    api.setUserAvatar({
      avatar: profileAvatar
    })
    .then((result) => {
      userInfo.setUserAvatar(avatarka.src = result.avatar);
    })
    .catch((err) => console.error(err))
})
popupAvatar.setEventListeners();



/// отрисовка карточек и добавление

api
  .getInitialCards()
  .then((res) => {
    const cardList = new Section(
      {
        items: res,
        renderer: (item) => {
          const card = new Card(
            {
              data: item,
              handleCardClick: (name, link) => {
                bigImage.open(name, link);
              },
            },
            ".elements"
          );
          const cardElement = card.generateCard();
          cardList.addItemAppend(cardElement);
        },
      },
     "#card"
    );
    cardList.renderItems();
 

    const createCard = new PopupWithForm(".popup_add_card", {
      formSubmit: (item) => {
        api.addCard(item)
        .then((item) => {
          const card = new Card(
            {
              data: item,
              handleCardClick: (name, link) => {
                bigImage.open(name, link);
          },
        },
        );
        const cardElement = card.generateCard();
        cardList.addItemPrepend(cardElement);
        })
     .catch((error) => console.log(error))
      },
    });
    createCard.setEventListeners();
    
    const handleAddCardForm = () => {
      createCard.open();
    };
    buttonCard.addEventListener("click", handleAddCardForm);
  });

  

///валидация


const formAddValid = new FormValidator(config, formAddCard);
formAddValid.enableValidation();

const formProfileValid = new FormValidator(config, formProfileEdit);
formProfileValid.enableValidation();

const formAvatarValid = new FormValidator(config, formAvatar);
formAvatarValid.enableValidation();



/// слушатели

avatarka.addEventListener("click", () => {
  popupAvatar.open()
  })

/*deleteCard.addEventListener("click", () => {
  popupDelete.open()
})*/