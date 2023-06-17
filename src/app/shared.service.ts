import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private textValue: string = '';

  constructor() {}

  setTextValue(value: string) {
    this.textValue = value;
  }

  getTextValue() {
    return this.textValue;
  }

  clearTextValue() {
    this.textValue = '';
  }
}
