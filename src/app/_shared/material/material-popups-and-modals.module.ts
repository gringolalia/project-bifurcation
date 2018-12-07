import { NgModule } from '@angular/core';
import {
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [
        MatBottomSheetModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule
    ],
    exports: [
        MatBottomSheetModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule
    ],
})
export class MaterialPopupsAndModalsModule { }
