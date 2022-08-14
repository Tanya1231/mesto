import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".form");
  }
  submitHandle(remov) {
    this._handleSubmit = remov;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", evt => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}
