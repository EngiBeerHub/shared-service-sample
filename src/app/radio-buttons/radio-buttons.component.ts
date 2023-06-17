import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss'],
})
export class RadioButtonsComponent {
  @Output() selectionChange = new EventEmitter<string>();
  @Input() selectedOption: string = '';

  selectOption(option: string) {
    this.selectedOption = option;
    this.selectionChange.emit(this.selectedOption);
  }
}
