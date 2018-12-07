import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';

import { MaterialButtonsAndIndicatorsModule } from '../_shared/material/material-buttons-and-indicators.module';
import { MaterialLayoutModule } from '../_shared/material/material-layout.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialButtonsAndIndicatorsModule,
    MaterialLayoutModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
