import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';

import { MaterialButtonsAndIndicatorsModule } from '../_shared/material/material-buttons-and-indicators.module';
import { MaterialLayoutModule } from '../_shared/material/material-layout.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsBasicComponent } from './settings-basic/settings-basic.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialLayoutModule,
    MaterialButtonsAndIndicatorsModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsBasicComponent]
})
export class SettingsModule { }
