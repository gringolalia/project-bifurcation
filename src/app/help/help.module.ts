import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';

import { MaterialButtonsAndIndicatorsModule } from '../_shared/material/material-buttons-and-indicators.module';
import { MaterialFormControlsModule } from '../_shared/material/material-form-controls.module';
import { MaterialDataTableModule } from '../_shared/material/material-data-table.module';
import { MaterialLayoutModule } from '../_shared/material/material-layout.module';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help/help.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialButtonsAndIndicatorsModule,
    MaterialFormControlsModule,
    MaterialDataTableModule,
    MaterialLayoutModule,
    HelpRoutingModule
  ],
  declarations: [HelpComponent, ShortcutsComponent]
})
export class HelpModule { }
