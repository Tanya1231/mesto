export default class UserInfo {
  constructor(profileName, profileInfo) {
    this._profileName = document.querySelector(profileName);
    this._profileInfo = document.querySelector(profileInfo);
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileInfo.textContent,
    };
  }
  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileInfo.textContent = data.about;
  }
}
