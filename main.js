(()=>{"use strict";class e{constructor(e,t){this.config=e,this._form=t,this._sumbitButton=this._form.querySelector(e.sumbitButton),this._inactiveButtonClass=e.inactiveButtonClass}_setCustomError(e){const t=e.validity;if(e.setCustomValidity(""),t.tooShort||t.tooLong){const t=e.value.length,s=e.getAttribute("minlength");e.setCustomValidity(`Минимальное колличество символов ${s}. Длина текста сейчас ${t} символ`)}}_setFieldError(e){document.querySelector(`#${e.id}-error`).textContent=e.validationMessage}_setButtonState(){this._form.checkValidity()?(this._sumbitButton.classList.remove(this._inactiveButtonClass),this._sumbitButton.removeAttribute("disabled")):this._disableButtonState()}_disableButtonState(){this._sumbitButton.classList.add(this._inactiveButtonClass),this._sumbitButton.setAttribute("disabled",!0)}_handleFormSumbit(e){e.preventDefault(),this._disableButtonState()}_handleFormInput(e){const t=e.target;this._setCustomError(t),this._setFieldError(t),this._setButtonState()}enableValidation=()=>{this._form.addEventListener("submit",(e=>this._handleFormSumbit(e))),this._form.addEventListener("input",(e=>this._handleFormInput(e))),this._setButtonState()}}class t{constructor({name:e,link:t,handleCardClick:s},n){this._name=e,this._link=t,this._handleCardClick=s,this._cardSelector=n,this._card=this._getTemplate()}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}_removeCard=()=>{this._card.remove(),this._card=null};_likeCard(e){e.target.classList.toggle("element__vector_active")}_setEventListners(){this._card.querySelector(".element__delete").addEventListener("click",this._removeCard),this._card.querySelector(".element__vector").addEventListener("click",this._likeCard),this._card.querySelector(".element__image").addEventListener("click",(()=>{this._handleCardClick(this._name,this._link)}))}generateCard(){return this._image=this._card.querySelector(".element__image"),this._card.querySelector(".element__title").textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._setEventListners(),this._card}}class s{constructor(e){this._popup=document.querySelector(e),this.close=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}open(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose=e=>{"Escape"===e.key&&this.close()};setEventListeners(){this._popup.querySelector(".popup__button-close").addEventListener("click",(()=>{this.close()})),this._popup.addEventListener("mousedown",(e=>{e.target===e.currentTarget&&this.close()}))}}class n extends s{constructor(e,{formSubmit:t}){super(e),this._formSubmit=t,this._form=this._popup.querySelector(".form"),this._submitButton=this._popup.querySelector(".form__button"),this._inputList=this._popup.querySelectorAll(".form__container")}_getInputValues(){const e={};return this._inputList.forEach((t=>e[t.name]=t.value)),e}close(){this._form.reset(),super.close()}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._formSubmit(this._getInputValues()),this.close()}))}}const r=document.querySelector(".form"),o=document.querySelector(".form_popup_add-card"),i=document.querySelector(".form__container_type_name"),a=document.querySelector(".form__container_type_info"),c=document.querySelector(".profile__edit-button"),l=document.querySelector(".profile__addbutton"),d={form:".form",sumbitButton:".form__button",inactiveButtonClass:"form__button_invalid"},u=new class extends s{constructor(e){super(e),this._picturePopupImage=this._popup.querySelector(".popup__image"),this._popupSubtitle=this._popup.querySelector(".popup__subtitle")}open(e,t){super.open(),this._popupSubtitle.textContent=e,this._picturePopupImage.alt=e,this._picturePopupImage.src=t}}(".popup_open-img");u.setEventListeners();const _=(e,s)=>new t({name:e,link:s,handleCardClick:()=>{u.open(e,s)}},"#card").generateCard(),p=new class{constructor(e,t){this._profileName=document.querySelector(e),this._profileInfo=document.querySelector(t)}getUserInfo(){return{name:this._profileName.textContent,about:this._profileInfo.textContent}}setUserInfo(e){this._profileName.textContent=e.name,this._profileInfo.textContent=e.about}}(".profile__title",".profile__subtitle"),m=new n(".popup_type_profile",{formSubmit:e=>{p.setUserInfo(e)}});m.setEventListeners(),c.addEventListener("click",(()=>{const e=p.getUserInfo();i.value=e.name,a.value=e.about,m.open()}));const h=new n(".popup_add_card",{formSubmit:e=>{const t=_(e.name,e.link);f.addItemPrepend(t)}});h.setEventListeners();const f=new class{constructor({items:e,renderer:t},s){this._renderItems=e,this._renderer=t,this._container=document.querySelector(s)}renderItems(){this._renderItems.forEach((e=>{this._renderer(e)}))}addItemAppend(e){this._container.append(e)}addItemPrepend(e){this._container.prepend(e)}}({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:e=>{const t=_(e.name,e.link);f.addItemAppend(t)}},".elements");f.renderItems(),l.addEventListener("click",(()=>{h.open()})),new e(d,o).enableValidation(),new e(d,r).enableValidation()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBTSxTQUNOQyxLQUNFLGtGSmtFSm9FLFNBQVVMLElBQ1IsTUFBTUMsRUFBY2QsRUFBV2EsRUFBS2hFLEtBQU1nRSxFQUFLL0QsTUFDL0NpRSxFQUFTUyxjQUFjVixFQUF2QixHQUdKLGFBRUZDLEVBQVNRLGNBRVQzQixFQUFXakQsaUJBQWlCLFNBaEJGLEtBQ3hCaUUsRUFBUXJDLE1BQVIsSUFtQm1CLElBQUlyRSxFQUFjRSxFQUFRb0YsR0FDbEM5QyxtQkFFWSxJQUFJeEMsRUFBY0UsRUFBUW1GLEdBQ2xDN0Msa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL2luaXRpYWxDYXJkcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm0pIHtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgdGhpcy5fZm9ybSA9IGZvcm07XHJcbiAgICB0aGlzLl9zdW1iaXRCdXR0b24gPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnN1bWJpdEJ1dHRvbik7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICAvKnRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19jb250YWluZXJcIilcclxuICAgICk7Ki9cclxuICB9XHJcbiAgX3NldEN1c3RvbUVycm9yKGlucHV0KSB7XHJcbiAgICBjb25zdCB2YWxpZGl0eSA9IGlucHV0LnZhbGlkaXR5O1xyXG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XHJcbiAgICBpZiAodmFsaWRpdHkudG9vU2hvcnQgfHwgdmFsaWRpdHkudG9vTG9uZykge1xyXG4gICAgICBjb25zdCBjdXJyZW50TGVuZ3RoID0gaW5wdXQudmFsdWUubGVuZ3RoO1xyXG4gICAgICBjb25zdCBtaW4gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJtaW5sZW5ndGhcIik7XHJcbiAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFxyXG4gICAgICAgIGDQnNC40L3QuNC80LDQu9GM0L3QvtC1INC60L7Qu9C70LjRh9C10YHRgtCy0L4g0YHQuNC80LLQvtC70L7QsiAke21pbn0uINCU0LvQuNC90LAg0YLQtdC60YHRgtCwINGB0LXQudGH0LDRgSAke2N1cnJlbnRMZW5ndGh9INGB0LjQvNCy0L7Qu2BcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgX3NldEZpZWxkRXJyb3IoaW5wdXQpIHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcclxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICB9XHJcbiAgX3NldEJ1dHRvblN0YXRlKCkge1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuX2Zvcm0uY2hlY2tWYWxpZGl0eSgpO1xyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgdGhpcy5fc3VtYml0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX3N1bWJpdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBfZGlzYWJsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgdGhpcy5fc3VtYml0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9zdW1iaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgfVxyXG4gIF9oYW5kbGVGb3JtU3VtYml0KGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLl9kaXNhYmxlQnV0dG9uU3RhdGUoKTtcclxuICB9XHJcbiAgX2hhbmRsZUZvcm1JbnB1dChldnQpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZ0LnRhcmdldDtcclxuICAgIC8v0LjRidC10Lwg0L3QtSDQstCw0LvQuNC00L3Ri9C1INC/0L7Qu9GPINC4INGD0YHRgtCw0L3QvtCy0LjRgtGMINC+0YjQuNCx0LrQuFxyXG4gICAgdGhpcy5fc2V0Q3VzdG9tRXJyb3IoaW5wdXQpO1xyXG4gICAgLy8g0L/QvtC60LDQt9GL0LLQsNC10Lwg0L7RiNC40LHQutC4XHJcbiAgICB0aGlzLl9zZXRGaWVsZEVycm9yKGlucHV0KTtcclxuICAgIC8v0LTQsNC60YLQuNCy0LDRhtC40Y8g0LrQvdC+0L/QutC4XHJcbiAgICB0aGlzLl9zZXRCdXR0b25TdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldnQgPT4gdGhpcy5faGFuZGxlRm9ybVN1bWJpdChldnQpKTtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGV2dCA9PiB0aGlzLl9oYW5kbGVGb3JtSW5wdXQoZXZ0KSk7XHJcbiAgICB0aGlzLl9zZXRCdXR0b25TdGF0ZSgpO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoeyBuYW1lLCBsaW5rLCBoYW5kbGVDYXJkQ2xpY2sgfSwgY2FyZFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBsaW5rO1xyXG4gICAgLy90aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fY2FyZCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgfVxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKTtcclxuICAgIGNvbnN0IGNhcmRzRWxlbWVudCA9IGVsZW1lbnRUZW1wbGF0ZS5jb250ZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBjYXJkc0VsZW1lbnQ7XHJcbiAgfVxyXG4gIF9yZW1vdmVDYXJkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fY2FyZC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2NhcmQgPSBudWxsO1xyXG4gIH07XHJcbiAgX2xpa2VDYXJkKGV2dCkge1xyXG4gICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiZWxlbWVudF9fdmVjdG9yX2FjdGl2ZVwiKTtcclxuICB9XHJcbiAgX3NldEV2ZW50TGlzdG5lcnMoKSB7XHJcbiAgICB0aGlzLl9jYXJkXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2RlbGV0ZVwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX3JlbW92ZUNhcmQpO1xyXG4gICAgdGhpcy5fY2FyZFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X192ZWN0b3JcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9saWtlQ2FyZCk7XHJcbiAgICB0aGlzLl9jYXJkXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2ltYWdlXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9uYW1lLCB0aGlzLl9saW5rKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGdlbmVyYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5fY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX3RpdGxlXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgIHRoaXMuX2ltYWdlLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLl9pbWFnZS5hbHQgPSB0aGlzLl9uYW1lO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0bmVycygpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhcmQ7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5cIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5cIik7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG4gIF9oYW5kbGVFc2NDbG9zZSA9IGV2dCA9PiB7XHJcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcHVwXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19idXR0b24tY2xvc2VcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZXZ0ID0+IHtcclxuICAgICAgaWYgKGV2dC50YXJnZXQgIT09IGV2dC5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCB7IGZvcm1TdWJtaXQgfSkge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9mb3JtU3VibWl0ID0gZm9ybVN1Ym1pdDtcclxuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2J1dHRvblwiKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9fY29udGFpbmVyXCIpO1xyXG4gIH1cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goaW5wdXQgPT4gKGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWUpKTtcclxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gIH1cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZ0ID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuX2Zvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLy9leHBvcnQgY29uc3QgcG9wdXBQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfcHJvZmlsZScpO1xyXG4vLy9leHBvcnQgY29uc3QgcG9wdXBBZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2FkZF9jYXJkJyk7XHJcbi8vL2V4cG9ydCBjb25zdCBwb3B1cEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfb3Blbi1pbWdcIik7XHJcblxyXG4vLy9leHBvcnQgY29uc3QgYnV0dG9uQ2xvc2VQcm9maWxlID0gcG9wdXBQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fYnV0dG9uLWNsb3NlJyk7XHJcbi8vL2V4cG9ydCBjb25zdCBidXR0b25DbG9zZUNhcmQgPSBwb3B1cEFkZENhcmQucXVlcnlTZWxlY3RvcignLnBvcHVwX19idXR0b24tY2xvc2UnKTtcclxuLy8vZXhwb3J0IGNvbnN0IGJ1dHRvbkNsb3NlSW1nID0gcG9wdXBJbWcucXVlcnlTZWxlY3RvcignLnBvcHVwX19idXR0b24tY2xvc2UnKTtcclxuXHJcblxyXG4vLy9leHBvcnQgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudHMnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtUHJvZmlsZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG5leHBvcnQgY29uc3QgZm9ybUFkZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9wb3B1cF9hZGQtY2FyZCcpO1xyXG5leHBvcnQgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2NvbnRhaW5lcl90eXBlX25hbWUnKTtcclxuZXhwb3J0IGNvbnN0IGpvYklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2NvbnRhaW5lcl90eXBlX2luZm8nKTtcclxuLy8vZXhwb3J0IGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2NvbnRhaW5lcl90eXBlX2luZicpO1xyXG4vLy9leHBvcnQgY29uc3QgbGlua0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fY29udGFpbmVyX3R5cGVfc3JjJyk7XHJcblxyXG5leHBvcnQgY29uc3QgYnV0dG9uUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpO1xyXG4vLy9leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fdGl0bGUnKTtcclxuLy8vZXhwb3J0IGNvbnN0IHByb2ZpbGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX3N1YnRpdGxlJyk7XHJcbmV4cG9ydCBjb25zdCBidXR0b25DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2FkZGJ1dHRvbicpO1xyXG5cclxuLy8vZXhwb3J0IGNvbnN0IHBpY3R1cmVQb3B1cEltYWdlID0gcG9wdXBJbWcucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIik7XHJcbi8vL2V4cG9ydCBjb25zdCBwb3B1cFN1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc3VidGl0bGVcIik7XHJcbiIsImltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5cclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCB7IGluaXRpYWxDYXJkcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2luaXRpYWxDYXJkcy5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGZvcm1Qcm9maWxlRWRpdCxcclxuICBmb3JtQWRkQ2FyZCxcclxuICBuYW1lSW5wdXQsXHJcbiAgam9iSW5wdXQsXHJcbiAgYnV0dG9uUHJvZmlsZSxcclxuICBidXR0b25DYXJkLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzLmpzXCI7XHJcblxyXG4vKmZ1bmN0aW9uIHJlbmRlckNhcmRzKCkge1xyXG5mZXRjaCgnaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC00Ny9jYXJkcycsIHtcclxuICBtZXRob2Q6ICdHRVQnLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIGF1dGhvcml6YXRpb246ICcwMTYyYmUzMy0yNmZjLTQ1ODItOTdlOC0wZDc4ZjRhZDIwZDEnXHJcbiAgfVxyXG59KVxyXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxDYXJkcyA9IFsgXTtcclxuICAgIHJlc3VsdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBjb25zdCBjYXJkQWRkID0ge307XHJcbiAgICAgIGNhcmRBZGQubmFtZSA9IGVsZW1lbnQubmFtZTtcclxuICAgICAgY2FyZEFkZC5saW5rID0gZWxlbWVudC5saW5rO1xyXG4gICAgICBpbml0aWFsQ2FyZHMucHVzaChjYXJkQWRkKTtcclxuICB9KVxyXG5jYXJkTGlzdChpbml0aWFsQ2FyZHMpXHJcbiAgfSlcclxufVxyXG5cclxucmVuZGVyQ2FyZHMoaW5pdGlhbENhcmRzKTsqL1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGZvcm06IFwiLmZvcm1cIixcclxuICBzdW1iaXRCdXR0b246IFwiLmZvcm1fX2J1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fYnV0dG9uX2ludmFsaWRcIixcclxufTtcclxuXHJcbmNvbnN0IGJpZ0ltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLnBvcHVwX29wZW4taW1nXCIpO1xyXG5iaWdJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgY3JlYXRlQ2FyZCA9IChuYW1lLCBsaW5rKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICBsaW5rOiBsaW5rLFxyXG4gICAgICBoYW5kbGVDYXJkQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICBiaWdJbWFnZS5vcGVuKG5hbWUsIGxpbmspO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiI2NhcmRcIlxyXG4gICk7XHJcbiAgcmV0dXJuIGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyhcIi5wcm9maWxlX190aXRsZVwiLCBcIi5wcm9maWxlX19zdWJ0aXRsZVwiKTtcclxuY29uc3QgcG9wdXBGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfdHlwZV9wcm9maWxlXCIsIHtcclxuICBmb3JtU3VibWl0OiBkYXRhID0+IHtcclxuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xyXG4gIH0sXHJcbn0pO1xyXG5wb3B1cEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IG9wZW5Qcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBuYW1lSW5wdXQudmFsdWUgPSB1c2VyRGF0YS5uYW1lO1xyXG4gIGpvYklucHV0LnZhbHVlID0gdXNlckRhdGEuYWJvdXQ7XHJcbiAgcG9wdXBGb3JtLm9wZW4oKTtcclxufTtcclxuXHJcbmJ1dHRvblByb2ZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qcm9maWxlKTtcclxuXHJcbmNvbnN0IGFkZENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF9hZGRfY2FyZFwiLCB7XHJcbiAgZm9ybVN1Ym1pdDogaXRlbSA9PiB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoaXRlbS5uYW1lLCBpdGVtLmxpbmspO1xyXG4gICAgY2FyZExpc3QuYWRkSXRlbVByZXBlbmQoY2FyZEVsZW1lbnQpO1xyXG4gIH0sXHJcbn0pO1xyXG5hZGRDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBoYW5kbGVBZGRDYXJkRm9ybSA9ICgpID0+IHtcclxuICBhZGRDYXJkLm9wZW4oKTtcclxufTtcclxuXHJcbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcclxuICAgIHJlbmRlcmVyOiBpdGVtID0+IHtcclxuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGl0ZW0ubmFtZSwgaXRlbS5saW5rKTtcclxuICAgICAgY2FyZExpc3QuYWRkSXRlbUFwcGVuZChjYXJkRWxlbWVudCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgXCIuZWxlbWVudHNcIlxyXG4pO1xyXG5jYXJkTGlzdC5yZW5kZXJJdGVtcygpO1xyXG5cclxuYnV0dG9uQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQWRkQ2FyZEZvcm0pO1xyXG5cclxuLy8v0LLQsNC70LjQtNCw0YbQuNGPXHJcblxyXG5jb25zdCBmb3JtQWRkVmFsaWQgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGZvcm1BZGRDYXJkKTtcclxuZm9ybUFkZFZhbGlkLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGZvcm1Qcm9maWxlVmFsaWQgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGZvcm1Qcm9maWxlRWRpdCk7XHJcbmZvcm1Qcm9maWxlVmFsaWQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9waWN0dXJlUG9wdXBJbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5fcG9wdXBTdWJ0aXRsZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3N1YnRpdGxlXCIpO1xyXG4gIH1cclxuICBvcGVuKG5hbWUsIGxpbmspIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIHRoaXMuX3BvcHVwU3VidGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fcGljdHVyZVBvcHVwSW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgIHRoaXMuX3BpY3R1cmVQb3B1cEltYWdlLnNyYyA9IGxpbms7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9maWxlTmFtZSwgcHJvZmlsZUluZm8pIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlTmFtZSk7XHJcbiAgICB0aGlzLl9wcm9maWxlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZUluZm8pO1xyXG4gIH1cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50LFxyXG4gICAgICBhYm91dDogdGhpcy5fcHJvZmlsZUluZm8udGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gIH1cclxuICBzZXRVc2VySW5mbyhkYXRhKSB7XHJcbiAgICB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX3Byb2ZpbGVJbmZvLnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlckl0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgdGhpcy5fcmVuZGVySXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWRkSXRlbUFwcGVuZChlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuICBhZGRJdGVtUHJlcGVuZChlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLQkNGA0YXRi9C3XCIsXHJcbiAgICAgIGxpbms6XHJcbiAgICAgICAgXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMXCIsXHJcbiAgICAgIGxpbms6XHJcbiAgICAgICAgXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvY2hlbHlhYmluc2stb2JsYXN0LmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLQmNCy0LDQvdC+0LLQvlwiLFxyXG4gICAgICBsaW5rOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2l2YW5vdm8uanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcItCa0LDQvNGH0LDRgtC60LBcIixcclxuICAgICAgbGluazpcclxuICAgICAgICBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcItCl0L7Qu9C80L7Qs9C+0YDRgdC60LjQuSDRgNCw0LnQvtC9XCIsXHJcbiAgICAgIGxpbms6XHJcbiAgICAgICAgXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2hvbG1vZ29yc2t5LXJheW9uLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCLQkdCw0LnQutCw0LtcIixcclxuICAgICAgbGluazpcclxuICAgICAgICBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9iYWlrYWwuanBnXCIsXHJcbiAgICB9LFxyXG4gIF07Il0sIm5hbWVzIjpbIkZvcm1WYWxpZGF0b3IiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsImZvcm0iLCJ0aGlzIiwiX2Zvcm0iLCJfc3VtYml0QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInN1bWJpdEJ1dHRvbiIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9zZXRDdXN0b21FcnJvciIsImlucHV0IiwidmFsaWRpdHkiLCJzZXRDdXN0b21WYWxpZGl0eSIsInRvb1Nob3J0IiwidG9vTG9uZyIsImN1cnJlbnRMZW5ndGgiLCJ2YWx1ZSIsImxlbmd0aCIsIm1pbiIsImdldEF0dHJpYnV0ZSIsIl9zZXRGaWVsZEVycm9yIiwiZG9jdW1lbnQiLCJpZCIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfc2V0QnV0dG9uU3RhdGUiLCJjaGVja1ZhbGlkaXR5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIiwiX2Rpc2FibGVCdXR0b25TdGF0ZSIsImFkZCIsInNldEF0dHJpYnV0ZSIsIl9oYW5kbGVGb3JtU3VtYml0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJfaGFuZGxlRm9ybUlucHV0IiwidGFyZ2V0IiwiZW5hYmxlVmFsaWRhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJDYXJkIiwibmFtZSIsImxpbmsiLCJoYW5kbGVDYXJkQ2xpY2siLCJjYXJkU2VsZWN0b3IiLCJfbmFtZSIsIl9saW5rIiwiX2hhbmRsZUNhcmRDbGljayIsIl9jYXJkU2VsZWN0b3IiLCJfY2FyZCIsIl9nZXRUZW1wbGF0ZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfcmVtb3ZlQ2FyZCIsIl9saWtlQ2FyZCIsInRvZ2dsZSIsIl9zZXRFdmVudExpc3RuZXJzIiwiZ2VuZXJhdGVDYXJkIiwiX2ltYWdlIiwic3JjIiwiYWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiY2xvc2UiLCJiaW5kIiwiX2hhbmRsZUVzY0Nsb3NlIiwib3BlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJzZXRFdmVudExpc3RlbmVycyIsImN1cnJlbnRUYXJnZXQiLCJQb3B1cFdpdGhGb3JtIiwiZm9ybVN1Ym1pdCIsInN1cGVyIiwiX2Zvcm1TdWJtaXQiLCJfc3VibWl0QnV0dG9uIiwiX2lucHV0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dFZhbHVlcyIsImZvckVhY2giLCJyZXNldCIsImZvcm1Qcm9maWxlRWRpdCIsImZvcm1BZGRDYXJkIiwibmFtZUlucHV0Iiwiam9iSW5wdXQiLCJidXR0b25Qcm9maWxlIiwiYnV0dG9uQ2FyZCIsImJpZ0ltYWdlIiwiX3BpY3R1cmVQb3B1cEltYWdlIiwiX3BvcHVwU3VidGl0bGUiLCJjcmVhdGVDYXJkIiwidXNlckluZm8iLCJwcm9maWxlTmFtZSIsInByb2ZpbGVJbmZvIiwiX3Byb2ZpbGVOYW1lIiwiX3Byb2ZpbGVJbmZvIiwiZ2V0VXNlckluZm8iLCJhYm91dCIsInNldFVzZXJJbmZvIiwiZGF0YSIsInBvcHVwRm9ybSIsInVzZXJEYXRhIiwiYWRkQ2FyZCIsIml0ZW0iLCJjYXJkRWxlbWVudCIsImNhcmRMaXN0IiwiYWRkSXRlbVByZXBlbmQiLCJpdGVtcyIsInJlbmRlcmVyIiwiY29udGFpbmVyU2VsZWN0b3IiLCJfcmVuZGVySXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVySXRlbXMiLCJhZGRJdGVtQXBwZW5kIiwiZWxlbWVudCIsImFwcGVuZCIsInByZXBlbmQiXSwic291cmNlUm9vdCI6IiJ9