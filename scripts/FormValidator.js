export class FormValidator {
  constructor(config, form) {
    this.config = config;
    this._form = form;
    this._sumbitButton = this._form.querySelector(config.sumbitButton);
    this._inactiveButtonClass = config.inactiveButtonClass;
  }
  _setCustomError(input) {
    const validity = input.validity;
    input.setCustomValidity("");
    if (validity.tooShort || validity.tooLong) {
      const currentLength = input.value.length;
      const min = input.getAttribute("minlength");
      input.setCustomValidity(
        `Минимальное колличество символов ${min}. Длина текста сейчас ${currentLength} символ`
      );
    }
  }
  _setFieldError(input) {
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
  }
  _setButtonState() {
    const isValid = this._form.checkValidity();
    if (isValid) {
      this._sumbitButton.classList.remove(this._inactiveButtonClass);
      this._sumbitButton.removeAttribute('disabled');
    } else {
      this._sumbitButton.classList.add(this._inactiveButtonClass);
      this._sumbitButton.setAttribute('disabled', true);
    }
  }
  _disableButtonState() {
    this._sumbitButton.classList.add(this._inactiveButtonClass);
    this._sumbitButton.setAttribute('disabled', true);
  }
  _handleFormSumbit(evt) {
    evt.preventDefault();
    this._disableButtonState();
  }
  _handleFormInput(evt) {
    const input = evt.target;
    //ищем не валидные поля и установить ошибки
    this._setCustomError(input);
    // показываем ошибки
    this._setFieldError(input);
    //дактивация кнопки
    this._setButtonState();
  }
  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach(form => {
      form.addEventListener('submit', evt => this._handleFormSumbit(evt));
      form.addEventListener('input', evt => this._handleFormInput(evt));
      this._setButtonState();
    });
  };
}
