import { bigImage } from './index.js';
export class Card {
  _title;
  _link;
  _templane;
  constructor(title, link, template) {
    this._title = title;
    this._link = link;
    this._template = template;
  }
  _getTemplate() {
    const elementTemplate = document.querySelector(this._template);
    const cardsElement = elementTemplate.content.firstElementChild.cloneNode(
      true
    );
    return cardsElement;
  }
  _removeCard = () => {
    this._element.remove();
    this._element = null;
  };
  _likeCard(evt) {
    evt.target.classList.toggle('element__vector_active');
  }
  _setEventListners() {
    this._element
      .querySelector('.element__delete')
      .addEventListener('click', this._removeCard);
    this._element
      .querySelector('.element__vector')
      .addEventListener('click', this._likeCard);
    this._element
      .querySelector('.element__image')
      .addEventListener('click', () => {
        bigImage(this._title, this._link);
      });
  }
  generateCard() {
    this._element = this._getTemplate();
    const cardsElementImage = this._element.querySelector('.element__image');
    const cardsElementTitle = this._element.querySelector('.element__title');
    cardsElementImage.setAttribute('src', this._link);
    cardsElementImage.setAttribute('alt', this._title);
    cardsElementTitle.textContent = this._title;
    this._setEventListners();
    return this._element;
  }
}
