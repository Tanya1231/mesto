export default class UserInfo {
  constructor({ profileName, profileInfo, profileAvatar }) {
    this._profileName = document.querySelector(profileName);
    this._profileInfo = document.querySelector(profileInfo);
    this._profileAvatar = document.querySelector(profileAvatar);
  }
  getUserInfo() {
   return {
      name: this._profileName.textContent,
      about: this._profileInfo.textContent,
    };
  }
  setUserInfo(userInfo) {
    this._profileName.textContent = userInfo.name;
    this._profileInfo.textContent = userInfo.about;
    this._profileAvatar.src = userInfo.avatar;
  }
  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }
}
