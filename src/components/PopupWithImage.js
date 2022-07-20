import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._picturePopupImage = this._popup.querySelector(".popup__image");
    this._popupSubtitle = this._popup.querySelector(".popup__subtitle");
  }
  open(name, link) {
    super.open();
    this._popupSubtitle.textContent = name;
    this._picturePopupImage.alt = name;
    this._picturePopupImage.src = link;
  }
}
