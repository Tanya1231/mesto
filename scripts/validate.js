const enableValidation = config => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach(form => {
    form.addEventListener('submit', evt => handleFormSumbit(evt, form, config));
    form.addEventListener('input', evt => handleFormInput(evt, config));
    setButtonState(form, config);
  });
};

function handleFormSumbit(evt, form, config) {
  evt.preventDefault();
  disableButtonState(form, config);
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
  input.setCustomValidity('');
  if (validity.tooShort || validity.tooLong) {
    const currentLength = input.value.length;
    const min = input.getAttribute('minlength');
    input.setCustomValidity(
      `Минимальное колличество символов ${min}. Длина текста сейчас ${currentLength} символ`
    );
  }
}

function disableButtonState(form, config) {
  const button = form.querySelector(config.sumbitButton);
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', true);
}

function setFieldError(input) {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
}

function setButtonState(form, config) {
  const button = form.querySelector(config.sumbitButton);
  const isValid = form.checkValidity();
  if (isValid) {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled');
  } else {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', true);
  }
}

enableValidation({
  form: '.form',
  sumbitButton: '.form__button',
  inactiveButtonClass: 'form__button_invalid',
});
