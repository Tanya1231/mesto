export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
  addItemAppend(element) {
    this._container.append(element);
  }
  addItemPrepend(element) {
    this._container.prepend(element);
  }
}
