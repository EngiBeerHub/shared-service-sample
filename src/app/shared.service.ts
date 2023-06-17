import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private textValue: string = '';
  private radioButtonSelection: string = '';

  constructor() {}

  setTextValue(value: string) {
    this.textValue = value;
  }

  getTextValue() {
    return this.textValue;
  }

  clearValue() {
    this.textValue = '';
    this.radioButtonSelection = '';
  }

  setRadioValue(value: string) {
    this.radioButtonSelection = value;
  }

  getRadioValue() {
    return this.radioButtonSelection;
  }
}
