import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';

import { MaterialButtonsAndIndicatorsModule } from '../_shared/material/material-buttons-and-indicators.module';
import { MaterialLayoutModule } from '../_shared/material/material-layout.module';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialLayoutModule,
    MaterialButtonsAndIndicatorsModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
