class ListModel {
  constructor(items) {
    this.items = (items) ? ko.observableArray(items) : ko.observableArray([]);
    this.itemToAdd = ko.observable('');
  }
  addItem(item) {
    this.items.push(item);
  }
}