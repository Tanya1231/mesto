const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((form) => {
  form.addEventListener("submit", evt => handleFormSumbit(evt, config));
  form.addEventListener("input", evt => handleFormInput(evt, config));
  setButtonState(form, config)
  })
}

function handleFormSumbit(evt) {
  evt.preventDefault();
}

function handleFormInput(evt, config) {
  const form = evt.currentTarget;
  const input = evt.target;
  //ищем не валидные поля и установить ошибки
  setCustomError(input, config);
  // показываем ошибки
  setFieldError(input);
  //дактивация кнопки
  setButtonState(form, config);
}

function setCustomError(input) {
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

function setFieldError(input) {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
}

function setButtonState(form, config) {
  const button = form.querySelector(config.submitButtonSelector);
  const isValid = form.checkValidity();
  if (isValid) {
    button.classList.add(config.sumbitButton);
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute("disabled");
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.classList.remove(config.sumbitButton);
    button.setAttribute("disabled", "disabled");
  }
}

enableValidation({
  form: ".form",
  sumbitButton: ".form__button",
  submitButtonSelector: ".button",
  inactiveButtonClass: "form__button_invalid",
});
