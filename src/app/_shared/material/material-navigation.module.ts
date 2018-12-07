import { NgModule } from '@angular/core';
import {
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule
    ],
})
export class MaterialNavigationModule { }
