import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './_core/core.module';

import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './_layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    KeyboardShortcutsModule,
    AppRoutingModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
