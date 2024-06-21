import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    return this.items.find(item => item.id === id);
  }

  addItem(item) {
    item.id = this.items.length + 1;
    this.items.push(item);
  }

  updateItem(item) {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index > -1) {
      this.items[index] = item;
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
