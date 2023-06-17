import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {
  textValue = '';

  constructor(
    private location: Location,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.textValue = this.sharedService.getTextValue();
  }

  goBack() {
    this.location.back();
  }
}
