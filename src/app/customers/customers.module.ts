import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';

import { MaterialButtonsAndIndicatorsModule } from '../_shared/material/material-buttons-and-indicators.module';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialButtonsAndIndicatorsModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
