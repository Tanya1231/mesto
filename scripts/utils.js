export const bigImage = (title, link) => {
  popupSubtitle.textContent = title;
  picturePopupImage.alt = title;
  picturePopupImage.src = link;
  openPopup(popupImg);
};

export const openPopup = function (popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", handleEscUp);
  popup.addEventListener("click", handleOverlay);
};

export const closePopup = function (popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", handleEscUp);
  popup.removeEventListener("click", handleOverlay);
};
export const handleEscUp = evt => {
  if (evt.which === ESC_KEYCODE) {
    const activePopup = document.querySelector(".popup_open");
    closePopup(activePopup);
  }
};

// закрытие по оверлей
export const handleOverlay = evt => {
  if (evt.target === evt.currentTarget) {
    const activePopup = document.querySelector(".popup_open");
    closePopup(activePopup);
  }
};
export const picturePopupImage = document.querySelector(".popup__image");
export const popupSubtitle = document.querySelector(".popup__subtitle");
export const popupImg = document.querySelector(".popup_open-img");
export const ESC_KEYCODE = 27;
