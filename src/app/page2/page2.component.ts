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
  textValue = '';

  constructor(
    private router: Router,
    private location: Location,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const savedTextValue = this.sharedService.getTextValue();
    if (savedTextValue) {
      this.textValue = savedTextValue;
    }
  }

  navigateToPage3() {
    this.sharedService.setTextValue(this.textValue);
    this.router.navigate(['/page3']);
  }
  goBack() {
    this.sharedService.clearTextValue();
    this.location.back();
  }
}
