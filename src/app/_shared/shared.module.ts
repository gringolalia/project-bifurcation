import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * What kinds of modules should I have and how should I use them?
 * https://angular.io/guide/ngmodule-faq#sharedmodule
 */

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, 
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }