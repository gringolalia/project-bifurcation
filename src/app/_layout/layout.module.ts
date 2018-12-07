import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialButtonsAndIndicatorsModule } from '../_shared/material/material-buttons-and-indicators.module';
import { MaterialLayoutModule } from '../_shared/material/material-layout.module';
import { MaterialNavigationModule } from '../_shared/material/material-navigation.module';
import { MaterialPopupsAndModalsModule } from '../_shared/material/material-popups-and-modals.module';

import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { LayoutService } from './layout.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialButtonsAndIndicatorsModule, 
    MaterialLayoutModule,
    MaterialNavigationModule,
    MaterialPopupsAndModalsModule
  ],
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    LayoutService
  ]
})
export class LayoutModule { }
