export default class UserInfo {
  constructor(profileName, profileInfo, profileAvatar) {
    this._profileName = document.querySelector(profileName);
    this._profileInfo = document.querySelector(profileInfo);
    this._profileAvatar = document.querySelector(profileAvatar);
    this._profileId = "";
  }
  getUserInfo() {
    return {
     name : this._profileName.textContent,
     about : this._profileInfo.textContent,
     avatar: this._profileAvatar.src,
     id: this._profileId
    }
  }
  setUserInfo(name, about, id) {
    this._profileName.textContent = name;
    this._profileInfo.textContent = about;
    this._profileId = id;
    //this._profileAvatar.src = data.avatar;
  }
  getUserId() {
    return this._userId;
  }
  setUserAvatar(avatar) {
    this._profileAvatar.src = avatar;
  }
}
