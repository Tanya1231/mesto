export default class Card {
  constructor({ data, handleCardClick, hadleDeleteClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    //this._template = template;
    this._handleCardClick = handleCardClick;    this._cardSelector = cardSelector;
    this._card = this._getTemplate();
  }
  _getTemplate() {
    const elementTemplate = document.querySelector(this._cardSelector);
    const cardsElement = elementTemplate.content
      .querySelector(".element")
      .cloneNode(true);
    return cardsElement;
  }
  _removeCard = () => {
    this._card.remove();
    this._card = null;
  };
  _likeCard(evt) {
    evt.target.classList.toggle("element__vector_active");
  }
  _setEventListners() {
    this._card
      .querySelector(".element__delete")
      .addEventListener("click", this._removeCard);
    this._card
      .querySelector(".element__vector")
      .addEventListener("click", this._likeCard);
    this._card
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }
  generateCard() {
    this._image = this._card.querySelector(".element__image");
    this._card.querySelector(".element__title").textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._setEventListners();
    return this._card;
  }
}
