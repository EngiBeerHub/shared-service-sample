import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Output() textValueChange = new EventEmitter<string>();
  textValue = '';

  // inputの値が変化した時にその値をemitする
  onValueChange() {
    this.textValueChange.emit(this.textValue);
  }
}
