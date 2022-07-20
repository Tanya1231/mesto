import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { formSubmit }) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._forms = this._popup.querySelector(".form");
    this._submitButton = this._popup.querySelector(".form__button");
    this._inputList = this._popup.querySelectorAll(".form__container");
  }
  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(input => (inputValues[input.name] = input.value));
    return inputValues;
  }
  close() {
    this._forms.reset();
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._forms.addEventListener("submit", evt => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());
      this.close();
    });
  }
}
