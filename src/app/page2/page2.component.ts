import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}