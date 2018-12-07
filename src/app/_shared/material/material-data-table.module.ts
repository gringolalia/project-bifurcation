import { NgModule } from '@angular/core';
import {
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
    ],
    exports: [
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
    ],
})
export class MaterialDataTableModule { }
