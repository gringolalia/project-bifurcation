import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';

import { MaterialButtonsAndIndicatorsModule } from '../_shared/material/material-buttons-and-indicators.module';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialButtonsAndIndicatorsModule,
    OrdersRoutingModule
  ],
  declarations: [
    OrderListComponent
  ]
})
export class OrdersModule { }
