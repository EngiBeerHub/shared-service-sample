import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field/input-field.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component, Page3Component, InputFieldComponent, RadioButtonsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
