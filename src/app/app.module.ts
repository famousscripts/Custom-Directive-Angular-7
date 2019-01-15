import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeContentDirective } from './change-content.directive';
@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule,FormsModule, HttpClientModule],
  declarations: [ AppComponent, ChangeContentDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
