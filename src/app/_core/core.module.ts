import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * What kinds of modules should I have and how should I use them?
 * https://angular.io/guide/ngmodule-faq#coremodule
 */

@NgModule({
  imports: [
    CommonModule,
    //NoopAnimationsModule
    BrowserAnimationsModule
  ],
  exports: [],
  providers: []
})
export class CoreModule {
  /**
   * Example - NgModules
   * https://stackblitz.com/angular/vbpoadpegql?file=src%2Fapp%2Fcore%2Fcore.module.ts
   */
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
