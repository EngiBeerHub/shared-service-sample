import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component {
  constructor(private router: Router, private location: Location) {}

  navigateToPage3() {
    this.router.navigate(['/page3']);
  }

  goBack() {
    this.location.back();
  }
}
