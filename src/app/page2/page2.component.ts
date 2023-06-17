import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {
  textValue: string = '';
  radioButtonSelection: string = '';

  constructor(
    private router: Router,
    private location: Location,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const savedTextValue = this.sharedService.getTextValue();
    const savedRadioValue = this.sharedService.getRadioValue();
    if (savedTextValue) {
      this.textValue = savedTextValue;
    }
    if (savedRadioValue) {
      this.radioButtonSelection = savedRadioValue;
    }
  }

  textValueChanged(value: string) {
    this.textValue = value;
  }

  radioButtonChanged(value: string) {
    this.radioButtonSelection = value;
  }

  navigateToPage3() {
    this.sharedService.setTextValue(this.textValue);
    this.sharedService.setRadioValue(this.radioButtonSelection);
    this.router.navigate(['/page3']);
  }

  goBack() {
    this.sharedService.clearValue();
    this.location.back();
  }
}
