import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { formSubmit }) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector(".form");
    this._submitButton = this._popup.querySelector(".form__button");
    this._inputList = this._popup.querySelectorAll(".form__container");
    this._textSubmit = this._submitButton.textContent;
  }
  getInputValues() {
    const inputValues = {};
    this._inputList.forEach(input => (inputValues[input.name] = input.value));
    return inputValues;
  }
  close() {
    this._form.reset();
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", evt => {
      evt.preventDefault();
      this._formSubmit(this.getInputValues());
      this.close();
    });
  }
  loading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = this._textSubmit;
    }
  }
}
