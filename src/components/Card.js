export default class Card {
  constructor(
    {
      data,
      userId,
      handleCardClick,
      hadleLikeClick,
      hadleDisLikeClick,
      handleDeleteCard,
    },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardOwnerId = data.owner._id;
    this._userId = userId;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._hadleLikeClick = hadleLikeClick;
    this._hadleDisLikeClick = hadleDisLikeClick;
    this._handleDeleteCard = handleDeleteCard;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const elementTemplate = document.querySelector(this._cardSelector);
    const cardsElement = elementTemplate.content
      .querySelector(".element")
      .cloneNode(true);
    return cardsElement;
  }
  removeCard = () => {
    this._card.remove();
    this._card = null;
  };
  _сardLike() {
    if (
      this._likes.some(user => {
        return this._userId === user._id;
      })
    ) {
      this._likeButton.classList.add("element__vector_active");
    }
  }
  handleLikeCard(data) {
    this._likes = data.likes;
    this._likesCounter.textContent = this._likes.length;
    this._likeButton.classList.toggle("element__vector_active");
  }
  _deleteCard() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteButton.remove();
    }
  }
  _setEventListners() {
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard(this._cardId);
    });
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("element__vector_active")) {
        this._hadleDisLikeClick(this._cardId);
      } else {
        this._hadleLikeClick(this._cardId);
      }
    });
    this._image.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  generateCard() {
    this._card = this._getTemplate();
    this._likeButton = this._card.querySelector(".element__vector");
    this._likesCounter = this._card.querySelector(".element__vector-counter");
    this._deleteButton = this._card.querySelector(".element__delete");
    this._image = this._card.querySelector(".element__image");
    this._card.querySelector(".element__title").textContent = this._name;
    this._likesCounter.textContent = this._likes.length;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._сardLike();
    this._deleteCard();
    this._setEventListners();
    return this._card;
  }
}
