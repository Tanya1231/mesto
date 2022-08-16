import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupDelete from "../components/PopupDelete.js";
import {
  formProfileEdit,
  formAddCard,
  nameInput,
  jobInput,
  buttonProfile,
  buttonCard,
  avatarka,
  formAvatarka,
  config,
} from "../components/utils.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-47",
  headers: {
    authorization: "0162be33-26fc-4582-97e8-0d78f4ad20d1",
    "Content-Type": "application/json",
  },
});

/// Увеличенная картинка

const bigImage = new PopupWithImage(".popup_open-img");

//// удаление

const deletePopup = new PopupDelete(".popup_type_delete");

/// профиль

const userInfo = new UserInfo({
  profileName: ".profile__title",
  profileInfo: ".profile__subtitle",
  profileAvatar: ".profile__avatar",
});

const popupForm = new PopupWithForm(".popup_type_profile", {
  formSubmit: data => {
    popupForm.loading(true);
    api
      .editUserInfo(data)
      .then(result => {
        userInfo.setUserInfo(result);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupForm.loading(false);
      })
  },
});
popupForm.setEventListeners();

const openProfile = () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupForm.open();
};

/// карточки

const createCard = item => {
  const card = new Card(
    {
      data: item,
      userId: userId,
      handleCardClick: (name, link) => {
        bigImage.open(name, link);
      },
      handleLikeClick: cardId => {
        api
          .putLike(cardId)
          .then(data => {
            card.handleLikeCard(data);
          })
          .catch(err => {
            console.log(err);
          });
      },
      handleDisLikeClick: cardId => {
        api
          .removeLike(cardId)
          .then(data => {
            card.handleLikeCard(data);
          })
          .catch(err => {
            console.log(err);
          });
      },
      handleDeleteCard: cardId => {
        deletePopup.open();
        deletePopup.submitHandle(() => {
          api
            .deleteCard(cardId)
            .then(() => {
              deletePopup.close();
              card.removeCard();
            })
            .catch(err => {
              console.log(err);
            });
        });
      },
    },
    "#card"
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const handleAddCardForm = () => {
  addCard.open();
};

const cardList = new Section(
  {
    renderer: item => {
      cardList.addItemAppend(createCard(item));
    },
  },
  ".elements"
);

const addCard = new PopupWithForm(".popup_add_card", {
  formSubmit: data => {
    addCard.loading(true);
    api
      .addCard(data)
      .then(result => {
        cardList.addItemPrepend(createCard(result));
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        addCard.loading(false);
      })
  },
});

/// аватар

const profileAvatar = new PopupWithForm(".popup_type_avatar", {
  formSubmit: data => {
    profileAvatar.loading(true);
    api
      .setUserAvatar(data)
      .then(result => {
        userInfo.setUserAvatar(result);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        profileAvatar.loading(false);
      })
  },
});

///валидация

const formAddValid = new FormValidator(config, formAddCard);
formAddValid.enableValidation();

const formProfileValid = new FormValidator(config, formProfileEdit);
formProfileValid.enableValidation();

const formAvatarValid = new FormValidator(config, formAvatarka);
formAvatarValid.enableValidation();

///запрос

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()]).then(result => {
  const [items, userData] = result;
  userId = userData._id;
  cardList.renderItems(items);
  userInfo.setUserInfo(userData);
  userInfo.setUserAvatar(userData);
});

deletePopup.setEventListeners();
profileAvatar.setEventListeners();
addCard.setEventListeners();
bigImage.setEventListeners();
buttonProfile.addEventListener("click", openProfile);
buttonCard.addEventListener("click", handleAddCardForm);
document.querySelector(".profile__avatar-edit").addEventListener("click", () => {
  profileAvatar.open();
});
